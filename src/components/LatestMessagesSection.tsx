import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, Calendar, Headphones, Play, User } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Skeleton } from "@/components/ui/skeleton";
import SectionHeading from "@/components/SectionHeading";
import VideoPlayerDialog from "@/components/VideoPlayerDialog";
import { fetchYouTubeVideos, isShort, splitVideoTitle, YouTubeVideo } from "@/services/youtube";

const LatestMessagesSection = () => {
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["youtube", "latest"],
    queryFn: () => fetchYouTubeVideos(20),
    staleTime: 10 * 60 * 1000,
    retry: 1,
  });

  // Full messages only - Shorts live on the Messages page
  const messages = (data?.videos ?? []).filter((v) => !isShort(v)).slice(0, 4);
  const [latest, ...more] = messages;
  const unavailable = isError || (!isLoading && !latest);

  return (
    <section className="bg-background section-padding">
      <div className="container-custom">
        <div className="mb-10 md:mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Watch & Listen" title="Latest" outlined="Messages" />
          <Link
            to="/messages"
            className="group inline-flex items-center gap-2 self-start border-b-2 border-secondary pb-1 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-secondary sm:self-auto"
          >
            All messages
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {isLoading && (
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <Skeleton className="aspect-video w-full rounded-2xl lg:col-span-7" />
            <div className="space-y-6 lg:col-span-5">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="aspect-video w-32 flex-shrink-0 rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {unavailable && (
          <div className="max-w-2xl">
            <p className="text-muted-foreground text-base sm:text-lg mb-6">
              Watch our most recent video message and be inspired by the Word.
            </p>
            <InteractiveHoverButton asChild text="Watch Now">
              <Link to="/messages">Watch Now</Link>
            </InteractiveHoverButton>
          </div>
        )}

        {latest && (
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <button
                type="button"
                onClick={() => setActiveVideo(latest)}
                aria-label={`Play ${splitVideoTitle(latest.title).title}`}
                className="group relative block aspect-video w-full overflow-hidden rounded-2xl shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <img src={latest.thumbnailLarge} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b2c]/70 via-transparent to-transparent" />
                <span className="absolute left-5 bottom-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-6 w-6 translate-x-[2px] fill-current" />
                </span>
                <span className="absolute right-4 bottom-4 rounded bg-black/75 px-2 py-1 text-xs text-white">{latest.duration}</span>
              </button>
              <h3 className="mt-5 text-xl sm:text-2xl font-bold text-foreground">{splitVideoTitle(latest.title).title}</h3>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                {splitVideoTitle(latest.title).speaker && (
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-4 w-4" />
                    {splitVideoTitle(latest.title).speaker}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {latest.publishedAt}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ul className="divide-y divide-border border-y border-border">
                {more.map((video) => {
                  const { title, speaker } = splitVideoTitle(video.title);
                  return (
                    <li key={video.id}>
                      <button
                        type="button"
                        onClick={() => setActiveVideo(video)}
                        className="group flex w-full items-center gap-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <span className="relative block aspect-video w-32 sm:w-36 flex-shrink-0 overflow-hidden rounded-lg">
                          <img src={video.thumbnail} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          <span className="absolute inset-0 flex items-center justify-center bg-[#080b2c]/0 transition-colors group-hover:bg-[#080b2c]/50">
                            <Play className="h-6 w-6 fill-current text-white opacity-0 transition-opacity group-hover:opacity-100" />
                          </span>
                        </span>
                        <span className="min-w-0">
                          <span className="block font-semibold text-foreground line-clamp-2 transition-colors group-hover:text-secondary">{title}</span>
                          <span className="mt-1 block text-xs text-muted-foreground">
                            {[speaker, video.publishedAt].filter(Boolean).join(" • ")}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <a
                href="https://t.me/havenwordchurch"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-secondary"
              >
                <Headphones className="h-4 w-4 text-secondary" />
                Prefer audio? Listen on Telegram
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        )}
      </div>

      <VideoPlayerDialog video={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
};

export default LatestMessagesSection;
