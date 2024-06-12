import React from "react";

// ---- Importing React Icons [down arrow , menu , search] -----
import { BiChevronDown, BiMenu, BiSearchAlt } from "react-icons/bi";

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold"> It All Starts Here </h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Banglore <BiChevronDown />
          </span>
        </div>

        <div className="w-8 h-8">
          <button> Use App </button>
          <BiSearchAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
      <BiSearchAlt />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
      />
    </div>
  );
}

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img src="" alt="logo" className="w-full h-full" />
          </div>

          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearchAlt />
            <input
              type="search"
              className="w-full bg-transparent border-none focus: outline-none"
              placeholder="Search for movies , events , plays , sports and activities"
            />
          </div>
        </div>
      </div>
    </>
  );
}

const NavigationBar = () => {
  return <div>Navigation Bar</div>;
};

export default NavigationBar;
