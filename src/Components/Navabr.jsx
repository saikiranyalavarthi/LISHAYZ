import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <Link to="/" className="text-4xl font-black text-white tracking-wide">
          LISHAYZ
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/"
            className="bg-white border border-black rounded-full px-8 py-4 font-bold text-black hover:scale-105 transition"
          >
            HOME
          </Link>

          <Link
            to="/order-online"
            className="bg-white border border-black rounded-full px-8 py-4 font-bold text-black hover:scale-105 transition"
          >
            ORDER ONLINE
          </Link>

          <Link
            to="/catering"
            className="bg-white border border-black rounded-full px-8 py-4 font-bold text-black hover:scale-105 transition"
          >
            CATERING
          </Link>

          <Link
            to="/food-network"
            className="bg-white border border-black rounded-full px-8 py-4 font-bold text-black hover:scale-105 transition"
          >
            FOOD NETWORK
          </Link>

          <Link
            to="/signin"
            className="bg-red-600 border border-red-600 rounded-full px-8 py-4 font-bold text-white hover:bg-red-700 transition"
          >
            SIGN IN
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl">
          <div className="flex flex-col p-6 gap-4">
            <Link
              to="/"
              className="border rounded-full py-3 font-bold text-center"
            >
              HOME
            </Link>

            <Link
              to="/order-online"
              className="border rounded-full py-3 font-bold text-center"
            >
              ORDER ONLINE
            </Link>

            <Link
              to="/catering"
              className="border rounded-full py-3 font-bold text-center"
            >
              CATERING
            </Link>

            <Link
              to="/food-network"
              className="border rounded-full py-3 font-bold text-center"
            >
              FOOD NETWORK
            </Link>

            <Link
              to="/signin"
              className="bg-red-600 text-white rounded-full py-3 font-bold text-center"
            >
              SIGN IN
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
