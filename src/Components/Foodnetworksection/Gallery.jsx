import React from "react";
import { ArrowRight } from "lucide-react";

const gallery = [
  "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=900",
  "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900",
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=900",
];

export default function Gallery() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="uppercase tracking-[5px] text-red-600 font-semibold">
            Gallery
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Fresh Food Gallery
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Explore our freshly prepared sandwiches, wraps, croissants, desserts
            and healthy meals made daily using premium ingredients.
          </p>
        </div>

        {/* Gallery Grid */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl group cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover group-hover:scale-110 duration-500"
              />
            </div>
          ))}
        </div>

        {/* Button */}

        <div className="flex justify-center mt-16">
          <button className="bg-red-600 hover:bg-red-700 duration-300 px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3">
            View Gallery
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
