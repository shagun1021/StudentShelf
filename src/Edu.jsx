import React, { useState } from 'react'
import user from './user.png'
import Starbtn from './Starbtn'
import git from './github.png'
import linkedin from './linkedin.png'
import { NavLink } from 'react-router-dom'
import Skill from './Skills'
const Edu = () => {
  const [sem,setSem]=useState(0);
  const [cgp,setCgp]=useState(6);
  const [btn,showBtn]=useState(false);
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  
  const addSkill = () => {
    if (skill) {
      setSkills([...skills, skill]);
      handleState("skills", [...skills, skill]);
      setSkill("");
    }
  };
  const handleBtn=()=>{
    showBtn(!btn);
  }

  const handleSem=(e)=>{
    const course=e.target.value;
    setSem( course==='MCA' ? 4 : course==='Btech'? 8: 0)

  }
  return (
    <div className="w-1/2">
          <form
            action=""
            className="border-2 bg-white rounded-t-3xl w-full p-8"
            
          >
            <table>
              <thead>
                <tr>
                  <th className="text-pink-600 pb-6 text-2xl flex">
                    <img className="w-10" src={user} alt="" />
                    <h2 className="mt-1 ml-2">Educational Details</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td >
                    <select
                      className="border-2 p-2 w-80 mb-2 mr-3 rounded-lg border-black"
                    onChange={handleSem}
                      
                    >
                      <option value="" disabled selected>
                        Course
                      </option>
                      <option value="MCA">MCA</option>
                      <option value="Btech">Btech</option>
                    </select>
                  </td>
                  <td >
                  {sem === 8 ? (
        <select className="border-2 p-2 w-80 mb-2 rounded-lg border-black">
          <option value="" selected disabled>
            Semester
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      ) : sem === 4 ? (
        <select className="border-2 p-2  mb-2 w-80 rounded-lg border-black">
          <option value="" selected disabled>
            Semester
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      ) : (
        <select disabled className="border-2 mb-2 p-2 w-80 rounded-lg border-black">
          <option value="" selected disabled>
            Semester
          </option>
        </select>
      )}
                  
                 
                 
                   
                      
                      
                     
                  </td>
                </tr>
              
                <tr >
                  <td >
                    <input
                      size={36}
                      className="border-2  p-2 rounded-lg border-black"
                      type="text"
                      placeholder="Institution"
                    
                    />
                  </td>
                  <td rowSpan={5} className="border-2  h-auto border-pink-600">
                  <div className="w-full h-[160px]">
                      <div className="flex mx-2 ">
                        <input
                          type="text"
                          onChange={(e) => setSkill(e.target.value)}
                          value={skill}
                          className="w-full rounded-l-2xl uppercase px-4 bg-slate-100 focus:outline-none"
                          placeholder="Skills"
                        />
                        <button
                          type="button"
                          className="border-2 btnn rounded-l-none rounded-r-2xl w-20 p-1"
                          onClick={addSkill}
                        >
                          Add
                        </button>
                      </div>
                      <div className="m-2 h-auto w-80 flex flex-wrap uppercase">
                        {skills.map((skill, index) => (
                          <Skill key={index} skill={skill} />
                        ))}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center mt-2 border-2  w-80 rounded-lg border-black">
                    <input
                      className="focus:outline-none text-md w-full p-1"
                      type="text"
                      placeholder="GitHub Link"
                     
                    />
                    <span className="mt-1 mr-2">
                      <img src={git} width={25} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="flex items-center border-2  mt-3 w-80 rounded-lg border-black">
                    <input
                      className="focus:outline-none text-md w-full p-1"
                      type="text"
                      placeholder="LinkedIn Link"
                      
                    />
                    <span className="mt-1 mr-2">
                      <img src={linkedin} width={25} alt="" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="flex ">
                      <label className="mt-4 mr-1 ml-1" e htmlFor=""
                       
                     >
                        CGP:
                      </label>
                      <input
                        className="border-2  max-w-96 mt-2 rounded-lg border-black"
                        type="range"
                        min={6}
                        max={10}
                        defaultValue={6}
                        onChange={(e)=>{
                          setCgp(e.target.value);
                        }}
                      
          
                        
                      />
                      <span className="mt-4 text-lg">{cgp}</span>
                      <input
                        type="Number"
                        placeholder="ID"
                        min={1}
                        className="border-2   max-w-[85px] ml-10 mt-2  p-2 rounded-lg border-black"
                      
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <button type="submit" className="hidden">
              Submit
            </button>
          </form>
          <div className="w-full h-28 text-white grid place-content-center bg-pink-700 rounded-b-3xl">
            <div className="flex">
              <div className='mr-6'>
                <Starbtn name="Prev" />
              </div>
              <div className="flex items-center">
                <input type="checkbox" onClick={handleBtn} /> <span className='pl-2'>I
                certify that all details entered in this form are true and
                belong to me </span>
               <div className='ml-6'>
                {btn &&
                <NavLink to='/final'>
                <Starbtn name="next" />
                </NavLink>}
                </div>
                 
              </div>
            </div>
          </div>
        </div>
  )
}

export default Edu
