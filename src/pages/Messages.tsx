import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import { Video, Headphones, Calendar, Loader2, Film } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useState, useEffect } from "react";
import { fetchYouTubeVideos, YouTubeVideo, isShort } from "@/services/youtube";

const Messages = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>();
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchYouTubeVideos(50);
      setVideos(result.videos);
      setNextPageToken(result.nextPageToken);
    } catch (err) {
      console.error("Error loading videos:", err);
      setError(err instanceof Error ? err.message : "Failed to load videos.");
    } finally {
      setLoading(false);
    }
  };

  const loadMoreVideos = async () => {
    if (!nextPageToken || loadingMore) return;
    try {
      setLoadingMore(true);
      const result = await fetchYouTubeVideos(50, nextPageToken);
      setVideos((prev) => [...prev, ...result.videos]);
      setNextPageToken(result.nextPageToken);
    } catch (err) {
      console.error("Error loading more videos:", err);
    } finally {
      setLoadingMore(false);
    }
  };

  const longVideos = videos.filter((v) => !isShort(v));
  const shorts = videos.filter((v) => isShort(v));

  const [displayedLong, setDisplayedLong] = useState(6);
  const [displayedShorts, setDisplayedShorts] = useState(6);

  const shownLong = longVideos.slice(0, displayedLong);
  const shownShorts = shorts.slice(0, displayedShorts);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
      <TubelightHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 bg-[url('/pictures/head/504716303_698690186262758_3524301639622208211_n.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">Messages & Teachings</h1>
              <p className="text-base md:text-lg text-primary-foreground/90">
                Watch and listen to inspiring messages from our services
              </p>
            </div>
          </div>
        </section>

        {/* Loading / Error */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-12 bg-background">
            <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Loading videos...</p>
          </div>
        )}

        {error && (
          <div className="bg-background section-padding">
            <div className="container-custom">
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                <p className="text-destructive text-center">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Long Videos Section */}
        {!loading && !error && (
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="flex items-center gap-2 mb-8">
                <Video className="h-6 w-6 text-primary" />
                <h2 className="heading-md text-foreground">Video Messages</h2>
              </div>

              {longVideos.length === 0 ? (
                <div className="text-center py-12">
                  <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No video messages found.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {shownLong.map((video) => (
                      <VideoCard key={video.id} video={video} />
                    ))}
                  </div>
                  {displayedLong < longVideos.length && (
                    <div className="flex justify-center mt-8">
                      <InteractiveHoverButton
                        onClick={() => setDisplayedLong((p) => p + 6)}
                        text="View More"
                        className="px-8 py-3"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        )}

        {/* Shorts Section */}
        {!loading && !error && shorts.length > 0 && (
          <section className="section-padding bg-muted">
            <div className="container-custom">
              <div className="flex items-center gap-2 mb-8">
                <Film className="h-6 w-6 text-secondary" />
                <h2 className="heading-md text-foreground">Shorts</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {shownShorts.map((video) => (
                  <a
                    key={video.id}
                    href={`https://www.youtube.com/shorts/${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-card border border-border">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Film className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                        <p className="text-white text-xs font-medium line-clamp-2">{video.title}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {displayedShorts < shorts.length && (
                <div className="flex justify-center mt-8">
                  <InteractiveHoverButton
                    onClick={() => setDisplayedShorts((p) => p + 6)}
                    text="View More Shorts"
                    className="px-8 py-3"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* Load more from API */}
        {!loading && !error && nextPageToken && (
          <div className="flex justify-center py-8 bg-background">
            <InteractiveHoverButton
              onClick={loadMoreVideos}
              text={loadingMore ? "Loading..." : "Load More Videos"}
              className="px-8 py-3"
              disabled={loadingMore}
            />
          </div>
        )}

        {/* Audio Messages Section */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="flex items-center gap-2 mb-8">
              <Headphones className="h-6 w-6 text-secondary" />
              <h2 className="heading-md text-foreground">Audio Messages</h2>
            </div>

            <Card className="max-w-2xl mx-auto bg-card border-border">
              <CardContent className="p-8 text-center">
                <Headphones className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="heading-md mb-4 text-foreground">Listen on Telegram</h3>
                <p className="text-muted-foreground mb-6">
                  All our audio messages are available on our Telegram channel. Join us for daily devotionals and weekly sermon recordings.
                </p>
                <InteractiveHoverButton
                  asChild
                  text="Join Telegram Channel"
                >
                  <a href="https://t.me/havenwordchurch" target="_blank" rel="noopener noreferrer">
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

const VideoCard = ({ video }: { video: YouTubeVideo }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-card border-border flex flex-col h-full">
    <div className="relative h-48 overflow-hidden group cursor-pointer">
      <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Video className="h-12 w-12 text-white" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </a>
    </div>
    <CardContent className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-foreground">{video.title}</h3>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <Calendar className="h-4 w-4" />
        <span>{video.publishedAt}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{video.channelTitle}</p>
      <div className="mt-auto">
        <InteractiveHoverButton asChild text="Watch Now" className="w-full">
          <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">Watch Now</a>
        </InteractiveHoverButton>
      </div>
    </CardContent>
  </Card>
);

export default Messages;






