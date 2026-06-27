export default function GallerySection() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
  ];

  return (
    <section id="gallery" className="bg-black py-14 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-16">
          <div className="inline-block bg-white border-2 border-white rounded-xl px-6 py-3 shadow-[4px_4px_0px_black]">
            <h4 className="text-sm lg:text-base font-black uppercase tracking-wider">
              GALLERY
            </h4>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
            Moments at
            <br />
            LISHAYZ
          </h2>

          <p className="mt-5 text-gray-300 text-base lg:text-lg max-w-2xl mx-auto">
            Explore our delicious food, cozy ambience and memorable dining
            experiences captured through our gallery.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg group"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-40 sm:h-52 lg:h-80 object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
