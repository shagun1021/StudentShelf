import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPlus,
  faAdd,
  faBook,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";
const Nav = ({ handleMode }) => {
  return (
    <>
      <nav className="bg-pink-600 text-white tracking-widest  gap-12 flex justify-end h-[4.5rem] items-center w-screen pr-12 underline-offset-4">
        <li className="list-none hover:border-b-4 cursor-pointer border-dotted border-white ">
          You <FontAwesomeIcon icon={faUser} />
        </li>
        <li className="list-none hover:border-b-4 cursor-pointer border-dotted border-white">
          All Student's <FontAwesomeIcon icon={faBook} />
        </li>
        <li className="list-none hover:border-b-4 cursor-pointer border-dotted border-white">
          Add Student <FontAwesomeIcon icon={faAdd} />
        </li>
        <div className=" rounded-2xl flex justify-between items-center bg-white  w-58 h-8  text-black">
          <input
            className=" h-8 w-50 rounded-2xl focus:outline-none p-3"
            type="text"
            placeholder="search student ..."
          />{" "}
          <FontAwesomeIcon icon={faSearch} className="mr-3" />
        </div>

        {/* btn  */}

        <label
          class="relative inline-flex items-center cursor-pointer"
          onChange={handleMode}
        >
          <input class="sr-only peer" value="" type="checkbox" />
          <div class="w-12 h-8 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-sm shadow-gray-400 peer-checked:shadow-sm peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-6 after:h-6 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
        </label>

        {/* btn close */}
      </nav>
    </>
  );
};

export default Nav;
