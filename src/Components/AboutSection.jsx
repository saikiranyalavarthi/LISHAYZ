// export default function AboutSection() {
//   return (
//     <section
//       id="about"
//       className="bg-white min-h-screen flex items-center justify-center px-6"
//     >
//       <div className="max-w-5xl mx-auto text-center">
//         {/* Badge */}
//         <div className="inline-block bg-white border-2 border-black rounded-xl px-8 py-4 shadow-[4px_4px_0px_0px_red] mb-12">
//           <h4 className="text-xl font-extrabold uppercase">About</h4>
//         </div>

//         {/* Heading */}
//         <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-tight">
//           Freshly brewed coffee,
//           <br />
//           delicious bites and
//           <br />
//           unforgettable moments
//           <br />
//           at LISHAYZ Cafe.
//         </h2>
//       </div>
//     </section>
//   );
// }

import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}

          <div>
            <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
              About Lishayz
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Fresh Coffee,
              <span className="block text-red-600">Delicious Meals</span>& Warm
              Hospitality
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-8">
              At <strong>Lishayz</strong>, we take pride in serving quality
              coffee, delicious meals, and providing a welcoming experience for
              every customer.
            </p>

            <p className="mt-5 text-gray-600 text-lg leading-8">
              While keeping our favourites on the menu, we also love introducing
              new flavours and seasonal specials from time to time.
            </p>

            <p className="mt-5 text-gray-600 text-lg leading-8">
              With a strong focus on cleanliness, quality, and friendly service,
              we're here to make every visit a great one.
            </p>

            <button className="mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 duration-300">
              Learn More
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right */}

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1000"
              alt="Coffee"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />

            <div className="absolute -bottom-8 -left-8 bg-black text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-4xl font-bold text-red-500">10+</h3>

              <p className="mt-2">
                Years of
                <br />
                Great Taste
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
