import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const desktopBtn =
    "bg-white border border-black rounded-full px-5 py-2.5 text-[13px] font-bold tracking-wide text-black shadow-md hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300";

  const signInBtn =
    "bg-red-600 border border-red-600 rounded-full px-5 py-2.5 text-[13px] font-bold tracking-wide text-white shadow-md hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300";

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl lg:text-4xl font-black tracking-widest text-white"
        >
          LISHAYZ
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-3">
          <Link to="/" className={desktopBtn}>
            HOME
          </Link>

          <Link to="/order-online" className={desktopBtn}>
            ORDER ONLINE
          </Link>

          <Link to="/catering" className={desktopBtn}>
            CATERING
          </Link>

          <Link to="/food-network" className={desktopBtn}>
            FOOD NETWORK
          </Link>

          <Link to="/signin" className={signInBtn}>
            SIGN IN
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white transition"
        >
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white shadow-2xl rounded-b-3xl mx-4 mb-4 p-6">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="border border-gray-300 rounded-full py-3 text-sm font-bold text-center hover:bg-gray-100 transition"
            >
              HOME
            </Link>

            <Link
              to="/order-online"
              onClick={() => setIsOpen(false)}
              className="border border-gray-300 rounded-full py-3 text-sm font-bold text-center hover:bg-gray-100 transition"
            >
              ORDER ONLINE
            </Link>

            <Link
              to="/catering"
              onClick={() => setIsOpen(false)}
              className="border border-gray-300 rounded-full py-3 text-sm font-bold text-center hover:bg-gray-100 transition"
            >
              CATERING
            </Link>

            <Link
              to="/food-network"
              onClick={() => setIsOpen(false)}
              className="border border-gray-300 rounded-full py-3 text-sm font-bold text-center hover:bg-gray-100 transition"
            >
              FOOD NETWORK
            </Link>

            <Link
              to="/signin"
              onClick={() => setIsOpen(false)}
              className="bg-red-600 text-white rounded-full py-3 text-sm font-bold text-center shadow-md hover:bg-red-700 transition"
            >
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
