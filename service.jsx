import React from 'react';

const ServicePage = () => {
  return (
    <div className="bg-[#f8edd4] min-h-screen font-sans">
      <header className="relative p-2.5">
        <img id="Logo" src="logo.jpg" alt="Logo" className="absolute top-2.5 left-2.5 w-[170px] h-[170px]" />
        <div className="container1 mt-10 flex gap-5 flex-wrap justify-center items-center">
          <div><a href="Home.html"><button className="btn w-32 h-18 m-1 bg-[#382b17] text-[#e39a16] border-none rounded-[0.625em] text-xl font-bold cursor-pointer relative z-10 overflow-hidden hover:text-[#382b17]">Home</button></a></div>
          <div><a href="menu.html"><button className="btn w-32 h-18 m-1 bg-[#382b17] text-[#e39a16] border-none rounded-[0.625em] text-xl font-bold cursor-pointer relative z-10 overflow-hidden hover:text-[#382b17]">Menu</button></a></div>
          <div><a href="service.html"><button className="btn w-32 h-18 m-1 bg-[#382b17] text-[#e39a16] border-none rounded-[0.625em] text-xl font-bold cursor-pointer relative z-10 overflow-hidden hover:text-[#382b17]">Service</button></a></div>
          <div><a href="contact&info.html"><button className="btn w-32 h-18 m-1 bg-[#382b17] text-[#e39a16] border-none rounded-[0.625em] text-xl font-bold cursor-pointer relative z-10 overflow-hidden hover:text-[#382b17]">Contact & Info</button></a></div>
        </div>
      </header>

      <main>
        <div className="section-book py-16 px-4 flex justify-center" id="book">
          <div className="section-book__container w-full max-w-[600px] bg-[#e39a16] rounded-2xl p-8 shadow-lg">
            <h2 className="section-book__h2 text-5xl mb-6 text-[#381904] text-center font-[Dancing Script]">Book A Table</h2>
            <form action="#" className="section-book__form flex flex-col items-center gap-4" id="form-book">
              <input name="full_name" type="text" className="section-book__input h-12 w-[85%] border border-[#222831] rounded pl-2.5 text-base" placeholder="Your Name" required />
              <input name="phone" type="text" className="section-book__input h-12 w-[85%] border border-[#222831] rounded pl-2.5 text-base" placeholder="Phone Number" required />
              <input name="email" type="email" className="section-book__input h-12 w-[85%] border border-[#222831] rounded pl-2.5 text-base" placeholder="Your Email" required />
              <select name="persons" className="section-book__input h-12 w-[85%] border border-[#222831] rounded pl-2.5 text-base" required>
                <option value="" disabled selected>How many people?</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <input type="date" className="section-book__input h-12 w-[85%] border border-[#222831] rounded pl-2.5 text-base" required />
              <input type="submit" value="CHECK AVAILABILITY" className="button py-2 px-6 bg-[#381904] border-none rounded-[45px] text-[#e39a16] text-xl cursor-pointer mt-5" id="submit-btn" />
            </form>
          </div>
        </div>
      </main>

      <footer id="footer" className="bg-[#5e5c5a] rounded-xl w-full p-8 shadow-lg text-lg text-white leading-relaxed text-center mt-16">
        <p>© 2025 Burger World | Mentions légales | Politique de confidentialité</p>
      </footer>
    </div>
  );
};

export default ServicePage;