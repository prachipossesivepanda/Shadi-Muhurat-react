import React from 'react'
import Genuine from "../../assets/images/Genuine.svg";
import laks from "../../assets/images/laks.svg";
import Most from "../../assets/images/Most.svg";
const Wedding = () => {
  return (
    <div className="w-[65vw] h-[65vw] flex-center ml-[16vw]">
      <div className="grid grid-cols-3 gap-4 p-4 max-w-md mx-auto">
      <img src={Genuine} alt="Image 1" className="w-full h-auto rounded-lg shadow-md" />
      <img src={laks} alt="Image 2" className="w-full h-auto rounded-lg shadow-md" />
      <img src={Most} alt="Image 3" className="w-full h-auto rounded-lg shadow-md" />
    </div>
    </div>
  );
}

export default Wedding
