export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block bg-white border-2 border-black rounded-xl px-8 py-4 shadow-[4px_4px_0px_0px_red] mb-12">
          <h4 className="text-xl font-extrabold uppercase">About</h4>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-tight">
          Freshly brewed coffee,
          <br />
          delicious bites and
          <br />
          unforgettable moments
          <br />
          at LISHAYZ Cafe.
        </h2>
      </div>
    </section>
  );
}
