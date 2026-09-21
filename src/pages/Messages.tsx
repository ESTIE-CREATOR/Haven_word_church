import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import { Video, Headphones, Calendar, Film, Play, Search, Youtube, RefreshCw, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import VideoPlayerDialog from "@/components/VideoPlayerDialog";
import { useState, useEffect, useMemo } from "react";
import { fetchYouTubeVideos, YouTubeVideo, isShort, splitVideoTitle, getChannelUrl } from "@/services/youtube";

const PAGE_SIZE = 6;
const SHORTS_PAGE_SIZE = 6;

const Messages = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>();
  const [loadingMore, setLoadingMore] = useState(false);
  const [query, setQuery] = useState("");
  const [displayedLong, setDisplayedLong] = useState(PAGE_SIZE);
  const [displayedShorts, setDisplayedShorts] = useState(SHORTS_PAGE_SIZE);
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo | null>(null);

  const channelUrl = getChannelUrl();

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

  const searching = query.trim().length > 0;

  const { featured, longVideos, shorts } = useMemo(() => {
    const term = query.trim().toLowerCase();
    const matches = term ? videos.filter((v) => v.title.toLowerCase().includes(term)) : videos;
    const long = matches.filter((v) => !isShort(v));
    // The newest full message is featured on its own, unless the visitor is searching
    const featuredVideo = term ? undefined : long[0];
    return {
      featured: featuredVideo,
      longVideos: featuredVideo ? long.slice(1) : long,
      shorts: matches.filter((v) => isShort(v)),
    };
  }, [videos, query]);

  const shownLong = longVideos.slice(0, displayedLong);
  const shownShorts = shorts.slice(0, displayedShorts);
  const canShowMoreLong = displayedLong < longVideos.length || Boolean(nextPageToken);

  // Reveal what is already loaded first, then fetch the next batch from YouTube
  const showMoreLong = async () => {
    if (displayedLong >= longVideos.length) {
      await loadMoreVideos();
    }
    setDisplayedLong((p) => p + PAGE_SIZE);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip max-w-full">
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
              {channelUrl && (
                <a
                  href={channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
                >
                  <Youtube className="h-4 w-4" />
                  Subscribe on YouTube
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Loading */}
        {loading && (
          <section className="section-padding bg-background" aria-busy="true" aria-label="Loading videos">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-center mb-12">
                <Skeleton className="lg:col-span-3 aspect-video w-full rounded-xl" />
                <div className="lg:col-span-2 space-y-4">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-10 w-40 rounded-full" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="aspect-video w-full rounded-lg" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Error */}
        {error && (
          <div className="bg-background section-padding">
            <div className="container-custom">
              <div className="max-w-xl mx-auto bg-card border border-border rounded-xl p-8 text-center">
                <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h2 className="heading-sm text-foreground mb-2">We couldn't load the videos right now</h2>
                <p className="text-muted-foreground mb-6">
                  Please try again in a moment{channelUrl ? ", or watch directly on our YouTube channel." : "."}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={loadVideos}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Try again
                  </button>
                  {channelUrl && (
                    <a
                      href={channelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                    >
                      <Youtube className="h-4 w-4" />
                      Open YouTube
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Featured + Video Messages */}
        {!loading && !error && (
          <section className="section-padding bg-background">
            <div className="container-custom">
              {/* Latest message */}
              {featured && <FeaturedVideo video={featured} onPlay={setActiveVideo} />}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Video className="h-6 w-6 text-primary" />
                  <h2 className="heading-md text-foreground">{searching ? "Search Results" : "Video Messages"}</h2>
                </div>
                <div className="relative w-full sm:w-72">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setDisplayedLong(PAGE_SIZE);
                      setDisplayedShorts(SHORTS_PAGE_SIZE);
                    }}
                    placeholder="Search messages..."
                    aria-label="Search messages"
                    className="pl-9 rounded-full bg-card"
                  />
                </div>
              </div>

              {longVideos.length === 0 ? (
                <div className="text-center py-12">
                  <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    {searching ? `No messages found for "${query.trim()}".` : "No video messages found."}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {shownLong.map((video) => (
                    <VideoCard key={video.id} video={video} onPlay={setActiveVideo} />
                  ))}
                </div>
              )}

              {canShowMoreLong && (longVideos.length > 0 || searching) && (
                <div className="flex justify-center mt-8">
                  <InteractiveHoverButton
                    onClick={showMoreLong}
                    text={loadingMore ? "Loading..." : searching && displayedLong >= longVideos.length ? "Search Older Videos" : "View More"}
                    className="px-8 py-3"
                    disabled={loadingMore}
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* Shorts Section */}
        {!loading && !error && shorts.length > 0 && (
          <section className="section-padding band-blue">
            <div className="container-custom">
              <div className="flex items-center gap-2 mb-8">
                <Film className="h-6 w-6 text-secondary" />
                <h2 className="heading-md text-foreground">Shorts</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {shownShorts.map((video) => (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    aria-label={`Play ${splitVideoTitle(video.title).title}`}
                    className="group block text-left rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-muted"
                  >
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-card border border-border">
                      <img
                        src={video.thumbnailTall}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/30">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition-transform group-hover:scale-110">
                          <Play className="h-4 w-4 translate-x-[1px] fill-current" />
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 pt-8">
                        <p className="text-white text-xs font-medium line-clamp-2">{splitVideoTitle(video.title).title}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {displayedShorts < shorts.length && (
                <div className="flex justify-center mt-8">
                  <InteractiveHoverButton
                    onClick={() => setDisplayedShorts((p) => p + SHORTS_PAGE_SIZE)}
                    text="View More Shorts"
                    className="px-8 py-3"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* Audio Messages Section */}
        <section className="section-padding bg-background">
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

      <VideoPlayerDialog video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
};

interface PlayableProps {
  video: YouTubeVideo;
  onPlay: (video: YouTubeVideo) => void;
}

const FeaturedVideo = ({ video, onPlay }: PlayableProps) => {
  const { title, speaker } = splitVideoTitle(video.title);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-center mb-12 sm:mb-16">
      <button
        type="button"
        onClick={() => onPlay(video)}
        aria-label={`Play ${title}`}
        className="group relative lg:col-span-3 aspect-video w-full overflow-hidden rounded-xl border border-border bg-card shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <img src={video.thumbnailLarge} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40">
          <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/95 text-primary shadow-xl transition-transform group-hover:scale-110">
            <Play className="h-7 w-7 sm:h-8 sm:w-8 translate-x-[2px] fill-current" />
          </span>
        </div>
        <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-2 py-1 rounded">{video.duration}</div>
      </button>

      <div className="lg:col-span-2">
        <span className="inline-flex items-center rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary mb-4">
          Latest Message
        </span>
        <h2 className="heading-lg text-foreground mb-3">{title}</h2>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
          {speaker && (
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {speaker}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {video.publishedAt}
          </span>
        </div>
        {video.description && (
          <p className="text-muted-foreground mb-6 line-clamp-3 whitespace-pre-line">{video.description}</p>
        )}
        <InteractiveHoverButton onClick={() => onPlay(video)} text="Watch Now" />
      </div>
    </div>
  );
};

const VideoCard = ({ video, onPlay }: PlayableProps) => {
  const { title, speaker } = splitVideoTitle(video.title);

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow bg-card border-border flex flex-col h-full">
      <button
        type="button"
        onClick={() => onPlay(video)}
        aria-label={`Play ${title}`}
        className="relative block aspect-video w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
      >
        <img src={video.thumbnail} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/40">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition-transform group-hover:scale-110">
            <Play className="h-5 w-5 translate-x-[1px] fill-current" />
          </span>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </button>
      <CardContent className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-foreground">{title}</h3>
        {speaker && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <User className="h-4 w-4 flex-shrink-0" />
            <span className="truncate">{speaker}</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Calendar className="h-4 w-4 flex-shrink-0" />
          <span>{video.publishedAt}</span>
        </div>
        <div className="mt-auto">
          <InteractiveHoverButton onClick={() => onPlay(video)} text="Watch Now" className="w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default Messages;
