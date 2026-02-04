// YouTube API Service
// Fetches videos from YouTube channel or playlist

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
  channelTitle: string;
  videoUrl: string;
  embedUrl: string;
}

interface YouTubeApiResponse {
  items: Array<{
    id: { videoId?: string };
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        high: { url: string };
        medium: { url: string };
        default: { url: string };
      };
      publishedAt: string;
      channelTitle: string;
    };
    contentDetails?: {
      duration: string;
    };
  }>;
  nextPageToken?: string;
}

// Convert ISO 8601 duration (PT45M30S) to readable format (45:30)
function formatDuration(duration: string): string {
  if (!duration) return "0:00";
  
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "0:00";
  
  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// Format date to readable format
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Fetch videos from YouTube channel
 */
export async function fetchChannelVideos(
  channelId: string,
  maxResults: number = 12,
  pageToken?: string
): Promise<{ videos: YouTubeVideo[]; nextPageToken?: string }> {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  
  if (!apiKey) {
    throw new Error("YouTube API key is not configured");
  }

  if (!channelId) {
    throw new Error("YouTube Channel ID is not configured");
  }

  try {
    // First, get the uploads playlist ID from the channel
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    );

    if (!channelResponse.ok) {
      throw new Error(`Failed to fetch channel: ${channelResponse.statusText}`);
    }

    const channelData = await channelResponse.json();
    
    if (!channelData.items || channelData.items.length === 0) {
      throw new Error("Channel not found");
    }

    const uploadsPlaylistId = channelData.items[0].contentDetails?.relatedPlaylists?.uploads;
    
    if (!uploadsPlaylistId) {
      throw new Error("Could not find uploads playlist for channel");
    }

    // Now fetch videos from the uploads playlist
    return await fetchPlaylistVideos(uploadsPlaylistId, maxResults, pageToken);
  } catch (error) {
    console.error("Error fetching channel videos:", error);
    throw error;
  }
}

/**
 * Fetch videos from YouTube playlist
 */
export async function fetchPlaylistVideos(
  playlistId: string,
  maxResults: number = 12,
  pageToken?: string
): Promise<{ videos: YouTubeVideo[]; nextPageToken?: string }> {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  
  if (!apiKey) {
    throw new Error("YouTube API key is not configured");
  }

  if (!playlistId) {
    throw new Error("YouTube Playlist ID is not configured");
  }

  try {
    // Fetch playlist items
    const playlistUrl = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    playlistUrl.searchParams.set("part", "snippet,contentDetails");
    playlistUrl.searchParams.set("playlistId", playlistId);
    playlistUrl.searchParams.set("maxResults", maxResults.toString());
    playlistUrl.searchParams.set("key", apiKey);
    if (pageToken) {
      playlistUrl.searchParams.set("pageToken", pageToken);
    }

    const playlistResponse = await fetch(playlistUrl.toString());

    if (!playlistResponse.ok) {
      const errorData = await playlistResponse.json().catch(() => ({}));
      throw new Error(
        `Failed to fetch playlist: ${playlistResponse.statusText}. ${errorData.error?.message || ""}`
      );
    }

    const playlistData = await playlistResponse.json();

    if (!playlistData.items || playlistData.items.length === 0) {
      return { videos: [], nextPageToken: playlistData.nextPageToken };
    }

    // Get video IDs
    const videoIds = playlistData.items
      .map((item: any) => item.contentDetails?.videoId)
      .filter(Boolean)
      .join(",");

    // Fetch video details (including duration)
    const videosUrl = new URL("https://www.googleapis.com/youtube/v3/videos");
    videosUrl.searchParams.set("part", "snippet,contentDetails");
    videosUrl.searchParams.set("id", videoIds);
    videosUrl.searchParams.set("key", apiKey);

    const videosResponse = await fetch(videosUrl.toString());

    if (!videosResponse.ok) {
      throw new Error(`Failed to fetch video details: ${videosResponse.statusText}`);
    }

    const videosData = await videosResponse.json();

    // Transform the data
    const videos: YouTubeVideo[] = videosData.items.map((item: any) => {
      const videoId = item.id;
      return {
        id: videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
        publishedAt: formatDate(item.snippet.publishedAt),
        duration: formatDuration(item.contentDetails?.duration || ""),
        channelTitle: item.snippet.channelTitle,
        videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
      };
    });

    return {
      videos,
      nextPageToken: playlistData.nextPageToken,
    };
  } catch (error) {
    console.error("Error fetching playlist videos:", error);
    throw error;
  }
}

/**
 * Main function to fetch videos (automatically uses channel or playlist)
 */
export async function fetchYouTubeVideos(
  maxResults: number = 12,
  pageToken?: string
): Promise<{ videos: YouTubeVideo[]; nextPageToken?: string }> {
  const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
  const playlistId = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID;
  const defaultMaxResults = parseInt(import.meta.env.VITE_YOUTUBE_MAX_RESULTS || "12", 10);
  
  const results = maxResults || defaultMaxResults;

  // Prefer playlist over channel
  if (playlistId) {
    return await fetchPlaylistVideos(playlistId, results, pageToken);
  } else if (channelId) {
    return await fetchChannelVideos(channelId, results, pageToken);
  } else {
    throw new Error("Neither YouTube Channel ID nor Playlist ID is configured. Please set VITE_YOUTUBE_CHANNEL_ID or VITE_YOUTUBE_PLAYLIST_ID in your .env file");
  }
}
