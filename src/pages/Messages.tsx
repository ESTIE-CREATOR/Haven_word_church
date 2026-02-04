import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import { Video, Headphones, Calendar, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useState, useEffect } from "react";
import { fetchYouTubeVideos, YouTubeVideo } from "@/services/youtube";

const Messages = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>();
  const [loadingMore, setLoadingMore] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(6); // Show 6 videos initially

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchYouTubeVideos(12);
      setVideos(result.videos);
      setNextPageToken(result.nextPageToken);
      setDisplayedCount(6); // Reset to initial display count
    } catch (err) {
      console.error("Error loading videos:", err);
      setError(err instanceof Error ? err.message : "Failed to load videos. Please check your YouTube API configuration.");
    } finally {
      setLoading(false);
    }
  };

  const loadMoreVideos = async () => {
    if (!nextPageToken || loadingMore) return;

    try {
      setLoadingMore(true);
      const result = await fetchYouTubeVideos(12, nextPageToken);
      setVideos((prev) => [...prev, ...result.videos]);
      setNextPageToken(result.nextPageToken);
      setDisplayedCount((prev) => prev + 6); // Show 6 more videos
    } catch (err) {
      console.error("Error loading more videos:", err);
      setError(err instanceof Error ? err.message : "Failed to load more videos.");
    } finally {
      setLoadingMore(false);
    }
  };

  const handleViewMore = () => {
    if (displayedCount < videos.length) {
      // Show more videos from already loaded list
      setDisplayedCount((prev) => Math.min(prev + 6, videos.length));
    } else if (nextPageToken) {
      // Load more videos from YouTube
      loadMoreVideos();
    }
  };

  const displayedVideos = videos.slice(0, displayedCount);
  const hasMoreVideos = displayedCount < videos.length || nextPageToken;

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
      <TubelightHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200')] bg-cover bg-center opacity-30"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">Messages & Teachings</h1>
              <p className="text-base md:text-lg text-gray-100">
                Watch and listen to inspiring messages from our services
              </p>
            </div>
          </div>
        </section>

        {/* Video Messages Section */}
        <section className="section-padding bg-black">
          <div className="container-custom">
            <div className="flex items-center gap-2 mb-8">
              <Video className="h-6 w-6 text-primary" />
              <h2 className="heading-md text-white">Video Messages</h2>
            </div>

            {loading && (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                <p className="text-gray-300">Loading videos...</p>
              </div>
            )}

            {error && (
              <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 mb-8">
                <p className="text-red-300 text-center">{error}</p>
                <p className="text-gray-400 text-sm text-center mt-2">
                  Please make sure you have set VITE_YOUTUBE_CHANNEL_ID or VITE_YOUTUBE_PLAYLIST_ID in your .env file
                </p>
              </div>
            )}

            {!loading && !error && videos.length === 0 && (
              <div className="text-center py-12">
                <Video className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">No videos found. Please check your YouTube configuration.</p>
              </div>
            )}

            {!loading && displayedVideos.length > 0 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayedVideos.map((video) => (
                    <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-gray-900 border-gray-800">
                      <div className="relative h-48 overflow-hidden group cursor-pointer">
                        <a
                          href={video.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full"
                        >
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Video className="h-12 w-12 text-white" />
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                        </a>
                      </div>
                      <CardContent className="p-4 bg-gray-900">
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-white">{video.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                          <Calendar className="h-4 w-4" />
                          <span>{video.publishedAt}</span>
                        </div>
                        <p className="text-sm text-gray-300 mb-4">{video.channelTitle}</p>
                        <InteractiveHoverButton
                          asChild
                          text="Watch Now"
                          className="w-full"
                        >
                          <a
                            href={video.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Watch Now
                          </a>
                        </InteractiveHoverButton>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {hasMoreVideos && (
                  <div className="flex justify-center mt-8">
                    <InteractiveHoverButton
                      onClick={handleViewMore}
                      text={loadingMore ? "Loading..." : "View More"}
                      className="px-8 py-3"
                      disabled={loadingMore}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Audio Messages Section */}
        <section className="section-padding bg-gray-900">
          <div className="container-custom">
            <div className="flex items-center gap-2 mb-8">
              <Headphones className="h-6 w-6 text-secondary" />
              <h2 className="heading-md text-white">Audio Messages</h2>
            </div>

            <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700">
              <CardContent className="p-8 text-center">
                <Headphones className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="heading-md mb-4 text-white">Listen on Telegram</h3>
                <p className="text-gray-300 mb-6">
                  All our audio messages are available on our Telegram channel. Join us for daily devotionals and weekly sermon recordings.
                </p>
                <InteractiveHoverButton
                  asChild
                  text="Join Telegram Channel"
                  className="bg-primary hover:bg-primary/90 border-primary"
                >
                  <a
                    href="https://t.me/havenwordchurch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Telegram Channel
                  </a>
                </InteractiveHoverButton>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Messages;
