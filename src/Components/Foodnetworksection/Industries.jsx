import React from "react";
import {
  Building2,
  Hospital,
  HeartHandshake,
  Coffee,
  Store,
  Hotel,
  Fuel,
} from "lucide-react";

const industries = [
  {
    icon: <Hospital size={45} />,
    title: "Day Surgery Hospitals",
    desc: "Fresh meals prepared daily for patients, visitors and healthcare staff.",
  },
  {
    icon: <HeartHandshake size={45} />,
    title: "Aged Care & NDIS",
    desc: "Nutritious ready-to-eat meals designed for aged care and NDIS providers.",
  },
  {
    icon: <Coffee size={45} />,
    title: "Cafés & Hospitality",
    desc: "Fresh sandwiches, wraps and desserts for cafés and catering businesses.",
  },
  {
    icon: <Store size={45} />,
    title: "Retail & Supermarkets",
    desc: "Grab-and-go food products that increase customer convenience and sales.",
  },
  {
    icon: <Hotel size={45} />,
    title: "Hotels, Pubs & Clubs",
    desc: "Reliable daily food supply for hospitality businesses.",
  },
  {
    icon: <Fuel size={45} />,
    title: "Petrol & Convenience",
    desc: "Ready-made meals perfect for busy convenience stores.",
  },
  {
    icon: <Building2 size={45} />,
    title: "Corporate Workplaces",
    desc: "Healthy meals to keep employees energized and productive.",
  },
];
export default function Industries() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-red-600 font-semibold uppercase tracking-widest">
            Industries
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Industries We Serve
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            We proudly supply fresh, healthy food to hospitals, aged care,
            workplaces, retail outlets, cafés and hospitality businesses with
            reliable daily delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
          {industries.map((item, index) => (
            <div
              key={index}
              className="group bg-white border rounded-2xl p-8 shadow-lg hover:bg-red-600 hover:text-white duration-300"
            >
              <div className="text-red-600 group-hover:text-white duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mt-6">{item.title}</h3>

              <p className="text-gray-500 group-hover:text-gray-100 mt-4 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
