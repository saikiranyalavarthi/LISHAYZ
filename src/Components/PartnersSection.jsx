export default function PartnersSection() {
  const partners = [
    "/imges1.jpg",
    "/imges2.jpg",
    "/imges4.jpg",
    "/imges5.jpg",
    "/imges6.jpg",
    "/imges7.jpg",
    "/imges8.jpg",
  ];

  return (
    <section id="partners" className="bg-white py-14 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        {/* Heading */}
        <div className="text-center">
          <div className="inline-block bg-white border-2 border-black rounded-xl px-6 py-3 shadow-[4px_4px_0px_#ef4444]">
            <h4 className="text-sm lg:text-base font-black uppercase tracking-wider">
              OUR PARTNERS
            </h4>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black leading-tight">
            Trusted by
            <br />
            amazing brands.
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
            We proudly collaborate with leading food delivery platforms and
            trusted partners to serve delicious food faster.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="h-32 rounded-3xl border-2 border-black bg-white shadow-[4px_4px_0px_#000] flex items-center justify-center p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#ef4444]"
            >
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
