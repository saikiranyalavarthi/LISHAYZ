import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CateringSection() {
  return (
    <section
      id="catering"
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}

          <div>
            <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
              Catering
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Fresh Catering
              <span className="block text-red-500">Made Daily</span>
            </h2>

            <p className="mt-8 text-lg text-gray-300 leading-8">
              At <strong>Lishayz</strong>, we provide fresh, quality catering
              made daily to ensure the best experience for your team, guests,
              and clients.
            </p>

            <p className="mt-5 text-lg text-gray-300 leading-8">
              From office meetings and workplace functions to healthcare
              facilities, community groups, and special gatherings, we offer
              delicious food prepared with care and attention to quality.
            </p>

            <p className="mt-5 text-lg text-gray-300 leading-8">
              Our goal is simple – fresh food, reliable service, and great taste
              every time.
            </p>

            {/* Highlights */}

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-red-500" />
                <span>Freshly Prepared Every Day</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-red-500" />
                <span>Office & Corporate Catering</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-red-500" />
                <span>Healthcare & Community Events</span>
              </div>
            </div>

            <button className="mt-10 bg-red-600 hover:bg-red-700 transition-all duration-300 px-8 py-4 rounded-xl font-semibold flex items-center gap-3">
              VIEW CATERING MENU
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Image */}

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1200"
              alt="Catering"
              className="rounded-3xl w-full h-[600px] object-cover shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 bg-white text-black rounded-2xl p-6 shadow-xl">
              <h3 className="text-4xl font-bold text-red-600">Fresh</h3>

              <p className="mt-2 font-medium">
                Quality Catering
                <br />
                Every Day
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
