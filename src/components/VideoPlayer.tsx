interface VideoPlayerProps {
  url: string;
  title?: string;
}

const VideoPlayer = ({ url, title }: VideoPlayerProps) => {
  // Support YouTube, Vimeo, or direct video URLs
  const getEmbedUrl = (rawUrl: string) => {
    // YouTube
    const ytMatch = rawUrl.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?rel=0`;

    // Vimeo
    const vimeoMatch = rawUrl.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

    return rawUrl;
  };

  const isDirectVideo = /\.(mp4|webm|ogg)$/i.test(url);

  if (isDirectVideo) {
    return (
      <div className="relative aspect-video bg-secondary rounded-sm overflow-hidden">
        <video
          src={url}
          controls
          className="w-full h-full object-cover"
          title={title}
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video bg-secondary rounded-sm overflow-hidden">
      <iframe
        src={getEmbedUrl(url)}
        title={title || "Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  );
};

export default VideoPlayer;
