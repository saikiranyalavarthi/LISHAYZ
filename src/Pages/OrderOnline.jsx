import { useState } from "react";
import { Search } from "lucide-react";

export default function OrderOnline() {
  const [activeCategory, setActiveCategory] = useState("Hot Drinks");
  const [search, setSearch] = useState("");

  // ===============================
  // MENU DATA
  // ===============================

  const menuData = {
    "Hot Drinks": [
      {
        title: "Speciality Coffee (4oz)",
        items: [
          {
            name: "Single Shot Espresso",
            description: "(13grm ground coffee : 26grm yield)",
            price: "$4.00",
          },
          {
            name: "Double Shot Espresso",
            description: "(18grm ground coffee : 36grm yield)",
            price: "$4.50",
          },
          {
            name: "Single Shot Ristretto",
            description: "(13grm ground coffee : 13grm yield)",
            price: "$4.00",
          },
          {
            name: "Double Shot Ristretto",
            description: "(18grm ground coffee : 18grm yield)",
            price: "$4.50",
          },
          {
            name: "Vienna",
            description: "Small Long Black + Whip Cream",
            price: "$6.50",
          },
          {
            name: "Affogato",
            description: "Single Shot Espresso + Ice Cream",
            price: "$6.50",
          },
          {
            name: "Bullet Coffee",
            description: "Long Black + Ghee + MCT Oil",
            price: "$6.50",
          },
          {
            name: "Piccolo",
            description: "Single Shot Espresso + Textured Milk",
            price: "$5.00",
          },
          {
            name: "Short Macchiato",
            description: "Espresso + Milk Foam",
            price: "$5.00",
          },
          {
            name: "Long Macchiato",
            description: "Double Espresso + Milk Foam",
            price: "$5.50",
          },
          {
            name: "Magic",
            description: "Double Ristretto + Textured Milk",
            price: "$5.50",
          },
        ],
      },

      {
        title: "Coffee (8oz / 12oz / 16oz)",
        items: [
          {
            name: "Long Black",
            price: "S $5.00 | M $5.50 | L $6.00",
          },
          {
            name: "Flat White",
            price: "S $5.00 | M $5.50 | L $6.00",
          },
          {
            name: "Latte",
            price: "S $5.00 | M $5.50 | L $6.00",
          },
          {
            name: "Cappuccino",
            price: "S $5.00 | M $5.50 | L $6.00",
          },
          {
            name: "Hot Chocolate",
            price: "S $5.00 | M $5.50 | L $6.00",
          },
          {
            name: "Chai Latte",
            price: "S $5.00 | M $5.50 | L $6.00",
          },
          {
            name: "Turmeric Latte",
            price: "S $5.00 | M $5.50 | L $6.00",
          },
          {
            name: "Mocha",
            price: "S $5.30 | M $5.80 | L $6.30",
          },
          {
            name: "Dirty Chai",
            price: "S $5.30 | M $5.80 | L $6.30",
          },
          {
            name: "Sticky Chai",
            price: "S $5.50 | M $6.00 | L $6.50",
          },
          {
            name: "Beetroot Latte",
            price: "S $6.00 | M $6.50 | L $7.00",
          },
          {
            name: "Red Velvet Latte",
            price: "S $6.00 | M $6.50 | L $7.00",
          },
          {
            name: "Matcha Latte",
            price: "S $6.00 | M $6.50 | L $7.00",
          },
          {
            name: "Hojicha Latte",
            price: "S $6.00 | M $6.50 | L $7.00",
          },
        ],
      },
    ],

    "Iced Drinks": [
      {
        title: "Iced Lattes (16oz)",
        items: [
          { name: "Iced Long Black", price: "$6.50" },
          { name: "Iced Latte", price: "$6.50" },
          { name: "Iced Chai Latte", price: "$6.50" },
          { name: "Iced Turmeric Latte", price: "$6.50" },
          { name: "Iced Mocha", price: "$7.00" },
          { name: "Iced Dirty Chai", price: "$7.00" },
          { name: "Iced Red Velvet Latte", price: "$7.50" },
          { name: "Iced Beetroot Latte", price: "$7.50" },
          { name: "Iced Matcha Latte", price: "$7.50" },
          { name: "Iced Hojicha Latte", price: "$7.50" },
          { name: "Iced Coconut Matcha", price: "$9.00" },
          { name: "Iced Strawberry Matcha", price: "$9.50" },
        ],
      },

      {
        title: "Iced Indulgence",
        items: [
          {
            name: "Iced Coffee",
            description: "Served with Ice Cream & Whip Cream",
            price: "$9.50",
          },
          {
            name: "Iced Chocolate",
            description: "Served with Ice Cream & Whip Cream",
            price: "$9.50",
          },
        ],
      },

      {
        title: "Milk Shakes",
        items: [
          { name: "Vanilla", price: "$9.50" },
          { name: "Caramel", price: "$9.50" },
          { name: "Strawberry", price: "$9.50" },
          { name: "Chocolate", price: "$9.50" },
        ],
      },

      {
        title: "Smoothies",
        items: [
          { name: "Banana Dream", price: "$12.90" },
          { name: "Berry Bliss", price: "$12.90" },
          { name: "Strawberry Crush", price: "$12.90" },
          { name: "Tropical Mango", price: "$12.90" },
          { name: "Island Pineapple", price: "$12.90" },
          { name: "Dragon Refresher", price: "$13.50" },
          { name: "Acai Boost", price: "$13.50" },
          { name: "Tropical Green", price: "$13.50" },
        ],
      },

      {
        title: "Refreshers",
        items: [
          {
            name: "Berry Juice",
            description: "Mixed Berry + Strawberry",
            price: "$11.50",
          },
          {
            name: "Tropical Juice",
            description: "Mango + Pineapple",
            price: "$12.00",
          },
          {
            name: "Pink Tropical Juice",
            description: "Dragon Fruit + Pineapple",
            price: "$12.00",
          },
          {
            name: "Nature's Blend",
            description: "Mango + Banana + Mixed Berry",
            price: "$12.00",
          },
        ],
      },
    ],

    Breakfasts: [
      {
        title: "Wake-Up Feasts",
        items: [
          {
            name: "Granola Acai Bowl",
            description:
              "Acai served with granola and topped with fresh fruits. Add: Nutella +$2 | Peanut Butter +$2 | Biscoff Spread +$2",
            price: "$16.50",
          },
          {
            name: "Breakfast Bruschetta",
            description:
              "Toasted sourdough, poached eggs, avo, bacon, tomato, onion, pesto, fetta, balsamic glaze.",
            price: "$18.90",
          },
          {
            name: "Simply Pleased",
            description:
              "2 eggs your way with bacon on toasted sourdough and relish.",
            price: "$16.50",
          },
          {
            name: "Smashed Avo",
            description:
              "Smashed avo, fetta and dukkah on sourdough drizzled with balsamic glaze.",
            price: "$15.00",
          },
          {
            name: "Eggs Benedict",
            description:
              "2 poached eggs, baby spinach, hollandaise sauce on toasted sourdough.",
            price: "$16.90",
          },
          {
            name: "Cheese Omelette",
            description:
              "Eggs, pure cream, cheese. Optional veggies: onion, cucumber, carrot.",
            price: "$15.00",
          },
          {
            name: "Eggs on Toast",
            description: "2 eggs your way on toasted sourdough with relish.",
            price: "$13.00",
          },
          {
            name: "Chicken Cheese Avo Mayo",
            description: "Choice of bread - Toasted / Untoasted.",
            price: "$12.50",
          },
          {
            name: "Loaded Brekky Wrap",
            description:
              "Bacon, hash brown, cheese, spinach, 2 scrambled eggs on tortilla wrap. Choice of sauce.",
            price: "$15.00",
          },
          {
            name: "Bacon and Egg",
            description:
              "Choice of sauce. Toasted / Untoasted. Available as Muffin, Roll, Sandwich or Turkish (+$2).",
            price: "$9.50",
          },
        ],
      },
    ],

    "Burger & Wraps": [
      {
        title: "Our Burger & Wraps",
        items: [
          {
            name: "Grilled Halloumi (Veg)",
            description:
              "Grilled halloumi, red pepper strips, tomato, lettuce, onion, tomato relish. (Burger or Wrap)",
            price: "$18.90",
          },
          {
            name: "Grilled Chicken",
            description:
              "Grilled chicken pattie with cheese, onion, tomato, lettuce, aioli. (Burger or Wrap)",
            price: "$18.90",
          },
          {
            name: "Southern Fried Chicken",
            description:
              "Southern fried chicken pattie with cheese, onion, tomato, lettuce, aioli. (Burger or Wrap)",
            price: "$18.90",
          },
          {
            name: "Spicy Fried Chicken",
            description:
              "Southern fried chicken pattie with cheese, jalapenos, onion, tomato, lettuce, spicy sauce and mayo. (Burger or Wrap)",
            price: "$18.90",
          },
          {
            name: "Cheese Burger",
            description:
              "Grilled beef pattie with double cheese. Choice of sauce.",
            price: "$15.00",
          },
          {
            name: "Traditional Beef Burger",
            description:
              "Grilled beef pattie with cheese, pickles, onion, tomato, lettuce. Choice of sauce.",
            price: "$18.90",
          },
        ],
      },
    ],

    "Sandwiches & Toasted Classics": [
      {
        title: "Sandwiches & Toasted Classics",
        items: [
          {
            name: "Steak on Turkish",
            description:
              "Grilled scotch fillet with cheese, tomato, beetroot, lettuce on Turkish bread. Choice of sauce.",
            price: "$21.90",
          },
          {
            name: "BLT (Bacon, Lettuce, Tomato)",
            description:
              "Toasted Turkish with bacon, lettuce, tomato, cheese and mayo.",
            price: "$16.00",
          },
          {
            name: "BLAT (Bacon, Lettuce, Avocado, Tomato)",
            description:
              "Toasted Turkish with bacon, lettuce, tomato, avocado, cheese and mayo.",
            price: "$18.00",
          },
        ],
      },
    ],

    "Hot Plates": [
      {
        title: "Hot Plates",
        items: [
          {
            name: "Beef & Pork Lasagna",
            description:
              "Lasagna sheets, beef, pork, diced tomato, bechamel, cheese. Add Chips +$3 | Add Salad +$3.",
            price: "$15.00",
          },
          {
            name: "BBQ Pork Riblet Plate",
            description: "BBQ pork riblets served with chips and fresh salad.",
            price: "$13.50",
          },
        ],
      },
    ],

    "Bowls & Curries": [
      {
        title: "Bowls & Curries",
        items: [
          {
            name: "Buddha Bowl (Veg)",
            description:
              "Grilled halloumi, hummus, sweet potato chips, rice, cucumber, spinach, avocado, lemon wedge and glaze.",
            price: "$17.90",
          },
          {
            name: "Butter Chicken",
            description:
              "Tender grilled chicken simmered in a rich creamy house-made butter chicken curry served with rice.",
            price: "$17.50",
          },
          {
            name: "Satay Chicken Bowl",
            description:
              "Grilled chicken, satay sauce, salad, jasmine rice and Kewpie mayo.",
            price: "$18.90",
          },
          {
            name: "Teriyaki Chicken Bowl",
            description:
              "Grilled chicken, teriyaki sauce, salad, jasmine rice and Kewpie mayo.",
            price: "$18.90",
          },
          {
            name: "Katsu Chicken Bowl",
            description:
              "Panko fried chicken, katsu sauce, salad, jasmine rice and Kewpie mayo.",
            price: "$18.90",
          },
        ],
      },
    ],

    "Pub Favourites": [
      {
        title: "Pub Favourites",
        items: [
          {
            name: "Chicken Parmi",
            description:
              "Panko fried chicken breast topped with Napoli sauce and melted shredded cheese, served with chips and salad.",
            price: "$17.00",
          },
          {
            name: "Battered Fish and Chips",
            description:
              "Crispy golden fish fillet fried to perfection, served with crispy chips, tartare sauce and lemon wedge.",
            price: "$14.90",
          },
          {
            name: "Loaded Chips and Gravy",
            description: "Fried chips topped with gravy, cheese and bacon.",
            price: "$15.00",
          },
        ],
      },
    ],
  };

  // Filter Search

  const filteredSections = menuData[activeCategory].map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    ),
  }));

  return (
    <div className="min-h-screen bg-gray-100 py-34">
      {/* Search */}

      <div className="bg-white p-5 shadow">
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search Drinks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none"
          />
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}

        <div className="w-64 bg-white border-r min-h-screen sticky top-0">
          <h2 className="text-xl font-bold p-6 border-b">Categories</h2>

          {[
            "Hot Drinks",
            "Iced Drinks",
            "Breakfasts",
            "Burger & Wraps",
            "Sandwiches & Toasted Classics",
            "Hot Plates",
            "Pub Favourites",
            "Bowls & Curries",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`w-full text-left px-6 py-4 transition font-medium ${
                activeCategory === cat
                  ? "bg-red-600 text-white"
                  : "hover:bg-orange-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Section Starts in Part 2 */}
        {/* Products Section Starts in Part 2 */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">{activeCategory}</h1>
          {filteredSections.map((section, index) => (
            <div key={index} className="mb-10">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-orange-600 mb-5 border-b pb-2">
                {section.title}
              </h2>

              {/* Products */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {section.items.length > 0 ? (
                  section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 p-6 border"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {item.name}
                          </h3>

                          {item.description && (
                            <p className="text-gray-500 text-sm mt-2 leading-6">
                              {item.description}
                            </p>
                          )}

                          <p className="text-red-600 font-bold text-lg mt-4">
                            {item.price}
                          </p>
                        </div>

                        <button className="ml-5 px-5 py-2 rounded-xl bg-red-600 hover:bg-orange-600 text-white font-semibold transition">
                          ADD
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center text-gray-500 py-10">
                    No drinks found.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
