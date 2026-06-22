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
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-block bg-white border-2 border-black rounded-xl px-8 py-4 shadow-[4px_4px_0px_black]">
            <h4 className="font-black uppercase">OUR PARTNERS</h4>
          </div>

          <h2 className="mt-8 text-5xl md:text-7xl font-black">
            Trusted by
            <br />
            amazing brands.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="h-32 rounded-3xl border-2 border-black flex items-center justify-center text-2xl font-black"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
