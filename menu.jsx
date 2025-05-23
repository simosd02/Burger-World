import React, { useState, useEffect } from "react";

const BURGERS = [
  {
    name: "Classic Burger",
    ingredients: "Beef patty, cheddar cheese, lettuce, tomato, pickles, house sauce",
    price: 45,
    img: "/classique.jpg",
  },
  {
    name: "Crispy Chicken Burger",
    ingredients: "Fried chicken, mayo, lettuce, pickles, spicy sauce",
    price: 42,
    img: "/chicken.jpg",
  },
  {
    name: "Cheese Lover",
    ingredients: "Double cheese, beef patty, caramelized onions, ketchup",
    price: 48,
    img: "/cheese.jpg",
  },
  {
    name: "Veggie Burger",
    ingredients: "Grilled veggies, lettuce, tomato, vegan sauce",
    price: 40,
    img: "/veggie.jpg",
  },
];

const DELIVERY_FEE = 10;

export default function BurgerMenu() {
  const [selectedBurgerIndex, setSelectedBurgerIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const selectedBurger = BURGERS[selectedBurgerIndex];
  const subtotal = selectedBurger.price * quantity;
  const total = subtotal + DELIVERY_FEE;

  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    // reset quantity when burger changes
    setQuantity(1);
  }, [selectedBurgerIndex]);

  function handleSendOrder() {
    setOrderList([{ name: selectedBurger.name, quantity }]);
    setShowAlert(true);
  }

  return (
    <div className="min-h-screen flex flex-col bg-yellow-100 font-sans">
      {/* Header */}
      <header className="relative p-4 bg-yellow-50 flex flex-col items-center">
        <img
          id="Logo"
          src="/logo.jpg"
          alt="Burger World Logo"
          className="absolute top-2 left-2 w-40 h-40 object-contain"
        />
        <nav className="mt-20 flex flex-wrap justify-center gap-5">
          <a href="Home.html">
            <button className="btn-style">Home</button>
          </a>
          <a href="menu.html">
            <button className="btn-style">Menu</button>
          </a>
          <a href="service.html">
            <button className="btn-style">Service</button>
          </a>
          <a href="contact&info.html">
            <button className="btn-style">Contact & Info</button>
          </a>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-grow p-6 max-w-6xl mx-auto">
        <h1 className="text-center text-orange-700 text-5xl font-extrabold mb-10 relative inline-block pb-3 shadow-[2px_2px_5px_rgba(179,71,0,0.3)]">
          Our Burger Menu
          <span className="block w-20 h-1 bg-orange-500 rounded mt-2 mx-auto"></span>
        </h1>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {BURGERS.map(({ name, ingredients, price, img }, i) => (
            <div
              key={name}
              className="burger-card bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedBurgerIndex(i)}
              aria-selected={i === selectedBurgerIndex}
              tabIndex={0}
            >
              <img
                src={img}
                alt={name}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                <p className="text-sm text-gray-600 mb-2">{ingredients}</p>
                <p className="text-orange-600 font-bold text-lg">{price} MAD</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Form */}
        <div className="order-form max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-center text-orange-700 text-3xl font-bold mb-6">
            Order Form
          </h2>

          <div className="form-group mb-5">
            <label htmlFor="burger-select" className="block mb-2 font-semibold">
              Choose your burger:
            </label>
            <select
              id="burger-select"
              value={selectedBurgerIndex}
              onChange={(e) => setSelectedBurgerIndex(parseInt(e.target.value))}
              className="w-4/5 p-3 border border-gray-300 rounded-md"
            >
              {BURGERS.map(({ name, price }, i) => (
                <option key={name} value={i}>
                  {name} - {price} MAD
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-5">
            <label htmlFor="quantity" className="block mb-2 font-semibold">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-4/5 p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="total font-bold text-lg text-center mb-4">
            Total: {total} MAD (including delivery fee of {DELIVERY_FEE} MAD)
          </div>

          <ul className="order-list mb-4 list-disc list-inside text-center text-gray-700">
            {orderList.map(({ name, quantity }, i) => (
              <li key={i}>
                {name} - Quantity: {quantity}
              </li>
            ))}
          </ul>

          <button
            onClick={handleSendOrder}
            className="send-order-btn w-full py-3 bg-yellow-900 text-yellow-400 font-bold rounded-md hover:bg-yellow-400 hover:text-yellow-900 transition"
          >
            Send Order
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer
        id="footer"
        className="bg-gray-700 rounded-xl w-full p-8 text-lg text-white text-center shadow-lg"
      >
        <p>© 2025 Burger World | Mentions légales | Politique de confidentialité</p>
      </footer>

      {/* Custom Alert Modal */}
      {showAlert && (
        <div className="custom-alert fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="alert-content bg-white p-10 rounded-xl max-w-md shadow-lg text-center">
            <h3 className="text-orange-700 text-2xl font-bold mb-4">Order Placed!</h3>
            <p className="mb-6 whitespace-pre-line">
              {`${orderList[0].name} - Quantity: ${orderList[0].quantity}\nTotal: ${total} MAD (including delivery fee of ${DELIVERY_FEE} MAD)`}
            </p>
            <button
              onClick={() => setShowAlert(false)}
              className="px-6 py-3 bg-yellow-900 text-yellow-400 rounded-lg font-semibold hover:bg-yellow-400 hover:text-yellow-900 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Tailwind utility classes for buttons (add this in your global CSS or a Tailwind component file):
/*
.btn-style {
  @apply w-32 h-14 bg-yellow-900 text-yellow-400 rounded-lg text-xl font-bold relative overflow-hidden cursor-pointer;
}

.btn-style:hover {
  @apply text-yellow-900;
}

.btn-style::after {
  content: "";
  @apply absolute left-[-20%] right-[-20%] top-0 bottom-0 bg-yellow-400 -skew-x-12 scale-x-0 transition-transform duration-500 z-[-1];
}

.btn-style:hover::after {
  @apply scale-x-100;
}
*/
