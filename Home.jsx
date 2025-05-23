import React from "react";

const HomePage = () => {
  return (
    <div className="bg-[#f8edd4] min-h-screen flex flex-col">
      <header className="relative p-4">
        <img
          id="logo"
          src="logo.jpg"
          alt="Burger World Logo"
          className="absolute top-2.5 left-2.5 w-[170px] h-[170px]"
        />
        <nav className="mt-[40px] flex flex-wrap justify-center gap-5 items-center">
          {[
            { label: "Home", href: "Home.html" },
            { label: "Menu", href: "menu.html" },
            { label: "Service", href: "service.html" },
            { label: "Contact & Info", href: "contact&info.html" },
          ].map(({ label, href }) => (
            <a key={label} href={href}>
              <button
                className="relative z-10 overflow-hidden rounded-[10px] bg-[#382b17] px-6 py-3 text-[20px] font-bold text-[#e39a16] 
                  hover:text-[#382b17] transition-colors duration-500"
              >
                <span
                  className="absolute left-[-20%] top-0 bottom-0 right-[-20%] bg-[#e39a16] 
                  transform -skew-x-[45deg] scale-x-0 transition-transform duration-500
                  hover:scale-x-100 -z-10"
                  aria-hidden="true"
                />
                {label}
              </button>
            </a>
          ))}
        </nav>
      </header>

      <main className="flex-grow max-w-xl mx-auto p-8 bg-[#ffd271] rounded-lg shadow-md mt-12 text-[#333] text-lg leading-relaxed">
        <h2 className="text-[#381904] mb-4 text-center text-2xl font-semibold">
          Welcome to Burger World – Casablanca's New Flavor Destination!
        </h2>
        <p>
          We’re excited to announce the grand opening of{" "}
          <strong>Burger World</strong> in the heart of <strong>Casablanca</strong>! 🍔
        </p>
        <p>
          Discover our delicious handcrafted burgers made with fresh ingredients,
          unique sauces, and unbeatable taste.
        </p>
        <p className="bg-[#ffee07] border-l-4 border-[#ff9800] font-bold p-2 my-5">
          🎉 <strong>Opening Promotion:</strong> Get a free drink with every burger
          for a limited time!
        </p>
        <p>
          Come taste the difference. Fast service, cozy space, and flavors that bring
          people together.
        </p>
        <p className="text-center font-bold mt-4">
          Visit us today and join the Burger World family!
        </p>

        <div className="flex justify-center mt-6">
          <a
            href="menu.html"
            className="menu-btn inline-flex items-center justify-center rounded-lg bg-[#ff6600] px-8 py-4 text-white text-2xl font-bold
              shadow-md transition-transform duration-300 hover:bg-[#e65c00] hover:scale-105 hover:shadow-lg"
          >
            Go to the Menu
          </a>
        </div>
      </main>

      <footer
        id="footer"
        className="bg-[#5e5c5a] rounded-lg w-full mt-12 p-8 shadow-md text-white text-lg text-center"
      >
        <p>© 2025 Burger World | Mentions légales | Politique de confidentialité</p>
      </footer>
    </div>
  );
};

export default HomePage;
