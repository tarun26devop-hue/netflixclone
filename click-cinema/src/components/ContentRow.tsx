import VideoCard from "./VideoCard";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoId: string;
}

interface ContentRowProps {
  title: string;
  videos: Video[];
  onPlayVideo: (videoId: string) => void;
}

const ContentRow = ({ title, videos, onPlayVideo }: ContentRowProps) => {
  return (
    <div className="mb-12 animate-fade-in">
      <h2 className="text-2xl font-bold mb-4 px-8 text-foreground">{title}</h2>
      <div className="px-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pb-4">
          {videos.map((video) => (
            <div key={video.id} className="flex-none w-72">
              <VideoCard
                title={video.title}
                thumbnail={video.thumbnail}
                videoId={video.videoId}
                onPlay={onPlayVideo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentRow;
