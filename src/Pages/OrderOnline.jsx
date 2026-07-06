import { useState } from "react";
import { Search } from "lucide-react";
import CustomizationModal from "../Components/CustomizationModal";
import {
  FaCoffee,
  FaGlassWhiskey,
  FaEgg,
  FaHamburger,
  FaBreadSlice,
  FaUtensils,
  FaDrumstickBite,
} from "react-icons/fa";

import { GiRiceCooker } from "react-icons/gi";

export default function OrderOnline() {
  const [activeCategory, setActiveCategory] = useState("Hot Drinks");
  const [search, setSearch] = useState("");

  const [selectedSize, setSelectedSize] = useState({});
  const [cart, setCart] = useState([]);
  const [showCustomize, setShowCustomize] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  // ===============================
  // MENU DATA
  // ===============================

  const categories = [
    { name: "Hot Drinks", icon: <FaCoffee /> },
    { name: "Iced Drinks", icon: <FaGlassWhiskey /> },
    { name: "Breakfasts", icon: <FaEgg /> },
    { name: "Bowls & Curries", icon: <GiRiceCooker /> },
    { name: "Burger & Wraps", icon: <FaHamburger /> },
    { name: "Sandwiches", icon: <FaBreadSlice /> },
    { name: "Hot Plates", icon: <FaUtensils /> },
    { name: "Pub Favourites", icon: <FaDrumstickBite /> },
  ];

  const customizationData = {
    coffee: {
      extras: [
        { name: "Extra Shot", price: 1 },
        { name: "Decafe", price: 1 },
      ],

      alternativeMilk: [
        { name: "Full Cream", price: 0 },
        { name: "Skim", price: 0 },
        { name: "Soy", price: 1 },
        { name: "Oat", price: 1 },
        { name: "Almond", price: 1 },
        { name: "Lactose Free", price: 1 },
        { name: "Coconut Milk", price: 1 },
      ],

      syrups: [
        { name: "Vanilla", price: 1 },
        { name: "Hazelnut", price: 1 },
        { name: "Caramel", price: 1 },
      ],
    },
    breakfast: {
      protein: [
        { name: "Mini Sausage", price: 2.0 },
        { name: "Sliced Ham", price: 3.0 },
        { name: "Bacon 1 Rasher", price: 3.5 },
        { name: "Bacon 2 Rasher", price: 6.0 },
        { name: "Grilled Halloumi", price: 4.0 },
        { name: "Smoked Salmon", price: 7.0 },
        { name: "Beef Patty", price: 8.0 },
        { name: "Grilled Steak", price: 12.0 },
        {
          name: "Chicken (Grilled / Crumbed / Southern Fried)",
          price: 7.0,
        },
      ],

      addOns: [
        { name: "Mushrooms", price: 4.0 },
        { name: "Fresh Tomato", price: 4.0 },
        { name: "Grilled Tomato", price: 4.0 },
        { name: "Egg Your Way", price: 3.5 },
        { name: "Avocado", price: 3.5 },
        { name: "Spinach", price: 3.5 },
        { name: "Hashbrown", price: 2.2 },
        { name: "Baked Beans", price: 2.5 },
        { name: "Shredded Cheese", price: 2.5 },
        { name: "Cheese Slice", price: 1.5 },
        { name: "Pineapple", price: 1.5 },
        { name: "Beetroot", price: 1.5 },
        { name: "Jalapenos", price: 1.5 },
        { name: "Pickles", price: 1.5 },
      ],
    },
    coffeeMilk: {
      alternativeMilk: [
        { name: "Full Cream", price: 0 },
        { name: "Skim", price: 0 },
        { name: "Soy", price: 1 },
        { name: "Oat", price: 1 },
        { name: "Almond", price: 1 },
        { name: "Lactose Free", price: 1 },
        { name: "Coconut Milk", price: 1 },
      ],

      syrups: [
        { name: "Vanilla", price: 1 },
        { name: "Hazelnut", price: 1 },
        { name: "Caramel", price: 1 },
      ],
    },

    coffeeExtraShot: {
      extras: [{ name: "Extra Shot", price: 1 }],

      alternativeMilk: [
        { name: "Full Cream", price: 0 },
        { name: "Skim", price: 0 },
        { name: "Soy", price: 1 },
        { name: "Oat", price: 1 },
        { name: "Almond", price: 1 },
        { name: "Lactose Free", price: 1 },
        { name: "Coconut Milk", price: 1 },
      ],

      syrups: [
        { name: "Vanilla", price: 1 },
        { name: "Hazelnut", price: 1 },
        { name: "Caramel", price: 1 },
      ],
    },
    coffeeSingleExtra: {
      extras: [{ name: "Extra Shot", price: 1.0 }],
    },
    coffeeMilkOnly: {
      alternativeMilk: [
        { name: "Full Cream", price: 0.0 },
        { name: "Skim", price: 0.0 },
        { name: "Soy", price: 1.0 },
        { name: "Oat", price: 1.0 },
        { name: "Almond", price: 1.0 },
        { name: "Lactose Free", price: 1.0 },
        { name: "Coconut Milk", price: 1.0 },
      ],
    },
  };

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
            customization: "coffeeMilk",
          },
          {
            name: "Short Macchiato",
            description: "Espresso + Milk Foam",
            price: "$5.00",
            customization: "coffeeMilk",
          },
          {
            name: "Long Macchiato",
            description: "Double Espresso + Milk Foam",
            price: "$5.50",
            customization: "coffeeMilk",
          },
          {
            name: "Magic",
            description: "Double Ristretto + Textured Milk",
            price: "$5.50",
            customization: "coffeeMilk",
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
            customization: "coffee",
          },
          {
            name: "Latte",
            price: "S $5.00 | M $5.50 | L $6.00",
            customization: "coffee",
          },
          {
            name: "Cappuccino",
            price: "S $5.00 | M $5.50 | L $6.00",
            customization: "coffee",
          },
          {
            name: "Hot Chocolate",
            price: "S $5.00 | M $5.50 | L $6.00",
            customization: "coffeeExtraShot",
          },
          {
            name: "Chai Latte",
            price: "S $5.00 | M $5.50 | L $6.00",
            customization: "coffeeExtraShot",
          },
          {
            name: "Turmeric Latte",
            price: "S $5.00 | M $5.50 | L $6.00",
            customization: "coffeeExtraShot",
          },
          {
            name: "Mocha",
            price: "S $5.30 | M $5.80 | L $6.30",
            customization: "coffee",
          },
          {
            name: "Dirty Chai",
            price: "S $5.30 | M $5.80 | L $6.30",
            customization: "coffee",
          },
          {
            name: "Sticky Chai",
            price: "S $5.50 | M $6.00 | L $6.50",
            customization: "coffeeExtraShot",
          },
          {
            name: "Beetroot Latte",
            price: "S $6.00 | M $6.50 | L $7.00",
            customization: "coffeeExtraShot",
          },
          {
            name: "Red Velvet Latte",
            price: "S $6.00 | M $6.50 | L $7.00",
            customization: "coffeeExtraShot",
          },
          {
            name: "Matcha Latte",
            price: "S $6.00 | M $6.50 | L $7.00",
            customization: "coffeeExtraShot",
          },
          {
            name: "Hojicha Latte",
            price: "S $6.00 | M $6.50 | L $7.00",
            customization: "coffeeExtraShot",
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
          {
            name: "Iced Chai Latte",
            price: "$6.50",
            customization: "coffeeExtraShot",
          },
          {
            name: "Iced Turmeric Latte",
            price: "$6.50",
            customization: "coffeeExtraShot",
          },
          { name: "Iced Mocha", price: "$7.00" },
          { name: "Iced Dirty Chai", price: "$7.00" },
          {
            name: "Iced Red Velvet Latte",
            price: "$7.50",
            customization: "coffeeExtraShot",
          },
          {
            name: "Iced Beetroot Latte",
            price: "$7.50",
            customization: "coffeeExtraShot",
          },
          {
            name: "Iced Matcha Latte",
            price: "$7.50",
            customization: "coffeeExtraShot",
          },
          {
            name: "Iced Hojicha Latte",
            price: "$7.50",
            customization: "coffeeExtraShot",
          },
          {
            name: "Iced Coconut Matcha",
            price: "$9.00",
            customization: "coffeeSingleExtra",
          },
          {
            name: "Iced Strawberry Matcha",
            price: "$9.50",
            customization: "coffeeExtraShot",
          },
        ],
      },

      {
        title: "Iced Indulgence",
        items: [
          {
            name: "Iced Coffee",
            description: "Served with Ice Cream & Whip Cream",
            price: "$9.50",
            customization: "coffee",
          },
          {
            name: "Iced Chocolate",
            description: "Served with Ice Cream & Whip Cream",
            price: "$9.50",

            customization: "coffeeMilk",
          },
        ],
      },

      {
        title: "Milk Shakes",
        items: [
          { name: "Vanilla", price: "$9.50", customization: "coffeeMilkOnly" },
          { name: "Caramel", price: "$9.50", customization: "coffeeMilkOnly" },
          {
            name: "Strawberry",
            price: "$9.50",
            customization: "coffeeMilkOnly",
          },
          {
            name: "Chocolate",
            price: "$9.50",
            customization: "coffeeMilkOnly",
          },
        ],
      },

      {
        title: "Smoothies",
        items: [
          {
            name: "Banana Dream",
            price: "$12.90",
            customization: "coffeeMilkOnly",
          },
          {
            name: "Berry Bliss",
            price: "$12.90",
            customization: "coffeeMilkOnly",
          },
          {
            name: "Strawberry Crush",
            price: "$12.90",
            customization: "coffeeMilkOnly",
          },
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
            customization: "breakfast",
          },
          {
            name: "Simply Pleased",
            description:
              "2 eggs your way with bacon on toasted sourdough and relish.",
            price: "$16.50",
            customization: "breakfast",
          },
          {
            name: "Smashed Avo",
            description:
              "Smashed avo, fetta and dukkah on sourdough drizzled with balsamic glaze.",
            price: "$15.00",
            customization: "breakfast",
          },
          {
            name: "Eggs Benedict",
            description:
              "2 poached eggs, baby spinach, hollandaise sauce on toasted sourdough.",
            price: "$16.90",
            customization: "breakfast",
          },
          {
            name: "Cheese Omelette",
            description:
              "Eggs, pure cream, cheese. Optional veggies: onion, cucumber, carrot.",
            price: "$15.00",
            customization: "breakfast",
          },
          {
            name: "Eggs on Toast",
            description: "2 eggs your way on toasted sourdough with relish.",
            price: "$13.00",
            customization: "breakfast",
          },
          {
            name: "Chicken Cheese Avo Mayo",
            description: "Choice of bread - Toasted / Untoasted.",
            price: "$12.50",
            customization: "breakfast",
          },
          {
            name: "Loaded Brekky Wrap",
            description:
              "Bacon, hash brown, cheese, spinach, 2 scrambled eggs on tortilla wrap. Choice of sauce.",
            price: "$15.00",
            customization: "breakfast",
          },
          {
            name: "Bacon and Egg",
            description:
              "Choice of sauce. Toasted / Untoasted. Available as Muffin, Roll, Sandwich or Turkish (+$2).",
            price: "$9.50",
            customization: "breakfast",
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
            customization: "breakfast",
          },
          {
            name: "Grilled Chicken",
            description:
              "Grilled chicken pattie with cheese, onion, tomato, lettuce, aioli. (Burger or Wrap)",
            price: "$18.90",
            customization: "breakfast",
          },
          {
            name: "Southern Fried Chicken",
            description:
              "Southern fried chicken pattie with cheese, onion, tomato, lettuce, aioli. (Burger or Wrap)",
            price: "$18.90",
            customization: "breakfast",
          },
          {
            name: "Spicy Fried Chicken",
            description:
              "Southern fried chicken pattie with cheese, jalapenos, onion, tomato, lettuce, spicy sauce and mayo. (Burger or Wrap)",
            price: "$18.90",
            customization: "breakfast",
          },
          {
            name: "Cheese Burger",
            description:
              "Grilled beef pattie with double cheese. Choice of sauce.",
            price: "$15.00",
            customization: "breakfast",
          },
          {
            name: "Traditional Beef Burger",
            description:
              "Grilled beef pattie with cheese, pickles, onion, tomato, lettuce. Choice of sauce.",
            price: "$18.90",
            customization: "breakfast",
          },
        ],
      },
    ],

    Sandwiches: [
      {
        title: "Sandwiches & Toasted Classics",
        items: [
          {
            name: "Steak on Turkish",
            description:
              "Grilled scotch fillet with cheese, tomato, beetroot, lettuce on Turkish bread. Choice of sauce.",
            price: "$21.90",
            customization: "breakfast",
          },
          {
            name: "BLT (Bacon, Lettuce, Tomato)",
            description:
              "Toasted Turkish with bacon, lettuce, tomato, cheese and mayo.",
            price: "$16.00",
            customization: "breakfast",
          },
          {
            name: "BLAT (Bacon, Lettuce, Avocado, Tomato)",
            description:
              "Toasted Turkish with bacon, lettuce, tomato, avocado, cheese and mayo.",
            price: "$18.00",
            customization: "breakfast",
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
            customization: "breakfast",
          },
          {
            name: "BBQ Pork Riblet Plate",
            description: "BBQ pork riblets served with chips and fresh salad.",
            price: "$13.50",
            customization: "breakfast",
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
            customization: "breakfast",
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
            customization: "breakfast",
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
            customization: "breakfast",
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
  const openCustomization = (item) => {
  if (item.price?.includes("S") && !selectedSize[item.name]) {
    alert("Please select a size.");
    return;
  }

  setSelectedItem(item);
  setShowCustomize(true);
};
  const handleAddToCart = (item) => {
    if (item.price?.includes("S") && !selectedSize[item.name]) {
      alert("Please select a size.");
      return;
    }

    const size = selectedSize[item.name] || "";

    setCart((prev) => {
      const existing = prev.find(
        (x) => x.name === item.name && x.size === size,
      );

      if (existing) {
        return prev.map((x) =>
          x.name === item.name && x.size === size
            ? { ...x, quantity: x.quantity + 1 }
            : x,
        );
      }

      return [
        ...prev,
        {
          ...item,
          size,
          quantity: 1,
        },
      ];
    });

    alert(`${item.name} Added`);
   

  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-10">
      {/* Search */}
      <div className="bg-white p-4 shadow-md sticky top-20 z-30">
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search Menu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-red-600"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        {/* <div className="lg:w-72 w-full bg-white border-r lg:sticky lg:top-24 lg:h-[calc(100vh-96px)] overflow-y-auto">
          <h2 className="text-xl font-bold p-5 border-b bg-white sticky top-0 z-20">
            Categories
          </h2>

          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
            {[
              "Hot Drinks",
              "Iced Drinks",
              "Breakfasts",
              "Burger & Wraps",
              "Sandwiches",
              "Hot Plates",
              "Pub Favourites",
              "Bowls & Curries",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 lg:w-full text-left px-6 py-4 font-medium whitespace-nowrap transition ${
                  activeCategory === cat
                    ? "bg-red-600 text-white"
                    : "hover:bg-red-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div> */}

        <div className="lg:w-72 w-full bg-white border-r shadow-lg lg:sticky lg:top-24 lg:h-[calc(100vh-96px)] overflow-y-auto rounded-r-3xl">
          <h2 className="text-2xl font-bold p-5 bg-gradient-to-r from-red-600 to-red-500 text-white sticky top-0 z-20 rounded-tr-3xl">
            🍽 Categories
          </h2>

          <div className="flex lg:flex-col gap-2 p-3 overflow-x-auto lg:overflow-x-visible">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`group flex items-center gap-4 w-full px-5 py-4 rounded-2xl transition-all duration-300 ${
                  activeCategory === cat.name
                    ? "bg-red-600 text-white shadow-lg scale-[1.03]"
                    : "bg-gray-50 hover:bg-red-50 hover:text-red-600"
                }`}
              >
                <span className="text-xl">{cat.icon}</span>

                <span className="font-semibold">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="flex-1 p-5 lg:p-8">
          <h1 className="text-3xl font-bold mb-8">{activeCategory}</h1>

          {filteredSections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-red-600 mb-6 border-b border-red-200 pb-2">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {section.items.length > 0 ? (
                  section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border p-6"
                    >
                      <div className="flex justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800">
                            {item.name}
                          </h3>

                          {item.description && (
                            <p className="text-gray-500 mt-3 leading-6 text-sm">
                              {item.description}
                            </p>
                          )}

                          {item.price?.includes("S") ? (
                            <div className="flex flex-wrap gap-2 mt-5">
                              {item.price.split("|").map((size, i) => {
                                const label = size.trim().split(" ")[0];

                                return (
                                  <button
                                    key={i}
                                    onClick={() =>
                                      setSelectedSize({
                                        ...selectedSize,
                                        [item.name]: label,
                                      })
                                    }
                                    className={`px-4 py-2 rounded-full border transition ${
                                      selectedSize[item.name] === label
                                        ? "bg-red-600 text-white border-red-600"
                                        : "bg-white hover:bg-red-50"
                                    }`}
                                  >
                                    {size.trim()}
                                  </button>
                                );
                              })}
                            </div>
                          ) : (
                            <p className="text-red-600 text-xl font-bold mt-5">
                              {item.price}
                            </p>
                          )}
                        </div>

                        {cart.find(
                          (cartItem) =>
                            cartItem.name === item.name &&
                            cartItem.size === (selectedSize[item.name] || ""),
                        ) ? (
                          <div className="flex items-center gap-3 self-center">
                            <button
                              onClick={() => {
                                setCart((prev) =>
                                  prev
                                    .map((x) =>
                                      x.name === item.name &&
                                      x.size === (selectedSize[item.name] || "")
                                        ? { ...x, quantity: x.quantity - 1 }
                                        : x,
                                    )
                                    .filter((x) => x.quantity > 0),
                                );
                              }}
                              className="w-9 h-9 rounded-full bg-red-600 text-white text-xl"
                            >
                              -
                            </button>

                            <span className="font-bold text-lg">
                              {
                                cart.find(
                                  (x) =>
                                    x.name === item.name &&
                                    x.size === (selectedSize[item.name] || ""),
                                )?.quantity
                              }
                            </span>

                            <button
                              onClick={() => {
                                setCart((prev) =>
                                  prev.map((x) =>
                                    x.name === item.name &&
                                    x.size === (selectedSize[item.name] || "")
                                      ? { ...x, quantity: x.quantity + 1 }
                                      : x,
                                  ),
                                );
                              }}
                              className="w-9 h-9 rounded-full bg-red-600 text-white text-xl"
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              if (item.customization) {
                                openCustomization(item);
                              } else {
                                handleAddToCart(item);
                              }
                            }}
                            disabled={
                              item.price?.includes("S") &&
                              !selectedSize[item.name]
                            }
                            className={`self-center px-6 py-3 rounded-xl font-semibold transition ${
                              item.price?.includes("S") &&
                              !selectedSize[item.name]
                                ? "bg-gray-400 cursor-not-allowed text-white"
                                : "bg-red-600 hover:bg-red-700 text-white"
                            }`}
                          >
                            ADD
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center text-gray-500 py-12">
                    No items found.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CustomizationModal
        showCustomize={showCustomize}
        setShowCustomize={setShowCustomize}
        selectedItem={selectedItem}
        customizationData={customizationData}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
}
