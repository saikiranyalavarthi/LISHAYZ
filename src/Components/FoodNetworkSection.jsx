export default function FoodNetworkSection() {
  return (
    <section id="food-network" className="bg-[#f8f5f0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-block bg-white border-2 border-black rounded-xl px-8 py-4 shadow-[4px_4px_0px_black]">
              <h4 className="font-black uppercase">FOOD NETWORK</h4>
            </div>

            <h2 className="mt-8 text-5xl md:text-7xl font-black text-black leading-tight">
              Connecting food
              <br />
              lovers everywhere.
            </h2>

            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Discover our network of partner cafes, food creators and delivery
              partners bringing delicious experiences closer to your doorstep.
            </p>

            <button className="mt-10 bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-red-600 transition duration-300">
              EXPLORE NETWORK
            </button>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
              alt="Food Network"
              className="w-full h-[600px] object-cover rounded-[30px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
