const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(180deg,_#26537f_0%,_white_100%)] text-white px-8 py-12 mt-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">
            Jingle Holiday Bazar
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li>Travel with us from here to anywhere...</li>
            <li>Phone: +91 8778787878</li>
            <li>Email: example@gmail.com</li>
            <li>24/7 Dedicated Customer Support</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2 text-gray-200">
            <li>Home</li>
            <li>About Us</li>
            <li>Blog List</li>
            <li>Destinations</li>
            <li>Hotels</li>
            <li>Gallery</li>
          </ul>
        </div>

        {/* Domestic Packages */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">
            Domestic Packages
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li>Uttarakhand</li>
            <li>Mumbai</li>
            <li>Ladakh</li>
            <li>Meghalaya</li>
            <li>North East India</li>
            <li>Rajasthan</li>
          </ul>
        </div>

        {/* International Packages */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">
            International Packages
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li>Maldives</li>
            <li>Singapore</li>
            <li>Switzerland</li>
            <li>Saudi Arabia</li>
            <li>Thailand</li>
            <li>Dubai</li>
          </ul>
        </div>

        {/* Yatra */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Yatra</h2>
          <ul className="space-y-2 text-gray-200">
            <li>Mata Vaishno</li>
            <li>Kedarnath</li>
            <li>Badrinath</li>
            <li>Char Dham Yatra</li>
            <li>Ramayan Yatra</li>
            <li>9 Devi Yatra</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 border-t border-black/20 pt-4 text-center text-black text-xs">
        © {new Date().getFullYear()} Jingle Holiday Bazar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
