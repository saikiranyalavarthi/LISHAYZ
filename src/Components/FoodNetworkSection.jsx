import React from "react";
import {
  Hospital,
  Building2,
  Coffee,
  GraduationCap,
  FerrisWheel,
  Factory,
  Plane,
  Hotel,
  Fuel,
  Store,
  ShoppingCart,
  Truck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    title: "Aged & Residential Care",
    icon: <Building2 size={42} />,
  },
  {
    title: "Airlines & Lounges",
    icon: <Plane size={42} />,
  },
  {
    title: "Cafes & Hospitality",
    icon: <Coffee size={42} />,
  },
  {
    title: "Education & Campuses",
    icon: <GraduationCap size={42} />,
  },
  {
    title: "Entertainment & Events",
    icon: <FerrisWheel size={42} />,
  },
  {
    title: "Facilities Management",
    icon: <Factory size={42} />,
  },
  {
    title: "Hospitals & Healthcare",
    icon: <Hospital size={42} />,
  },
  {
    title: "Hotels, Pubs & Clubs",
    icon: <Hotel size={42} />,
  },
  {
    title: "Petrol & Convenience",
    icon: <Fuel size={42} />,
  },
  {
    title: "Quick Service Restaurants",
    icon: <Store size={42} />,
  },
  {
    title: "Supermarkets & Retail",
    icon: <ShoppingCart size={42} />,
  },
  {
    title: "Wholesale Distributors",
    icon: <Truck size={42} />,
  },
];

export default function FoodNetworkSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
            Food Network
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-gray-900">
            Fresh Food Solutions
          </h2>

          <p className="mt-6 max-w-4xl mx-auto text-gray-600 text-lg leading-8">
            Food Network is dedicated to supplying fresh, quality food made
            daily for businesses, healthcare facilities and communities. Our
            range includes freshly prepared sandwiches, wraps and granola yogurt
            cups, designed to provide convenient, nutritious and great-tasting
            meal options.
          </p>
        </div>

        {/* Industry Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-20">
          {industries.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 duration-300 text-center"
            >
              <div className="flex justify-center text-red-600 group-hover:scale-110 duration-300">
                {item.icon}
              </div>

              <h3 className="mt-5 font-semibold text-gray-900 text-sm leading-6">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Button */}

        <div className="flex justify-center mt-16">
      
         <Link
  to="/food-network"
  className="inline-flex bg-red-600 hover:bg-red-700 duration-300 text-white px-10 py-4 rounded-xl font-semibold items-center gap-3"
>
  EXPLORE
  <ArrowRight size={20} />
</Link>
        </div>
      </div>
    </section>
  );
}
