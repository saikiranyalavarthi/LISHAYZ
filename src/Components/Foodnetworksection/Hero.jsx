import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] md:h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-6 min-h-[90vh] md:h-screen flex items-center">
        <div className="max-w-3xl">
          <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
            Fresh • Healthy • Delivered Daily
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Fresh Food
            <span className="block text-red-600">Ready To Go</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-300 leading-7 max-w-xl">
            Fresh sandwiches, wraps, salads, snacks and healthy meals prepared
            daily for hospitals, aged care, workplaces, cafés, retail stores and
            NDIS providers.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2">
              Explore Products
              <ArrowRight size={20} />
            </button>

            <button className="w-full sm:w-auto border border-white text-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
