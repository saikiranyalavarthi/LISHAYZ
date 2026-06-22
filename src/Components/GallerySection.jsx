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
    <section id="gallery" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-white border-2 border-white rounded-xl px-8 py-4 shadow-[4px_4px_0px_black]">
            <h4 className="font-black uppercase">GALLERY</h4>
          </div>

          <h2 className="mt-8 text-5xl md:text-7xl font-black text-white">
            Moments at
            <br />
            LISHAYZ
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-[30px]">
              <img
                src={image}
                alt=""
                className="w-full h-[300px] object-cover hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
