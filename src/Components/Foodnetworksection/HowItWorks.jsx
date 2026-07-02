import React from "react";
import { ShoppingCart, ChefHat, Truck, UtensilsCrossed } from "lucide-react";

const steps = [
  {
    icon: <ShoppingCart size={45} />,
    title: "Choose Your Products",
    description:
      "Select the sandwiches, wraps, croissants or desserts that best suit your business.",
  },
  {
    icon: <ChefHat size={45} />,
    title: "We Prepare Fresh Daily",
    description:
      "Every order is freshly prepared each morning using premium ingredients.",
  },
  {
    icon: <Truck size={45} />,
    title: "Reliable Delivery",
    description:
      "Your order is delivered safely and on time in temperature-controlled packaging.",
  },
  {
    icon: <UtensilsCrossed size={45} />,
    title: "Ready To Enjoy",
    description:
      "Fresh meals are ready for patients, customers, visitors and staff to enjoy.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="text-red-600 uppercase tracking-[5px] font-semibold">
            Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            How It Works
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 mt-6 text-lg leading-8">
            Our streamlined process ensures fresh food is prepared, packed and
            delivered quickly with consistent quality.
          </p>
        </div>

        {/* Timeline */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-red-600 duration-300 hover:-translate-y-3"
            >
              {/* Step Number */}

              <div className="absolute -top-5 left-8 bg-red-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>

              {/* Icon */}

              <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center mt-4">
                {step.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-white mt-8">
                {step.title}
              </h3>

              {/* Description */}

              <p className="text-gray-400 mt-5 leading-8">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
