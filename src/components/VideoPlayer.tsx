interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
  controls?: boolean
}


export function VideoPlayer({ src, poster, className = "w-full", controls = true }: VideoPlayerProps) {
  return (
    <div className="video-container">
      <video className={`vid-width ${className}`} controls={controls} poster={poster}>
        <source src={src} type="video/mp4" />
        <p>Please use a supported browser, i.e. (Microsoft Edge, Google Chrome, Apple Safari).</p>
      </video>
    </div>
  )
}
