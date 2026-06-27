export default function PartnersSection() {
  const partners = [
    "Uber Eats",
    "DoorDash",
    "Zomato",
    "Swiggy",
    "Food Panda",
    "Grab Food",
  ];

  return (
    <section id="partners" className="bg-white py-14 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-6">
        {/* Heading */}
        <div className="text-center">
          <div className="inline-block bg-white border-2 border-black rounded-xl px-6 py-3 shadow-[4px_4px_0px_red]">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-10 lg:mt-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="h-24 sm:h-28 lg:h-32 rounded-2xl lg:rounded-3xl border-2 border-black bg-white flex items-center justify-center text-base sm:text-xl lg:text-2xl font-black transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
