import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderOnlineSection() {
  return (
    <section
      id="order-online"
      className="py-24 bg-gradient-to-r from-red-600 via-red-700 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}

          <div>
            <span className="inline-flex items-center gap-2 bg-white text-red-600 px-5 py-2 rounded-full font-semibold">
              <ShoppingBag size={18} />
              Order Online
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Fresh Meals
              <span className="block text-yellow-300">Delivered Your Way</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-100">
              Enjoy your favourite Lishayz meals and drinks with the convenience
              of online ordering.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-100">
              Browse our menu, place your order, and choose whether you'd like
              to dine in or pick up.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-100">
              Freshly prepared and ready when you are.
            </p>

            <Link to="/order-online">
              <button className="mt-10 bg-white text-red-600 hover:bg-black hover:text-white transition-all duration-300 px-10 py-4 rounded-xl font-bold flex items-center gap-3">
                ORDER ONLINE
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>

          {/* Right */}

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200"
              alt="Order Online"
              className="rounded-3xl w-full h-[500px] object-cover shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 bg-white text-black rounded-2xl px-6 py-5 shadow-xl">
              <h3 className="text-3xl font-bold text-red-600">Fast Pickup</h3>

              <p className="mt-2">
                Freshly prepared
                <br />
                Ready when you arrive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
