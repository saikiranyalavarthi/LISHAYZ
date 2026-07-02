import React from "react";
import {
  PackageCheck,
  ShieldCheck,
  BadgeCheck,
  ThermometerSnowflake,
  ClipboardCheck,
  Award,
} from "lucide-react";

const packaging = [
  "Individually wrapped or boxed sandwiches",
  "Ingredients clearly labelled",
  "Allergen information included",
  "Packed date & use-by time",
  "Delivered in insulated food-safe boxes",
  "Temperature maintained below 5°C",
];

const standards = [
  "Registered Commercial Kitchen",
  "Food Safety Supervisor Certified",
  "Australia & New Zealand Food Standards",
  "HACCP Food Safety Compliance",
  "Strict Hygiene Procedures",
  "Quality Assurance Checks",
];

export default function FoodSafety() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="uppercase tracking-[5px] text-red-600 font-semibold">
            Food Safety
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Packaging & Food Safety Standards
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Every product is prepared, packed and transported using strict food
            safety procedures to ensure maximum freshness, quality and hygiene.
          </p>
        </div>

        {/* Two Columns */}

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Packaging */}

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white">
                <PackageCheck size={34} />
              </div>

              <h3 className="text-3xl font-bold">Packaging & Transport</h3>
            </div>

            <div className="space-y-5">
              {packaging.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <ShieldCheck className="text-red-600 mt-1" size={22} />

                  <p className="text-gray-700 leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Food Safety */}

          <div className="bg-black rounded-3xl shadow-xl p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white">
                <Award size={34} />
              </div>

              <h3 className="text-3xl font-bold text-white">
                Food Safety Standards
              </h3>
            </div>

            <div className="space-y-5">
              {standards.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <BadgeCheck className="text-red-500 mt-1" size={22} />

                  <p className="text-gray-300 leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:-translate-y-2 duration-300">
            <ThermometerSnowflake size={45} className="mx-auto text-red-600" />

            <h4 className="text-2xl font-bold mt-6">Temperature Control</h4>

            <p className="text-gray-600 mt-4">
              Products remain below 5°C throughout storage and transportation.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:-translate-y-2 duration-300">
            <ClipboardCheck size={45} className="mx-auto text-red-600" />

            <h4 className="text-2xl font-bold mt-6">Daily Quality Checks</h4>

            <p className="text-gray-600 mt-4">
              Every order undergoes strict inspection before dispatch.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:-translate-y-2 duration-300">
            <ShieldCheck size={45} className="mx-auto text-red-600" />

            <h4 className="text-2xl font-bold mt-6">Safe & Certified</h4>

            <p className="text-gray-600 mt-4">
              Following Australian food safety regulations and hygiene
              standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
