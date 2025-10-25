import { Play, Info } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  onPlayVideo: (videoId: string) => void;
}

const Hero = ({ onPlayVideo }: HeroProps) => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1574267432644-f71eea3415e0?w=1920&h=1080&fit=crop"
          alt="Featured content"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative h-full flex items-center px-8 pt-20">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <h1 className="text-6xl font-bold text-foreground">
            Epic Adventures Await
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover thrilling stories that will keep you on the edge of your seat.
            Stream the latest blockbusters and timeless classics.
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              onClick={() => onPlayVideo("dQw4w9WgXcQ")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            >
              <Play className="mr-2 h-5 w-5 fill-current" />
              Play
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-secondary/80 hover:bg-secondary text-secondary-foreground font-semibold px-8"
            >
              <Info className="mr-2 h-5 w-5" />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
