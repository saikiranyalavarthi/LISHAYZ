import React from "react";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Fresh Sandwiches",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=900",
    description:
      "Freshly prepared sandwiches made daily using premium bread, quality fillings, and fresh ingredients.",
  },
  {
    title: "Fresh Wraps",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900",
    description:
      "Healthy wraps packed with fresh vegetables, premium meats, and delicious flavors for every occasion.",
  },
  {
    title: "Croissants",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900",
    description:
      "Fresh buttery croissants filled with tasty ingredients, perfect for breakfast or lunch.",
  },
  {
    title: "Desserts",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900",
    description:
      "Delicious desserts including yogurt cups and classic tiramisu prepared fresh every day.",
  },
];

export default function ProductRange() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="text-red-600 uppercase tracking-[5px] font-semibold">
            Our Products
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Fresh Product Range
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mt-6 text-lg leading-8">
            Every product is freshly prepared using premium ingredients,
            professionally packed and delivered daily to hospitals, workplaces,
            cafés and retail stores.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl duration-300 hover:-translate-y-3"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover group-hover:scale-110 duration-500"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.description}
                </p>

                <button className="mt-8 flex items-center gap-2 bg-red-600 hover:bg-black duration-300 text-white px-6 py-3 rounded-xl">
                  Explore
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
