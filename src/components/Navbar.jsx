import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Link to={"/"}>
          <img src={appleImg} alt="apple" width={14} height={18} />
        </Link>
        <div className="flex justify-center flex-1 max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav.navName}
              className="px-5 text-sm font-semibold cursor-pointer text-gray hover:text-white transition-all"
            >
              <Link to={nav.url}>{nav.navName}</Link>
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={14} height={18} />
          <img src={bagImg} alt="search" width={14} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
