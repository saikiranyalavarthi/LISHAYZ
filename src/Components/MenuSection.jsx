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
      name: "Sandwiches",
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

    "Sandwiches": [
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
  <section className="max-w-7xl mx-auto py-12 lg:py-16 px-4">
    <div className="max-w-7xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-10">
        <div className="inline-block bg-white border-2 border-black rounded-xl px-8 py-4 shadow-[4px_4px_0px_0px_red]">
          <h4 className="text-lg lg:text-xl font-extrabold uppercase">
            Our Menu
          </h4>
        </div>
      </div>

  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* Categories */}
        <div className="lg:bg-white lg:rounded-2xl lg:shadow-xl lg:p-6 lg:sticky lg:top-24 lg:h-fit">

          <h3 className="hidden lg:block text-xl font-bold mb-6">
            Categories
          </h3>

          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 scrollbar-hide">

            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex-shrink-0 lg:w-full flex items-center justify-center lg:justify-start gap-2 px-5 py-3 rounded-xl font-semibold transition cursor-pointer ${
                  activeCategory === cat.name
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 hover:bg-red-50"
                }`}
              >
                {cat.icon}
                <span className="whitespace-nowrap">{cat.name}</span>
              </button>
            ))}

          </div>
        </div>

        {/* Products */}
   <div className="lg:col-span-4">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

            <div>
              <h2 className="text-2xl lg:text-4xl font-bold">
                {activeCategory}
              </h2>

              <p className="text-gray-500 mt-2">
                Freshly prepared with premium ingredients
              </p>
            </div>

            <Link to="/order-online">
              <button className="w-full lg:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition cursor-pointer">
                View Full Menu
              </button>
            </Link>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-52 lg:h-60 object-cover group-hover:scale-110 duration-500"
                  />

                  <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                    Bestseller
                  </span>

                </div>

                <div className="p-5 lg:p-6">

                  <h3 className="text-xl lg:text-2xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 mt-3 leading-7 text-sm lg:text-base">
                    {item.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-6">

                    <h4 className="text-red-600 text-2xl font-bold">
                      {item.price}
                    </h4>

                    <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition cursor-pointer">
                      ADD
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

          <div className="mt-10 text-center">

            <Link to="/order-online">
              <button className="w-full sm:w-auto border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition px-8 py-3 rounded-xl font-semibold cursor-pointer">
                Explore Full Menu
              </button>
            </Link>

          </div>

        </div>

      </div>

    </div>
  </section>
)
}