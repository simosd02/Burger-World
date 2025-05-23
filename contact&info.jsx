import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-[#f8edd4] min-h-screen m-0 p-0">
      {/* Header */}
      <header className="relative p-2.5">
        <img id="logo" src="logo.jpg" alt="Logo" className="absolute top-2.5 left-2.5 w-[170px] h-[170px]" />
        <div className="container1 mt-10 flex gap-5 flex-wrap justify-center items-center align-center">
          <div><a href="Home.html" className="item"><button className="btn w-32 h-18 m-1 bg-[#382b17] text-[#e39a16] border-none rounded-[0.625em] text-xl font-bold cursor-pointer relative z-10 overflow-hidden hover:text-[#382b17]">Home</button></a></div>
          <div><a href="menu.html" className="item"><button className="btn w-32 h-18 m-1 bg-[#382b17] text-[#e39a16] border-none rounded-[0.625em] text-xl font-bold cursor-pointer relative z-10 overflow-hidden hover:text-[#382b17]">Menu</button></a></div>
          <div><a href="service.html" className="item"><button className="btn w-32 h-18 m-1 bg-[#382b17] text-[#e39a16] border-none rounded-[0.625em] text-xl font-bold cursor-pointer relative z-10 overflow-hidden hover:text-[#382b17]">Service</button></a></div>
          <div><a href="contact&info.html" className="item"><button className="btn w-32 h-18 m-1 bg-[#382b17] text-[#e39a16] border-none rounded-[0.625em] text-xl font-bold cursor-pointer relative z-10 overflow-hidden hover:text-[#382b17]">Contact & Info</button></a></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="intro bg-[#ffd271] rounded-xl max-w-[700px] mx-auto my-12 p-8 shadow-lg text-lg text-[#333] leading-relaxed">
        <div className="text-center">
          <div>
            <h5 className="menu-btn flex mt-5 py-3 px-6 bg-[#ff6600] text-[#381904] no-underline font-bold rounded-lg text-3xl transition-all duration-300 ease-in-out shadow-lg justify-center">Contact & Info</h5>
          </div>

          <div className="mt-6">
            <div>
              <p className="menu-btn1 flex py-3 px-6 bg-[#381904] text-[#ff6600] no-underline font-bold rounded-lg text-3xl transition-all duration-300 ease-in-out shadow-lg justify-center mt-2.5">Location</p>
              <img src="map.jpg" alt="Map" className="rounded-xl mt-4 w-full" />
            </div>

            <div className="mt-6">
              <p className="menu-btn1 flex py-3 px-6 bg-[#381904] text-[#ff6600] no-underline font-bold rounded-lg text-3xl transition-all duration-300 ease-in-out shadow-lg justify-center mt-2.5">For Calling</p>
              <p className="mt-4"><b>+212 6 87 60 93 58</b></p>
              <p className="mt-2"><b>+212 6 25 34 08 44</b></p>
            </div>

            <div className="mt-6">
              <p className="menu-btn1 flex py-3 px-6 bg-[#381904] text-[#ff6600] no-underline font-bold rounded-lg text-3xl transition-all duration-300 ease-in-out shadow-lg justify-center mt-2.5">For Texting</p>
              <p className="mt-4"><b>saad.agaraijjou@gmail.com</b></p>
            </div>

            <div className="mt-6">
              <p className="menu-btn1 flex py-3 px-6 bg-[#381904] text-[#ff6600] no-underline font-bold rounded-lg text-3xl transition-all duration-300 ease-in-out shadow-lg justify-center mt-2.5">Opening Hours</p>
              <p className="mt-4"><b>Everyday</b></p>
              <p className="mt-2">1:00 pm - 5:00 pm</p>
              <p className="mt-2">5:00 pm - 12:00 am</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div id="footer" className="bg-[#5e5c5a] rounded-xl w-full mx-auto my-12 p-8 shadow-lg text-lg text-white leading-relaxed text-center">
        <p>© 2025 Burger World | Mentions légales | Politique de confidentialité</p>
      </div>
    </div>
  );
};

export default ContactInfo;