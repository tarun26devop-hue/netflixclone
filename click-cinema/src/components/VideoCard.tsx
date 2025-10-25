import { useState } from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  videoId: string;
  onPlay: (videoId: string) => void;
}

const VideoCard = ({ title, thumbnail, videoId, onPlay }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer transition-all duration-300 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onPlay(videoId)}
    >
      <div className="relative overflow-hidden rounded-md bg-card shadow-lg">
        <img
          src={thumbnail}
          alt={title}
          className={`w-full h-40 object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center animate-fade-in">
            <Play className="w-12 h-12 text-primary fill-primary" />
          </div>
        )}
      </div>
      <h3 className="mt-2 text-sm font-medium text-foreground truncate">{title}</h3>
    </div>
  );
};

export default VideoCard;
