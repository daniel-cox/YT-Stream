import { useEffect } from "react"

const Hero = () => {
  useEffect(() => {
    const video = document.querySelector("video")
    video.playbackRate = 0.8
  }, [])
  return (
    <section className="h-screen m-40">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 z-0 object-cover w-full"
        autoPlay
        loop
        muted
      >
        <source src="/oysters.mp4" type="video/mp4" />
      </video>
    </section>
  )
}
export default Hero
