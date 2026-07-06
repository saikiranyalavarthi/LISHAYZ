import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function VibeSection() {
  const images = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800",
  ];

  return (
    <section id="vibe" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-block bg-black text-white px-5 py-2 rounded-full font-semibold">
            GALLERY
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
            Experience The
            <span className="block text-gray-700">Lishayz Vibe</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            From freshly brewed coffee to delicious meals and a warm, welcoming
            atmosphere, every visit to Lishayz is designed to create memorable
            moments with family and friends.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg group"
            >
              <img
                src={image}
                alt={`Vibe ${index + 1}`}
                className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* View Gallery Button */}
        <div className="flex justify-center mt-14">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:translate-x-1"
          >
            View Gallery
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
