import React from "react";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      className="relative py-28 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=1600')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold tracking-wide">
            LET'S WORK TOGETHER
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white mt-8 leading-tight">
            Fresh Food Solutions
            <span className="block text-red-500">Delivered Every Day</span>
          </h2>

          <p className="text-gray-300 text-lg leading-8 mt-8">
            Partner with Food Network for fresh, reliable food solutions
            tailored to hospitals, aged care facilities, NDIS providers, cafés,
            workplaces and retail stores.
          </p>

          <p className="text-white font-semibold text-xl mt-8">
            Freshly Made. Professionally Delivered. Consistently Reliable.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="tel:+61755329893"
              className="flex items-center gap-3 bg-red-600 hover:bg-red-700 duration-300 text-white px-8 py-4 rounded-xl font-semibold"
            >
              <Phone size={20} />
              Call Now
            </a>

          

            <button className="flex items-center gap-3 bg-white hover:bg-red-600 hover:text-white duration-300 text-black px-8 py-4 rounded-xl font-semibold">
              Request Quote
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
