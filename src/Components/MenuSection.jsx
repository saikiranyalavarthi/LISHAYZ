export default function MenuSection() {
  const menuItems = [
    {
      title: "Classic Burger",
      desc: "Juicy grilled beef patty with cheese and fresh veggies.",
      price: "$15",
    },
    {
      title: "Chicken Wrap",
      desc: "Grilled chicken, lettuce and special sauce.",
      price: "$12",
    },
    {
      title: "Pasta Alfredo",
      desc: "Creamy alfredo sauce with parmesan cheese.",
      price: "$18",
    },
    {
      title: "Veg Pizza",
      desc: "Loaded with fresh vegetables and mozzarella.",
      price: "$16",
    },
    {
      title: "French Fries",
      desc: "Crispy golden fries with seasoning.",
      price: "$8",
    },
    {
      title: "Cold Coffee",
      desc: "Refreshing chilled coffee with cream.",
      price: "$7",
    },
  ];

  return (
    <section id="menu" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white border-2 border-black rounded-xl px-8 py-4 shadow-[4px_4px_0px_black]">
            <h4 className="font-black uppercase">MENU</h4>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b-2 border-black pb-6">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-black text-black uppercase">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-black/80">{item.desc}</p>
                </div>

                <span className="text-xl font-black text-black">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition">
            ORDER ONLINE
          </button>
        </div>
      </div>
    </section>
  );
}
