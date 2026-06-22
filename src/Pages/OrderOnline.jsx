import { useState } from "react";
import { Search, Plus, ShoppingCart, X } from "lucide-react";

export default function OrderOnline() {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "Classic Burger",
      price: "₹199",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      id: 2,
      name: "Veg Pizza",
      price: "₹249",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },
    {
      id: 3,
      name: "Pasta Alfredo",
      price: "₹189",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    },
    {
      id: 4,
      name: "Cold Coffee",
      price: "₹99",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },
    {
      id: 5,
      name: "French Fries",
      price: "₹89",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    },
    {
      id: 6,
      name: "Chicken Wrap",
      price: "₹149",
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7",
    },
  ];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="min-h-screen bg-white py-25">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-black text-center">
          Order Online
        </h1>

        {/* Search */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="flex items-center border-2 border-black rounded-full px-5 py-4">
            <Search size={20} />

            <input
              type="text"
              placeholder="Search food..."
              className="w-full outline-none ml-3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border"
            >
              <img
                src={item.image}
                alt=""
                className="h-56 w-full object-cover"
              />

              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-black text-lg">{item.name}</h3>

                    <p className="text-red-600 font-bold mt-2">{item.price}</p>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="w-10 h-10 bg-red-600 rounded-full text-white flex items-center justify-center"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-black">{selectedProduct.name}</h2>

              <button onClick={() => setSelectedProduct(null)}>
                <X />
              </button>
            </div>

            {/* Add Ons */}
            <h3 className="mt-6 font-bold text-lg">Add Ons</h3>

            <div className="space-y-3 mt-3">
              <label className="flex gap-3">
                <input type="checkbox" />
                Extra Cheese (+₹20)
              </label>

              <label className="flex gap-3">
                <input type="checkbox" />
                Extra Sauce (+₹10)
              </label>

              <label className="flex gap-3">
                <input type="checkbox" />
                Extra Veggies (+₹30)
              </label>
            </div>

            {/* Customisation */}
            <h3 className="mt-6 font-bold text-lg">Customisation</h3>

            <select className="w-full border rounded-xl p-3 mt-3">
              <option>Regular</option>
              <option>Medium Spicy</option>
              <option>Extra Spicy</option>
            </select>

            <button
              onClick={() => {
                setCartCount(cartCount + 1);
                setSelectedProduct(null);
              }}
              className="w-full bg-red-600 text-white py-4 rounded-full font-bold mt-8"
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}

      {/* Bottom Cart */}
      {cartCount > 0 && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-xl z-50">
          <ShoppingCart size={20} />

          <span className="font-bold">
            {cartCount} Item(s) Added • View Cart
          </span>
        </div>
      )}
    </section>
  );
}
