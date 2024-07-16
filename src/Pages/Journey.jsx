import React from "react";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { LuCrown } from "react-icons/lu";
import { CgGym } from "react-icons/cg";
import { FaDollarSign } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Journey = () => {
  return (
    <div className="bg-gradient-to-t from-gray-800 from-10% via-gray-700 via-40% to-gray-600 to-90%">
      <div className="flex justify-around mx-40 py-12 ">
        <h1 className="font-bold text-white text-5xl mx-4">READY TO START</h1>
        <h1 className="font-bold text-white text-5xl mx-4">YOUR JOURNEY</h1>
        <h1 className="font-bold text-white text-5xl mx-4">NOW WITH US</h1>
      </div>

      <div className="flex justify-around mx-72 gap-4  pb-40">

        {/* first box */}
        <div className=" bg-gray-800 mt-20 mb-8  px-4 pt-4 pb-1">
          <FaHeartCirclePlus className="text-orange-500 my-2 mx-2 w-10 h-10" />
          <h4 className="text-white font-semibold my-2 mx-2 ">BASIC PLAN</h4>
          <div className="flex">
          <FaDollarSign className="text-white ml-2 my-2 w-10 h-10" />
            <h1 className="text-white font-bold text-4xl my-2 ">
             25
          </h1>
          </div>
          
          <div>
            <ul className="">
            <li className="text-white flex mx-1 mt-2 "><FaRegCheckCircle className="w-6 h-6 mx-1 mt-2"/><h1 className="mt-2">2 hours of exercises</h1></li>
            <li className="text-white flex mx-1 mt-2"><FaRegCheckCircle className="w-6 h-6 mx-1 mt-2"/><h1 className="mt-2">Free consultation to Coaches</h1></li>
            <li className="text-white flex mx-1 mt-2 "><FaRegCheckCircle className="w-6 h-6 mx-1 mt-2"/><h1 className="mt-2">Access to the Community</h1></li>
            </ul>
          </div>
          <p className="text-white flex mt-2 mx-2">See more benefits<FaArrowRight className="mt-1  mx-1"/></p>
          <button className="text-black bg-white px-10 py-1 font-bold mt-2 mx-2">Join now</button>
        </div>



          {/* second box */}
          <div className=" bg-gradient-to-t from-orange-600 from-10% via-oramge-700 via-40% to-orange-700 to-90% mt-12 px-8 pt-8 pb-4">
          <LuCrown className="text-white my-4 mx-2 w-10 h-10" />
          <h4 className="text-white font-semibold my-2 mx-2 ">PREMIUM PLAN</h4>
          <div className="flex">
          <FaDollarSign className="text-white ml-2 my-4 w-14 h-14" />
            <h1 className="text-white font-bold text-6xl my-3 ">
             30
          </h1>
          </div>
          
          <div>
            <ul className="">
            <li className="text-white flex mx-1 mt-3 "><FaRegCheckCircle className="w-6 h-6 mx-1 mt-2"/><h1 className="mt-2">5 hours of exercises</h1></li>
            <li className="text-white flex mx-1 mt-3"><FaRegCheckCircle className="w-6 h-6 mx-1 mt-2"/><h1 className="mt-2">Free consultation to Coaches</h1></li>
            <li className="text-white flex mx-1 mt-3 "><FaRegCheckCircle className="w-6 h-6 mx-1 mt-2"/><h1 className="mt-2">Access to Minibar</h1></li>
            </ul>
          </div>
          <p className="text-white flex mt-5 mx-2">See more benefits<FaArrowRight className="mt-1  mx-1"/></p>
          <button className="text-orange-500 bg-white px-24 py-2 font-bold mt-4 mx-2">Join now</button>
        </div>



        {/* third box */}
        <div className=" bg-gray-800 mt-20 mb-8  px-4 pt-4 pb-1">
          <CgGym className="text-orange-500 my-2 mx-2 w-10 h-10" />
          <h4 className="text-white font-semibold my-2 mx-2 ">PRO PLAN</h4>
          <div className="flex">
          <FaDollarSign className="text-white ml-2 my-2 w-10 h-10" />
            <h1 className="text-white font-bold text-4xl my-2 ">
             45
          </h1>
          </div>
          
          <div>
            <ul className="">
            <li className="text-white flex mx-1 mt-2 "><FaRegCheckCircle className="w-6 h-6 mx-1 mt-2"/><h1 className="mt-2">8 hours of exercises</h1></li>
            <li className="text-white flex mx-1 mt-2"><FaRegCheckCircle className="w-6 h-6 mx-1 mt-2"/><h1 className="mt-2">Consultation of Private Coach</h1></li>
            <li className="text-white flex mx-1 mt-2 "><FaRegCheckCircle className="w-6 h-6 mx-1 mt-2"/><h1 className="mt-2">Free Fitness Merchandise</h1></li>
            </ul>
          </div>
          <p className="text-white flex mt-2 mx-2">See more benefits<FaArrowRight className="mt-1  mx-1"/></p>
          <button className="text-black bg-white px-10 py-1 font-bold mt-2 mx-2">Join now</button>
        </div>


        



        
        
      </div>
    </div>
  );
};

export default Journey;
