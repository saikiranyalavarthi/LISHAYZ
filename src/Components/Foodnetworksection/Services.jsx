import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Hospitals & Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900",
    description:
      "Fresh, nutritious meals designed to support patient recovery while providing convenient food options for visitors and healthcare staff.",
  },
  {
    title: "Businesses & Workplaces",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900",
    description:
      "Keep your team energized, productive, and focused with fresh food delivered daily, saving valuable time and effort.",
  },
  {
    title: "Retail Stores",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900",
    description:
      "Offer your customers fresh, ready-to-go food options that add convenience, increase choice, and create additional sales opportunities.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-red-600 uppercase tracking-[4px] font-semibold">
            Who We Serve
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Fresh Food Solutions For Every Industry
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8">
            We proudly deliver fresh meals every day to healthcare, workplaces,
            cafés and retail businesses with dependable quality and service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-8">
                  {service.description}
                </p>

                <button className="mt-8 bg-red-600 hover:bg-black duration-300 text-white px-6 py-3 rounded-xl flex items-center gap-2">
                  Learn More
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
