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













// interface VideoPlayerProps {
//   src: string;
//   posterClass?: string; // Nouvelle prop pour la classe CSS
//   className?: string;
//   controls?: boolean;
// }

// export function VideoPlayer({ 
//   src, 
//   posterClass, 
//   className = "w-full", 
//   controls = true 
// }: VideoPlayerProps) {
//   return (
//     <div className="video-container">
//       <div className={`video-poster ${posterClass}`}>
//         <video className={`vid-width ${className}`} controls={controls}>
//           <source src={src} type="video/mp4" />
//           <p>Please use a supported browser, i.e. (Microsoft Edge, Google Chrome, Apple Safari).</p>
//         </video>
//       </div>
//     </div>
//   );
// }






// interface VideoPlayerProps {
//   src: string;
//   posterClass?: string;
//   className?: string;
//   controls?: boolean;
// }

// export function VideoPlayer({ 
//   src, 
//   posterClass, 
//   className = "vid-width", 
//   controls = true 
// }: VideoPlayerProps) {
//   return (
//     <div className={`video-container ${posterClass}`}>
//       <video 
//         className={className} 
//         controls={controls}
//         // Important pour éviter le poster natif
//         poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
//       >
//         <source src={src} type="video/mp4" />
//         <p>Please use a supported browser, i.e. (Microsoft Edge, Google Chrome, Apple Safari).</p>
//       </video>
//     </div>
//   );
// }







// interface VideoPlayerProps {
//   src: string;
//   posterClass?: string;
//   className?: string;
//   controls?: boolean;
// }

// export function VideoPlayer({ 
//   src, 
//   posterClass, 
//   className = "video-player", 
//   controls = true 
// }: VideoPlayerProps) {
//   const videoRef = useRef<HTMLVideoElement>(null);
  
//   return (
//     <div className={`video-container ${posterClass}`}>
//       <video
//         ref={videoRef}
//         className={className}
//         controls={controls}
//         // Poster transparent pour désactiver le poster natif
//         poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
//       >
//         <source src={src} type="video/mp4" />
//       </video>
//     </div>
//   );
// }