export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[600px] overflow-hidden">
      <video
        src="5821370-hd_1920_1080_30fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-[600px] object-cover"
      />

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
    </section>
  );
}
