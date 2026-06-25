import { useState } from "react";
import {
  Coffee,
  UtensilsCrossed,
  Sandwich,
  Beef,
  Soup,
  Pizza,
  GlassWater,
  CookingPot,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Hot Drinks");

  const categories = [
    {
      name: "Hot Drinks",
      icon: <Coffee size={18} />,
    },
    {
      name: "Iced Drinks",
      icon: <GlassWater size={18} />,
    },
    {
      name: "Breakfasts",
      icon: <UtensilsCrossed size={18} />,
    },
    {
      name: "Burger & Wraps",
      icon: <Beef size={18} />,
    },
    {
      name: "Sandwiches & Toasted Classics",
      icon: <Sandwich size={18} />,
    },
    { name: "Hot Plates", icon: <CookingPot size={18} /> },
    {
      name: "Bowls & Curries",
      icon: <Soup size={18} />,
    },
    {
      name: "Pub Favourites",
      icon: <Pizza size={18} />,
    },
  ];

  const menu = {
    "Hot Drinks": [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
        name: "Latte",
        desc: "Fresh espresso with silky steamed milk.",
        price: "$5.50",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600",
        name: "Cappuccino",
        desc: "Espresso with creamy milk foam.",
        price: "$5.50",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600",
        name: "Mocha",
        desc: "Chocolate coffee with steamed milk.",
        price: "$6.30",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600",
        name: "Flat White",
        desc: "Smooth espresso coffee.",
        price: "$5.50",
      },
      {
        id: 5,
        image:
          "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600",
        name: "Long Black",
        desc: "Double espresso with hot water.",
        price: "$5.00",
      },
    ],
    "Iced Drinks": [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600",
        name: "Iced Latte",
        desc: "Smooth espresso served over ice with chilled milk.",
        price: "$6.50",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
        name: "Iced Mocha",
        desc: "Rich chocolate, espresso and chilled milk over ice.",
        price: "$7.00",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600",
        name: "Iced Matcha Latte",
        desc: "Premium Japanese matcha blended with cold milk.",
        price: "$7.50",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
        name: "Iced Strawberry Matcha",
        desc: "Refreshing strawberry puree layered with matcha and milk.",
        price: "$9.50",
      },
    ],
    Breakfasts: [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600",
        name: "Breakfast Bruschetta",
        desc: "Poached eggs, bacon, avocado & pesto.",
        price: "$18.90",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600",
        name: "Granola Acai Bowl",
        desc: "Granola topped with fresh fruits.",
        price: "$16.50",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=600",
        name: "Eggs Benedict",
        desc: "Poached eggs with hollandaise sauce.",
        price: "$16.90",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600",
        name: "Loaded Brekky Wrap",
        desc: "Bacon, hash brown & scrambled eggs.",
        price: "$15.00",
      },
    ],

    "Sandwiches & Toasted Classics": [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600",
        name: "Steak on Turkish",
        desc: "Grilled scotch fillet with cheese, tomato, beetroot, lettuce on Turkish bread.",
        price: "$21.90",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=600",
        name: "BLT Sandwich",
        desc: "Toasted Turkish with bacon, lettuce, tomato, cheese and mayo.",
        price: "$16.00",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=600",
        name: "BLAT Sandwich",
        desc: "Toasted Turkish with bacon, lettuce, avocado, tomato, cheese and mayo.",
        price: "$18.00",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=600",
        name: "Chicken Club Sandwich",
        desc: "Grilled chicken, lettuce, tomato, cheese and creamy mayo.",
        price: "$17.90",
      },
    ],

    "Hot Plates": [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1619895092538-128341789043?w=600",
        name: "Beef & Pork Lasagna",
        desc: "Lasagna sheets layered with beef, pork, diced tomato, creamy bechamel and cheese.",
        price: "$15.00",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600",
        name: "BBQ Pork Riblet Plate",
        desc: "BBQ pork riblets served with crispy chips and fresh salad.",
        price: "$13.50",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
        name: "Classic Lasagna",
        desc: "Rich layers of meat, tomato sauce and melted cheese served hot.",
        price: "$15.50",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
        name: "BBQ Mixed Plate",
        desc: "Grilled BBQ meat served with chips, salad and house-made sauce.",
        price: "$16.90",
      },
    ],

    "Bowls & Curries": [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
        name: "Buddha Bowl (Veg)",
        desc: "Grilled halloumi, hummus, sweet potato chips, rice, cucumber, spinach, avocado & lemon wedge.",
        price: "$17.90",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1604908177522-4027c1f2f3d4?w=600",
        name: "Butter Chicken",
        desc: "Tender grilled chicken simmered in rich creamy butter chicken curry served with rice.",
        price: "$17.50",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
        name: "Satay Chicken Bowl",
        desc: "Grilled chicken, satay sauce, fresh salad, jasmine rice and Kewpie mayo.",
        price: "$18.90",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=600",
        name: "Teriyaki Chicken Bowl",
        desc: "Grilled chicken with teriyaki sauce, fresh salad, jasmine rice and Kewpie mayo.",
        price: "$18.90",
      },
    ],

    "Pub Favourites": [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600",
        name: "Chicken Parmi",
        desc: "Panko fried chicken breast topped with Napoli sauce, melted cheese, served with chips and fresh salad.",
        price: "$17.00",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1579631542720-3a87824fff86?w=600",
        name: "Battered Fish & Chips",
        desc: "Crispy golden battered fish fillet served with chips, tartare sauce and lemon wedge.",
        price: "$14.90",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=600",
        name: "Loaded Chips & Gravy",
        desc: "Golden fries topped with rich gravy, melted cheese and crispy bacon.",
        price: "$15.00",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600",
        name: "Chef's Pub Combo",
        desc: "A delicious combination of crispy chicken, chips and house-made dipping sauce.",
        price: "$18.90",
      },
    ],

    "Burger & Wraps": [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
        name: "Grilled Chicken Burger",
        desc: "Chicken, cheese, lettuce & aioli.",
        price: "$18.90",
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
        name: "Cheese Burger",
        desc: "Double cheese beef burger.",
        price: "$15.00",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600",
        name: "Spicy Chicken Wrap",
        desc: "Jalapenos & spicy mayo.",
        price: "$18.90",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600",
        name: "Halloumi Burger",
        desc: "Grilled halloumi with tomato relish.",
        price: "$18.90",
      },
    ],
  };

  const products = menu[activeCategory] || [];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar starts here */}

        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-24">
          <h3 className="font-bold text-xl mb-6">Categories</h3>

          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl mb-3 transition ${
                activeCategory === cat.name
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 hover:bg-red-50"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product cards will start here in Part 2 */}

        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">{activeCategory}</h2>
              <p className="text-gray-500 mt-1">
                Freshly prepared with premium ingredients
              </p>
            </div>

            <Link to="/order-online">
              <button className="px-5 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition">
                View All
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-7">
            {products.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl duration-300 group"
              >
                {/* Image */}

                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-cover group-hover:scale-110 duration-500"
                  />

                  <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                    Bestseller
                  </span>

                  <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-red-600 hover:text-white duration-300">
                    ❤
                  </button>
                </div>

                {/* Content */}

                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold">{item.name}</h3>

                      <p className="text-gray-500 mt-2 leading-7">
                        {item.desc}
                      </p>
                    </div>

                    <span className="text-green-600 font-bold">★ 4.8</span>
                  </div>

                  <div className="flex justify-between items-center mt-8">
                    <h4 className="text-red-600 text-2xl font-bold">
                      {item.price}
                    </h4>

                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/order-online">
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-300 px-8 py-3 rounded-xl font-semibold">
                Explore Full Menu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
