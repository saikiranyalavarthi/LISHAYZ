export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <video
        src="https://storage.googleapis.com/kodaa-videos/miss-mat-mobile-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
    </section>
  );
}
