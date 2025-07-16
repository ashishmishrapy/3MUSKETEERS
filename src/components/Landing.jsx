import SocialLinks from "./social-links/SocialLinks";
import { IoIosMusicalNote } from "react-icons/io";

const Landing = () => {
  return (
    <div className='h-screen w-full bg-[url("/img/bgpng.png")] bg-cover top-0 absolute text-gray-500 font-light bg-right md:bg-left lg:bg-center'>
      <div>
        <p className="text-gray-300 font-light absolute hover:scale-105 duration-300 selection:bg-amber-700 bottom-50 left-10">
          Alfred Drey
        </p>
        <p className="text-gray-300 font-light absolute hover:scale-105 duration-300 selection:bg-amber-700 top-1/3 left-1/2 md:left-1/3 hidden md:block">
          Tony Stark
        </p>
        <p className="text-gray-300 font-light absolute hover:scale-105 duration-300 selection:bg-amber-700 top-1/2 right-70 hidden lg:block">
          Captain Jobs
        </p>
      </div>
      <div className="absolute top-60 bg-black rounded-l-xl p-3 right-0">
        <SocialLinks />
      </div>
      <div className=" shadow-2xl shadow-black p-5 absolute bottom-0 right-0">
        <h2 className="text-white font-semibold mb-2">
          NEW ALBUM - PARO BY 3 MUSKETEERS - OUT NOW
        </h2>
        <button
          className="flex items-center font-medium text-white bg-amber-800 tracking-wider px-4 rounded py-2"
        >
          <IoIosMusicalNote /> Listen
        </button>
      </div>
    </div>
  );
};

export default Landing;
