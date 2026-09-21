// YouTube API Service

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailLarge: string;
  thumbnailTall: string;
  publishedAt: string;
  duration: string;
  durationSeconds: number;
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

function parseDurationToSeconds(duration: string): number {
  if (!duration) return 0;
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);
  return hours * 3600 + minutes * 60 + seconds;
}

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

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || "";
const YOUTUBE_CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || "";
const YOUTUBE_PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID || "";

export async function fetchPlaylistVideos(
  playlistId: string,
  maxResults: number = 50,
  pageToken?: string
): Promise<{ videos: YouTubeVideo[]; nextPageToken?: string }> {
  if (!YOUTUBE_API_KEY) {
    throw new Error("YouTube API key is not configured");
  }
  if (!playlistId) {
    throw new Error("YouTube Playlist ID is not configured");
  }

  try {
    const playlistUrl = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    playlistUrl.searchParams.set("part", "contentDetails");
    playlistUrl.searchParams.set("fields", "nextPageToken,items/contentDetails/videoId");
    playlistUrl.searchParams.set("playlistId", playlistId);
    playlistUrl.searchParams.set("maxResults", maxResults.toString());
    playlistUrl.searchParams.set("key", YOUTUBE_API_KEY);
    if (pageToken) {
      playlistUrl.searchParams.set("pageToken", pageToken);
    }

    const playlistResponse = await fetch(playlistUrl.toString());
    if (!playlistResponse.ok) {
      const errorData = await playlistResponse.json().catch(() => ({}));
      throw new Error(`Failed to fetch playlist: ${playlistResponse.statusText}. ${errorData.error?.message || ""}`);
    }

    const playlistData = await playlistResponse.json();
    if (!playlistData.items || playlistData.items.length === 0) {
      return { videos: [], nextPageToken: playlistData.nextPageToken };
    }

    const videoIds = playlistData.items
      .map((item: any) => item.contentDetails?.videoId)
      .filter(Boolean)
      .join(",");

    const videosUrl = new URL("https://www.googleapis.com/youtube/v3/videos");
    videosUrl.searchParams.set("part", "snippet,contentDetails");
    // Ask only for the fields the site uses, which keeps the response small
    videosUrl.searchParams.set("fields", "items(id,snippet(title,description,thumbnails,publishedAt,channelTitle),contentDetails/duration)");
    videosUrl.searchParams.set("id", videoIds);
    videosUrl.searchParams.set("key", YOUTUBE_API_KEY);

    const videosResponse = await fetch(videosUrl.toString());
    if (!videosResponse.ok) {
      throw new Error(`Failed to fetch video details: ${videosResponse.statusText}`);
    }

    const videosData = await videosResponse.json();

    const videos: YouTubeVideo[] = videosData.items.map((item: any) => {
      const videoId = item.id;
      const rawDuration = item.contentDetails?.duration || "";
      return {
        id: videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        // `medium` is a small (about 15 KB) true 16:9 image, right for grids and lists on slow connections
        thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
        // Only for the one featured video shown large. `high` is 4:3 with black bars, which a 16:9 box crops away
        thumbnailLarge: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.standard?.url || item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
        // For Shorts, which are cropped to a tall box and so need more height than `medium` has
        thumbnailTall: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url,
        publishedAt: formatDate(item.snippet.publishedAt),
        duration: formatDuration(rawDuration),
        durationSeconds: parseDurationToSeconds(rawDuration),
        channelTitle: item.snippet.channelTitle,
        videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
      };
    });

    return { videos, nextPageToken: playlistData.nextPageToken };
  } catch (error) {
    console.error("Error fetching playlist videos:", error);
    throw error;
  }
}

export async function fetchChannelVideos(
  channelId: string,
  maxResults: number = 50,
  pageToken?: string
): Promise<{ videos: YouTubeVideo[]; nextPageToken?: string }> {
  if (!YOUTUBE_API_KEY) {
    throw new Error("YouTube API key is not configured");
  }
  if (!channelId) {
    throw new Error("YouTube Channel ID is not configured");
  }

  try {
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${YOUTUBE_API_KEY}`
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
    return await fetchPlaylistVideos(uploadsPlaylistId, maxResults, pageToken);
  } catch (error) {
    console.error("Error fetching channel videos:", error);
    throw error;
  }
}

export async function fetchYouTubeVideos(
  maxResults: number = 50,
  pageToken?: string
): Promise<{ videos: YouTubeVideo[]; nextPageToken?: string }> {
  const playlistId = YOUTUBE_PLAYLIST_ID;
  const channelId = YOUTUBE_CHANNEL_ID;
  const defaultMaxResults = parseInt(import.meta.env.VITE_YOUTUBE_MAX_RESULTS || "50", 10);
  const results = maxResults || defaultMaxResults;

  if (playlistId) {
    return await fetchPlaylistVideos(playlistId, results, pageToken);
  } else if (channelId) {
    return await fetchChannelVideos(channelId, results, pageToken);
  } else {
    throw new Error("Neither YouTube Channel ID nor Playlist ID is configured.");
  }
}

// Helper to check if a video is a Short (YouTube Shorts are at most 3 minutes / 180 seconds)
export function isShort(video: YouTubeVideo): boolean {
  return video.durationSeconds > 0 && video.durationSeconds <= 180;
}

// Uploads are titled "Message Title || Speaker Name" - split that into its two parts
export function splitVideoTitle(title: string): { title: string; speaker?: string } {
  // Drop hashtags like "#jesus #gospel" that Shorts carry in their titles
  const withoutTags = title.replace(/(^|\s)#[^\s#]+/g, "").trim();
  const [main, ...rest] = (withoutTags || title).split("||");
  const speaker = rest.join("||").trim();
  return { title: main.trim() || title, speaker: speaker || undefined };
}

// Link to the church's YouTube channel, worked out from whichever ID is configured
export function getChannelUrl(): string | undefined {
  if (YOUTUBE_CHANNEL_ID) {
    return `https://www.youtube.com/channel/${YOUTUBE_CHANNEL_ID}`;
  }
  // A channel's uploads playlist ID is its channel ID with "UU" in place of "UC"
  if (YOUTUBE_PLAYLIST_ID.startsWith("UU")) {
    return `https://www.youtube.com/channel/UC${YOUTUBE_PLAYLIST_ID.slice(2)}`;
  }
  return undefined;
}