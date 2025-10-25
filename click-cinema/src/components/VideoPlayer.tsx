import { X } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

interface VideoPlayerProps {
  videoId: string | null;
  onClose: () => void;
}

const VideoPlayer = ({ videoId, onClose }: VideoPlayerProps) => {
  if (!videoId) return null;

  return (
    <Dialog open={!!videoId} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 bg-black border-none">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-50"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="relative pt-[56.25%]">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayer;
