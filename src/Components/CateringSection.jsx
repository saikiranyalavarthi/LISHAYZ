export default function CateringSection() {
  return (
    <section id="catering" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1555244162-803834f70033"
              alt="Catering"
              className="w-full h-[600px] object-cover rounded-[30px]"
            />
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-white text-black border-2 border-black rounded-xl px-8 py-4 shadow-[4px_4px_0px_white]">
              <h4 className="font-black uppercase">CATERING</h4>
            </div>

            <h2 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
              Catering for
              <br />
              every occasion.
            </h2>

            <p className="mt-8 text-xl text-gray-300 leading-relaxed">
              Whether it's a corporate event, wedding, birthday party or private
              gathering, LISHAYZ delivers unforgettable food experiences.
            </p>

            <button className="mt-10 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-full font-bold text-lg transition">
              BOOK CATERING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
