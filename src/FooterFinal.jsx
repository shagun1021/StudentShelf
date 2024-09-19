import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterContactUs from "./FooterContractUs";
const FooterFinal = () => {
  return (
    <footer className="bg-gray-800  bottom-0  text-white py-4 ">
      <div className="flex justify-around   items-center px-8">
        <div className="w-96 flex justify-center ">
          <form action="" className="flex flex-col px-8 w-full shadow-md shadow-white bg-white rounded-3xl py-3 text-black justify-center gap-3">
            <div className="flex justify-center  mr-17 pt-3  ">           
               <label htmlFor="" className="text-lg">Contact Us</label> 
               </div>

            <input
              type="email"
              placeholder="your@gmail.com "
              className="  border-b-2 my-2 w-full py-1  border-b-pink-700 focus:outline-none px-3 text-black"
            />
            <input
              type="text"
              placeholder="message "
              className="w-full  border-b-pink-700 text-start -my-4 border-b-2 py-1  h-20 focus:outline-none px-3 text-black"
            />
           <button className="w-28 ml-[85px] p-1 text-white rounded-none bg-pink-700 mt-8 mb-2 ">Send</button>
</form>
            
      
        </div>

        <div className=" flex  flex-col gap-3 text-center  px-28">
          <h1 className=" font-bold text-2xl ">
            <span className="text-pink-500 "> - S</span>hagun 🩷
          </h1>
          <p className="text-start w-[500px] text-lg">
          In every moment of gratitude, there's a touch of magic. Thank you for your presence 💗
          </p>
         

          <h2 className="text-start   text-xl font-bold">let's Connect</h2>
         <FooterContactUs/>
          <div className="flex gap-4">
            
          </div>
        </div>
      </div>
    
    </footer>
  );
};

export default FooterFinal;
