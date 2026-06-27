export default function FoodNetworkSection() {
  return (
    <section id="food-network" className="bg-[#f8f5f0] py-14 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <div className="inline-block bg-white border-2 border-black rounded-xl px-6 py-3 shadow-[4px_4px_0px_red]">
              <h4 className="text-sm lg:text-base font-black uppercase tracking-wider">
                FOOD NETWORK
              </h4>
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-black leading-tight">
              Connecting food
              <br />
              lovers everywhere.
            </h2>

            <p className="mt-6 text-gray-700 text-base lg:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              Discover our network of partner cafes, food creators and delivery
              partners bringing delicious experiences closer to your doorstep.
            </p>

            <button className="mt-8 lg:mt-10 w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-8 lg:px-10 py-4 rounded-full font-bold text-base lg:text-lg transition duration-300 shadow-lg cursor-pointer">
              EXPLORE NETWORK
            </button>

          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">

            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
              alt="Food Network"
              className="w-full h-72 sm:h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}