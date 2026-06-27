export default function CateringSection() {
  return (
    <section id="catering" className="bg-black text-white py-14 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-1">
            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033"
              alt="Catering"
              className="w-full h-72 sm:h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="order-2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block bg-white text-black border-2 border-black rounded-xl px-6 py-3 shadow-[4px_4px_0px_red]">
              <h4 className="text-sm lg:text-base font-black uppercase tracking-wider">
                Catering
              </h4>
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black leading-tight">
              Catering for
              <br />
              every occasion.
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-300 text-base lg:text-xl leading-8 max-w-xl mx-auto lg:mx-0">
              Whether it's a corporate event, wedding, birthday party or private
              gathering, LISHAYZ delivers unforgettable food experiences with
              freshly prepared meals and exceptional service.
            </p>

            {/* Button */}
            <button className="mt-8 lg:mt-10 w-full sm:w-auto bg-red-600 hover:bg-red-700 px-8 lg:px-10 py-4 rounded-full font-bold text-base lg:text-lg transition duration-300 shadow-lg cursor-pointer">
              BOOK CATERING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
