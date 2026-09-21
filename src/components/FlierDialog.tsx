import { ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface FlierDialogProps {
  title: string;
  image: string;
  children: ReactNode;
}

// Wraps a button so that clicking it opens the full, uncropped flier
const FlierDialog = ({ title, image, children }: FlierDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      {/* The dialog shrinks to the flier's own shape, so there are never bars around it */}
      <DialogContent className="w-fit max-w-none gap-0 overflow-hidden rounded-lg p-0">
        <DialogHeader className="p-4 pr-12 text-left">
          <DialogTitle className="text-base sm:text-lg">{title}</DialogTitle>
          <DialogDescription className="sr-only">Event flier for {title}</DialogDescription>
        </DialogHeader>
        <img
          src={image}
          alt={`${title} flier`}
          className="block h-auto w-auto max-h-[78vh] max-w-[min(calc(100vw-2rem),64rem)]"
        />
      </DialogContent>
    </Dialog>
  );
};

export default FlierDialog;
