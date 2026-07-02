import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
            LOCATION
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-gray-900">
            Visit
            <span className="text-red-600"> LISHAYZ</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            We'd love to welcome you! Visit us for freshly brewed coffee,
            delicious meals, and a warm, friendly atmosphere.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="flex items-start gap-5 mb-8">
              <div className="bg-red-600 text-white p-4 rounded-full">
                <MapPin />
              </div>

              <div>
                <h3 className="text-2xl font-bold">Our Address</h3>

                <p className="text-gray-600 mt-2 leading-7">
                  LISHAYZ
                  <br />
                  7/11 Short St,
                  <br />
                  Southport QLD 4215,
                  <br />
                  Australia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 mb-8">
              <div className="bg-red-600 text-white p-4 rounded-full">
                <Phone />
              </div>

              <div>
                <h3 className="text-xl font-bold">Phone</h3>

                <p className="text-gray-600 mt-2">+61 75532 9893</p>
              </div>
            </div>

            <div className="flex items-start gap-5 mb-8">
              <div className="bg-red-600 text-white p-4 rounded-full">
                <Mail />
              </div>

              <div>
                <h3 className="text-xl font-bold">Email</h3>

                <p className="text-gray-600 mt-2">info@lishayz.com</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
            

              <div>
              

              
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=LISHAYZ+Southport+QLD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              <Navigation size={20} />
              Get Directions
            </a>
          </div>

          {/* Right */}

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.7824345721997!2d153.4136514752637!3d-27.969948576032944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b910f8d3aa0d0ef%3A0xfad02d3f065ca90c!2sLISHAYZ!5e0!3m2!1sen!2sin!4v1782976446782!5m2!1sen!2sin"
              width="100%"
              height="550"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="LISHAYZ Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
