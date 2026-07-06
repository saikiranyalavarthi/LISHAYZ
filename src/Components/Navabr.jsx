// import { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const desktopBtn =
//     "bg-white border border-black rounded-full px-5 py-2.5 text-[13px] font-bold tracking-wide text-black shadow-md hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300";

//   const signInBtn =
//     "bg-red-600 border border-red-600 rounded-full px-5 py-2.5 text-[13px] font-bold tracking-wide text-white shadow-md hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300";

//   return (
//     <header className="absolute top-0 left-0 w-full z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-3xl lg:text-4xl font-black tracking-widest text-white"
//         >
//           LISHAYZ
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex items-center gap-3">
//           <Link to="/" className={desktopBtn}>
//             HOME
//           </Link>

//           <Link to="/order-online" className={desktopBtn}>
//             ORDER ONLINE
//           </Link>

//           <Link to="/catering" className={desktopBtn}>
//             CATERING
//           </Link>

//           <Link to="/food-network" className={desktopBtn}>
//             FOOD NETWORK
//           </Link>

//           <Link to="/signin" className={signInBtn}>
//             SIGN IN
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="lg:hidden text-white transition"
//         >
//           {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`lg:hidden overflow-hidden transition-all duration-300 ${
//           isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="bg-white shadow-2xl rounded-b-3xl mx-4 mb-4 p-6">
//           <div className="flex flex-col gap-4">
//             <Link
//               to="/"
//               onClick={() => setIsOpen(false)}
//               className="border border-gray-300 rounded-full py-3 text-sm font-bold text-center hover:bg-gray-100 transition"
//             >
//               HOME
//             </Link>

//             <Link
//               to="/order-online"
//               onClick={() => setIsOpen(false)}
//               className="border border-gray-300 rounded-full py-3 text-sm font-bold text-center hover:bg-gray-100 transition"
//             >
//               ORDER ONLINE
//             </Link>

//             <Link
//               to="/catering"
//               onClick={() => setIsOpen(false)}
//               className="border border-gray-300 rounded-full py-3 text-sm font-bold text-center hover:bg-gray-100 transition"
//             >
//               CATERING
//             </Link>

//             <Link
//               to="/food-network"
//               onClick={() => setIsOpen(false)}
//               className="border border-gray-300 rounded-full py-3 text-sm font-bold text-center hover:bg-gray-100 transition"
//             >
//               FOOD NETWORK
//             </Link>

//             <Link
//               to="/signin"
//               onClick={() => setIsOpen(false)}
//               className="bg-red-600 text-white rounded-full py-3 text-sm font-bold text-center shadow-md hover:bg-red-700 transition"
//             >
//               SIGN IN
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX, HiShoppingCart } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuBtn = `
    px-6
    py-3
    rounded-full
    bg-black
    border-2
    border-red-600
    text-white
    text-xs
    font-extrabold
    tracking-wide
    uppercase
    transition-all
    duration-300
    hover:bg-red-600
    hover:border-red-600
    hover:text-white
  `;

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scroll
            ? "bg-black/95 backdrop-blur-xl border-b border-red-600 shadow-lg"
            : "bg-black"
        } h-20`}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/Lishayz logo new.svg"
              alt="Lishayz Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-5">
            <nav className="flex items-center gap-4">
              <Link to="/" className={menuBtn}>
                Home
              </Link>

              <Link to="/order-online" className={menuBtn}>
                Order Online
              </Link>

              <Link to="/catering" className={menuBtn}>
                Catering
              </Link>

              <Link to="/food-network" className={menuBtn}>
                Food Network
              </Link>

              <Link to="/signin" className={menuBtn}>
                Sign In
              </Link>
            </nav>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
            >
              <HiShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile Cart */}
            <Link
              to="/cart"
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white"
            >
              <HiShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-white text-red-600 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black mx-4 mt-4 rounded-3xl border-2 border-red-600 shadow-lg p-5">
            <div className="flex flex-col gap-4">
              <Link to="/" className={menuBtn} onClick={() => setIsOpen(false)}>
                Home
              </Link>

              <Link
                to="/order-online"
                className={menuBtn}
                onClick={() => setIsOpen(false)}
              >
                Order Online
              </Link>

              <Link
                to="/catering"
                className={menuBtn}
                onClick={() => setIsOpen(false)}
              >
                Catering
              </Link>

              <Link
                to="/food-network"
                className={menuBtn}
                onClick={() => setIsOpen(false)}
              >
                Food Network
              </Link>

              <Link
                to="/signin"
                className={menuBtn}
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Sticky Cart */}
      <Link
        to="/cart"
        className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <HiShoppingCart size={30} />
        <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
          0
        </span>
      </Link>
    </>
  );
}
