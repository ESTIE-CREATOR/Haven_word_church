import { ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { YouTubeVideo, isShort, splitVideoTitle } from "@/services/youtube";
import { cn } from "@/lib/utils";

interface VideoPlayerDialogProps {
  video: YouTubeVideo | null;
  onClose: () => void;
}

// Plays a YouTube video in place, so visitors stay on the site
const VideoPlayerDialog = ({ video, onClose }: VideoPlayerDialogProps) => {
  const vertical = video ? isShort(video) : false;
  const parts = video ? splitVideoTitle(video.title) : null;

  return (
    <Dialog open={Boolean(video)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className={cn(
          "gap-0 overflow-hidden rounded-lg p-0",
          // The dialog is sized from the video's own shape, so the player fills it with no bars
          vertical
            ? "w-[min(calc(100vw-2rem),calc((100vh-12rem)*9/16))] max-w-none"
            : "w-[min(calc(100vw-2rem),calc((100vh-12rem)*16/9))] max-w-4xl"
        )}
      >
        {video && parts && (
          <>
            <DialogHeader className="p-4 pr-12 text-left">
              <DialogTitle className="text-base sm:text-lg leading-snug line-clamp-2">{parts.title}</DialogTitle>
              <DialogDescription>
                {[parts.speaker, video.publishedAt].filter(Boolean).join(" • ")}
              </DialogDescription>
            </DialogHeader>
            <div className={vertical ? "aspect-[9/16] w-full" : "aspect-video w-full"}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                title={parts.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="block h-full w-full border-0"
              />
            </div>
            <div className="flex justify-end p-3">
              <a
                href={vertical ? `https://www.youtube.com/shorts/${video.id}` : video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Open on YouTube
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayerDialog;
