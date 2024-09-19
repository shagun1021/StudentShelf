import React, { useState } from "react";
import './Home.css';
import Starbtn from "./Starbtn";
import { NavLink } from "react-router-dom";
import user from './user.png'
const HomeForm = ({ mode }) => {
  const [btn,showBtn]=useState(false);
  const [photo,setPhoto]=useState("");
  const [age,setAge]=useState('');

  const ageCalculate=(e)=>{
    let db = e.target.value;
    const a = new Date();
    const year = a.getFullYear();
    const b = new Date(db);
    const Syear = b.getFullYear();
    setAge(year - Syear);
    // handleState("age", year - Syear);


  }

  const handleBtn=()=>{
    showBtn(!btn);
  }
  return (
    <div className='w-1/2'>
      <div>
        <form className={`border-2 bg-white rounded-t-3xl w-full p-8 ${mode ? 'border-white' : 'border-black'}`}>
    
          <table className='w-full'>
            <thead>
              <tr className="flex">
                <img src={user} alt="user logo" className="w-10 h-9" />
                <th className="text-pink-600 pb-6 text-2xl flex">
                  <h2 className="mt-1 ml-2">Your Personal Details</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    className="border-2 p-2 rounded-lg border-black"
                    type="text"
                    name="name"
                    placeholder="First Name"
                    size={37}
                  />
                </td>
                <td >
                  <input
                    className="border-2 p-2 w-[330px] ml-3 rounded-lg border-black"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="radio" name="gender" className="ml-5" />
                  Male
                  <input
                    type="radio"
                    name="gender"
                    className="ml-20"
                  /> Female{" "}
                </td>
                <td className="p-2 ">
                  <input
                    type="text"
                    placeholder="Age"
                    disabled
                    value={age}
                    className="p-2 border-t-2 ml-1 border-black rounded-l-xl border-l-2 border-b-2 bg-white"
                  />
                  <input
                    type="date"
                    className="p-2 focus:outline-none text-sm h-[42.1px] border-t-2 border-black border-r bg-gray-100 rounded-r-xl border-b"
                    style={{ borderBottom: "1px solid black" }}
                    onChange={ageCalculate}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                 
                    className="border-2 p-2 mb-2 rounded-lg w-[324px] border-black"
                    type="number"
                    maxLength={10}
                    placeholder="Phone Number"
                  />
                </td>
                <td>
                  <input
                    size={38}
                    className="border-2 p-2 mb-2  ml-3 rounded-lg border-black"
                    type="email"
                    placeholder="Email.@gmail.com"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="border-2 p-2 rounded-lg border-black"
                    type="text"
                    placeholder="City"
                    size={37}
                  />
                </td>
                <td>
                  <input
                    size={38}
                    className="border-2 p-2  ml-3 rounded-lg border-black"
                    type="text"
                    placeholder="State"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    size={37}
                    className="border-2 p-2 rounded-lg border-black"
                    type="text"
                    placeholder="Pin Code"
                  />
                </td>
                <td className="p-2 flex">
                  <input
                    size={24}
                    type="text"
                    disabled
                    className="p-2 border-t-2 border-black border-l-2 rounded-l-xl border-b-2 bg-white"
                    placeholder="Your Photo"
                    value={photo}
                    
                  />
                  <input
                    type="file"
                    className="p-1 focus:outline-none w-28   border-t-2 border-black border-r-2 border-b-2 mr-12 rounded-r-xl text-white"
                    onChange={(e)=>setPhoto(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      <div className='w-full h-28 text-white grid place-content-center bg-pink-700 rounded-b-3xl '>
        <div className="flex items-center gap-4">
          <input type="checkbox" onClick={handleBtn}/>I certify that all details entered in this form are true and belong to me 
          {btn && 
          <NavLink to="edu"><Starbtn name="next" /></NavLink>
}
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
