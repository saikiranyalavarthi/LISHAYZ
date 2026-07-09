// import { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//  const [isOpen, setIsOpen] = useState(false);

//  const desktopBtn =
//    "bg-white border border-black rounded-full px-5 py-2.5 text-[13px] font-bold tracking-wide text-black shadow-md hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300";

//  const signInBtn =
//    "bg-red-600 border border-red-600 rounded-full px-5 py-2.5 text-[13px] font-bold tracking-wide text-white shadow-md hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300";

//  return (
//    <header className="absolute top-0 left-0 w-full z-50">
//      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5">
//        {/* Logo */}
//        <Link
//          to="/"
//          className="text-3xl lg:text-4xl font-black tracking-widest text-white"
//        >
//          LISHAYZ
//        </Link>

//        {/* Desktop Menu */}
//        <nav className="hidden lg:flex items-center gap-3">
//          <Link to="/" className={desktopBtn}>
//            HOME
//          </Link>

//          <Link to="/order-online" className={desktopBtn}>
//            ORDER ONLINE
//          </Link>

//          <Link to="/catering" className={desktopBtn}>
//            CATERING
//          </Link>

//          <Link to="/food-network" className={desktopBtn}>
//            FOOD NETWORK
//          </Link>

//          <Link to="/signin" className={signInBtn}>
//            SIGN IN
//          </Link>
//        </nav>

//        {/* Mobile Menu Button */}
//        <button
//          onClick={() => setIsOpen(!isOpen)}
//          className="lg:hidden text-white transition"
//        >
//          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
//        </button>
//      </div>

//      {/* Mobile Menu */}
//      <div
//        className={`lg:hidden overflow-hidden transition-all duration-300 ${
//          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//        }`}
//      >
//        <div className="bg-white shadow-2xl rounded-b-3xl mx-4 mb-4 p-6">
//          <div className="flex flex-col gap-4">
//            <Link
//              to="/"
//              onClick={() => setIsOpen(false)}
//              className="border border-gray-300 rounded-full py-3 text-sm font-bold text-center hover:bg-gray-100 transition"
//            >
//              HOME
//            </Link>

//            <Link
//              to="/order-online"
//              onClick={() => setIsOpen(false)}
//              className="border border-gray-300 rounded-full py-3 text-sm font-bold text-center hover:bg-gray-100 transition"
//            >
//              ORDER ONLINE
//            </Link>

//            <Link
//              to="/catering"
//              onClick={() => setIsOpen(false)}
//              className="border border-gray-300 rounded-full py-3 text-sm font-bold text-center hover:bg-gray-100 transition"
//            >
//              CATERING
//            </Link>

//            <Link
//              to="/food-network"
//              onClick={() => setIsOpen(false)}
//              className="border border-gray-300 rounded-full py-3 text-sm font-bold text-center hover:bg-gray-100 transition"
//            >
//              FOOD NETWORK
//            </Link>

//            <Link
//              to="/signin"
//              onClick={() => setIsOpen(false)}
//              className="bg-red-600 text-white rounded-full py-3 text-sm font-bold text-center shadow-md hover:bg-red-700 transition"
//            >
//              SIGN IN
//            </Link>
//          </div>
//        </div>
//      </div>
//    </header>
//  );
// // }


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop Button
  const desktopBtn =
    "px-6 py-3 rounded-full bg-white border border-black shadow-[2px_2px_0px_0px_#ef4444] text-[12px] font-extrabold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#ef4444]";

  // Sign In Button
  const signInBtn =
    "px-6 py-3 rounded-full bg-red-600 border border-black shadow-[3px_3px_0px_0px_#000] text-white text-[12px] font-extrabold uppercase tracking-wide transition-all duration-300 hover:bg-red-700 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_red]";
return (
  <>
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-24 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-4xl md:text-5xl font-black tracking-[2px] uppercase text-red-600">
            LISHAYZ
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-3">
          <Link to="/" className={desktopBtn}>
            Home
          </Link>

          <Link to="/order-online" className={desktopBtn}>
            Order Online
          </Link>

          <Link to="/catering" className={desktopBtn}>
            Catering
          </Link>

          <Link to="/food-network" className={desktopBtn}>
            Food Network
          </Link>

          <Link
            to="/signin"
            className={`${signInBtn} flex items-center gap-2`}
          >
            <HiUser size={16} />
            <span>Sign In</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white border border-black shadow-[2px_2px_0px_0px_#000]"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t p-6">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className={desktopBtn}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/order-online"
              className={desktopBtn}
              onClick={() => setIsOpen(false)}
            >
              Order Online
            </Link>

            <Link
              to="/catering"
              className={desktopBtn}
              onClick={() => setIsOpen(false)}
            >
              Catering
            </Link>

            <Link
              to="/food-network"
              className={desktopBtn}
              onClick={() => setIsOpen(false)}
            >
              Food Network
            </Link>

            <Link
              to="/signin"
              className={`${signInBtn} flex items-center gap-2`}
              onClick={() => setIsOpen(false)}
            >
              <HiUser size={16} />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </header>

    {/* Floating Sticky Cart */}
    <Link
      to="/cart"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white border-2 border-black shadow-[4px_4px_0px_0px_#000] transition-all duration-300 hover:bg-red-700 hover:scale-110"
    >
      <HiShoppingCart size={28} />

      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white text-red-600 text-xs font-bold border border-black flex items-center justify-center">
        0
      </span>
    </Link>
  </>
)
}