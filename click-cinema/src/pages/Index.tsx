import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentRow from "@/components/ContentRow";
import VideoPlayer from "@/components/VideoPlayer";

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const trendingVideos = [
    {
      id: "1",
      title: "Stunning Nature Documentary",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop",
      videoId: "ePEdKgjA-xE",
    },
    {
      id: "2",
      title: "Ocean Mysteries",
      thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=225&fit=crop",
      videoId: "GLgh9h2ePYw",
    },
    {
      id: "3",
      title: "Mountain Adventures",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop",
      videoId: "C0DPdy98e4c",
    },
    {
      id: "4",
      title: "Wildlife Wonders",
      thumbnail: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=225&fit=crop",
      videoId: "p6Ht1KSQN0s",
    },
    {
      id: "5",
      title: "Desert Landscapes",
      thumbnail: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=225&fit=crop",
      videoId: "GLgh9h2ePYw",
    },
  ];

  const actionVideos = [
    {
      id: "6",
      title: "Extreme Sports Compilation",
      thumbnail: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=225&fit=crop",
      videoId: "C0DPdy98e4c",
    },
    {
      id: "7",
      title: "Urban Parkour",
      thumbnail: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=400&h=225&fit=crop",
      videoId: "ePEdKgjA-xE",
    },
    {
      id: "8",
      title: "Surfing Giants",
      thumbnail: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&h=225&fit=crop",
      videoId: "p6Ht1KSQN0s",
    },
    {
      id: "9",
      title: "Mountain Biking Thrills",
      thumbnail: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=225&fit=crop",
      videoId: "GLgh9h2ePYw",
    },
    {
      id: "10",
      title: "Skydiving Adventures",
      thumbnail: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400&h=225&fit=crop",
      videoId: "C0DPdy98e4c",
    },
  ];

  const dramaVideos = [
    {
      id: "11",
      title: "City Life Stories",
      thumbnail: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=225&fit=crop",
      videoId: "ePEdKgjA-xE",
    },
    {
      id: "12",
      title: "Ancient Architecture",
      thumbnail: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=400&h=225&fit=crop",
      videoId: "p6Ht1KSQN0s",
    },
    {
      id: "13",
      title: "Modern Cityscapes",
      thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=225&fit=crop",
      videoId: "GLgh9h2ePYw",
    },
    {
      id: "14",
      title: "Cultural Journeys",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop",
      videoId: "C0DPdy98e4c",
    },
    {
      id: "15",
      title: "Historic Landmarks",
      thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=225&fit=crop",
      videoId: "ePEdKgjA-xE",
    },
  ];

  const comedyVideos = [
    {
      id: "16",
      title: "Fun Animal Moments",
      thumbnail: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=225&fit=crop",
      videoId: "p6Ht1KSQN0s",
    },
    {
      id: "17",
      title: "Cute Pets Collection",
      thumbnail: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=225&fit=crop",
      videoId: "GLgh9h2ePYw",
    },
    {
      id: "18",
      title: "Wildlife Comedy",
      thumbnail: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=225&fit=crop",
      videoId: "C0DPdy98e4c",
    },
    {
      id: "19",
      title: "Funny Nature Clips",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop",
      videoId: "ePEdKgjA-xE",
    },
    {
      id: "20",
      title: "Happy Animals",
      thumbnail: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=225&fit=crop",
      videoId: "p6Ht1KSQN0s",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero onPlayVideo={setSelectedVideo} />
      <div className="relative z-10 -mt-32">
        <ContentRow
          title="Trending Now"
          videos={trendingVideos}
          onPlayVideo={setSelectedVideo}
        />
        <ContentRow
          title="Action & Adventure"
          videos={actionVideos}
          onPlayVideo={setSelectedVideo}
        />
        <ContentRow title="Drama & Documentary" videos={dramaVideos} onPlayVideo={setSelectedVideo} />
        <ContentRow title="Feel Good" videos={comedyVideos} onPlayVideo={setSelectedVideo} />
      </div>
      <VideoPlayer videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
};

export default Index;
