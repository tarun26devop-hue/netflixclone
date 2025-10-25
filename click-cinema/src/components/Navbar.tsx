import { Play } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background to-transparent px-8 py-4 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
            <Play className="fill-primary" />
            STREAMFLIX
          </h1>
          <div className="hidden md:flex gap-6">
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              TV Shows
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              Movies
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              New & Popular
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              My List
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
