import logo from "../assets/mainlogo.gif";

const navItems = [
  "Home",
  "About Us",
  "Domestic",
  "Place",
  "Package",
  "Contact Us",
];
const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[1020] w-full flex items-center justify-start px-4 py-2 font-normal bg-[linear-gradient(180deg,_#26537f_0%,_white_100%)] text-white h-20">
      {/* Logo */}
      <div className="flex-shrink-0 mr-4 overflow-visible relative">
        <img
          src={logo}
          alt="logo"
          className="h-30 w-auto relative bottom-[-39px] rounded-full object-cover ml-5"
        />
      </div>

      {/* Centered Nav Items */}
      <div className="flex-1 flex justify-center">
        <ul className="flex items-center space-x-20 text-lg font-bold">
          {navItems.map((item) => (
            <li key={item} className="hover:text-blue-600 cursor-pointer">
              {item}
            </li>
          ))}
          <li className="hover:bg-blue-600 hover:text-white bg-blue-500 text-white px-4 py-2 rounded cursor-pointer transition">
            Pay now
          </li>
        </ul>
      </div>

      {/* Spacer to balance layout */}
      <div className="w-12" />
    </nav>
  );
};

export default Navbar;
