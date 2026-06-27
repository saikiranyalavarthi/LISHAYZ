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
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Sticky Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect Active Section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const darkSections = ["hero"];

  const isDarkHeader = darkSections.includes(activeSection);

  const headerClasses = `
fixed
top-0
left-0
w-full
z-50
transition-all
duration-500
backdrop-blur-md
${
  isDarkHeader
    ? "bg-transparent text-white"
    : "bg-white text-black shadow-[0_10px_40px_rgba(220,38,38,0.45)] border-b border-red-600/30"
}
${isScrolled ? "py-3" : "py-5"}
`;

  const desktopBtn = `
relative
px-6
py-3
rounded-full
border-2
border-red-600
text-[13px]
font-bold
tracking-wider
uppercase
transition-all
duration-300
shadow-[0_0_18px_rgba(220,38,38,0.35)]
hover:bg-red-600
hover:text-white
hover:shadow-[0_0_35px_rgba(220,38,38,0.7)]
hover:-translate-y-1
${
  isDarkHeader
    ? "bg-white/10 text-white"
    : "bg-white text-black"
}
`;

  const signInBtn = `
px-6
py-3
rounded-full
bg-red-600
border-2
border-red-600
text-white
font-bold
tracking-wider
uppercase
transition-all
duration-300
shadow-[0_0_25px_rgba(220,38,38,0.5)]
hover:bg-red-700
hover:shadow-[0_0_40px_rgba(220,38,38,0.8)]
hover:-translate-y-1
`;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 text-3xl lg:text-4xl font-black tracking-[0.25em] transition-all duration-300"
        >
          <span className="text-red-600 drop-shadow-[0_0_18px_rgba(220,38,38,0.8)]">
            L
          </span>

          <span className={isDarkHeader ? "text-white" : "text-black"}>
            ISHAYZ
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4">

          <Link
            to="/"
            className={`${desktopBtn} ${
              activeSection === "hero"
                ? "bg-red-600 text-white shadow-[0_0_35px_rgba(220,38,38,0.8)]"
                : ""
            }`}
          >
            HOME
          </Link>

          <Link
            to="/order-online"
            className={`${desktopBtn} ${
              activeSection === "menu"
                ? "bg-red-600 text-white shadow-[0_0_35px_rgba(220,38,38,0.8)]"
                : ""
            }`}
          >
            ORDER ONLINE
          </Link>

          <Link
            to="/catering"
            className={`${desktopBtn} ${
              activeSection === "catering"
                ? "bg-red-600 text-white shadow-[0_0_35px_rgba(220,38,38,0.8)]"
                : ""
            }`}
          >
            CATERING
          </Link>

          <Link
            to="/food-network"
            className={`${desktopBtn} ${
              activeSection === "food-network"
                ? "bg-red-600 text-white shadow-[0_0_35px_rgba(220,38,38,0.8)]"
                : ""
            }`}
          >
            FOOD NETWORK
          </Link>

          <Link
            to="/signin"
            className={signInBtn}
          >
            SIGN IN
          </Link>

        </nav>




     

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden transition-all duration-300 ${
            isDarkHeader ? "text-white" : "text-black"
          }`}
        >
          {isOpen ? <HiX size={34} /> : <HiMenu size={34} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`mx-4 mt-4 rounded-3xl border shadow-[0_8px_30px_rgba(220,38,38,0.25)] ${
            isDarkHeader
              ? "bg-black border-red-600"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex flex-col gap-4 p-6">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-red-600 py-3 text-center font-semibold transition hover:bg-red-600 hover:text-white"
            >
              HOME
            </Link>

            <Link
              to="/order-online"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-red-600 py-3 text-center font-semibold transition hover:bg-red-600 hover:text-white"
            >
              ORDER ONLINE
            </Link>

            <Link
              to="/catering"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-red-600 py-3 text-center font-semibold transition hover:bg-red-600 hover:text-white"
            >
              CATERING
            </Link>

            <Link
              to="/food-network"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-red-600 py-3 text-center font-semibold transition hover:bg-red-600 hover:text-white"
            >
              FOOD NETWORK
            </Link>

            <Link
              to="/signin"
              onClick={() => setIsOpen(false)}
              className={signInBtn}
            >
              SIGN IN
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
}