import React from 'react';

const Skills = (props) => {
  return (
    <span className='border-2  m-1 cursor-pointer border-orange-400 hover:scale-105 transition-transform scale-100 bg-pink-600 text-white w-auto h-auto p-2 rounded-full mx-1'>
      {props.skill}
    </span>
  );
};

export default Skills;
