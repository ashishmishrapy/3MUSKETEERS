import { Link, NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=" w-full text-gray-300 flex flex-col z-10 items-center py-5 bg-transparent sticky backdrop-blur-2xl top-0 px-5 md:px-10">
      <div className="flex justify-between w-full">
        <h1 className="tracking-wide font-light text-xl">
          THE THREE MUSKETEERS
        </h1>
        <nav>
          <button className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>
            <CiMenuFries />
          </button>
          <ul className="lg:flex hidden gap-7">
            <li><NavLink to="/" className={({isActive})=> isActive ? "text-amber-800 font-semibold" : ""}>Home</NavLink></li>
            <li><NavLink to="/music" className={({isActive})=> isActive ? "text-amber-800 font-semibold" : ""}>Music</NavLink></li>
            <li><NavLink to="/about" className={({isActive})=> isActive ? "text-amber-800 font-semibold" : ""}>About</NavLink></li>
            <li><NavLink to="/contact" className={({isActive})=> isActive ? "text-amber-800 font-semibold" : ""}>Contact</NavLink></li>
            
          </ul>
        </nav>
      </div>
      <nav>
         <ul className={`h-[90vh] gap-7 flex-col items-center text-xl text-center justify-center ${showMenu ? "flex" : "hidden"} `}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/music">Music</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
      </nav>
    </div>
  );
};

export default Navbar;
