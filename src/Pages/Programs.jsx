import { CgGym } from "react-icons/cg";
import { MdSportsGymnastics } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Programs = () => {
  return (
    <div className=' py-40 w-screen bg-gray-800'>
      <div className='text-4xl text-white gap-5 flex justify-around'>
        <h1 className=' mt-20 font-semibold italic'>EXPLORE OUR</h1>
        <h1 className=' mt-20 gap-8 font-bold italic'> PROGRAMS</h1>
        <h1 className='mt-20 font-semibold italic'> TO SHAPE YOU</h1>
      </div>





      <div className='flex justify-around mt-16'>

      <div className=' hover:bg-gradient-to-r from-cyan-500 to-blue-500   ml-20 gap-6 w-64 h-64 bg-orange-500'>
        <CgGym className='text-white   w-20 h-20 mx-4 my-4'/>
        <h4 className='text-white font-semibold mx-4 my-2'>Strength Training</h4>
        <p className='text-white mx-4 my-2'>In this  program, you are trained to improve your strength through many exercises</p>
        <button className='flex text-white mx-4  '>Join Now <FaArrowRight className='mt-1 ml-1'/></button>
       </div>

       <div className=' hover:bg-gradient-to-r from-cyan-500 to-blue-500   gap-6 w-64 h-64 bg-orange-500'>
        < MdSportsGymnastics className='text-white  w-20 h-20 mx-4 my-4'/>
        <h4 className='text-white font-semibold mx-4 my-2'>Strength Training</h4>
        <p className='text-white mx-4 my-2'>In this  program, you are trained to improve your strength through many exercises</p>
        <button className='flex text-white mx-4 '>Join Now <FaArrowRight className='mt-1 ml-1'/></button>
       </div>

       <div className=' hover:bg-gradient-to-r from-cyan-500 to-blue-500    gap-6 w-64 h-64 bg-orange-500'>
        <FaFire className=' text-white  w-20 h-20 mx-4 my-4'/>
        <h4 className='text-white font-semibold mx-4 my-2'>Strength Training</h4>
        <p className='text-white mx-4 my-2'>In this  program, you are trained to improve your strength through many exercises</p>
        <button className='flex text-white mx-4 '>Join Now <FaArrowRight className='mt-1 ml-1'/></button>
       </div>

       <div className=' hover:bg-gradient-to-r from-cyan-500 to-blue-500  mr-20 gap-6 w-64 h-64 bg-orange-500'>
        <FaHeartbeat className=' text-white  w-20 h-20 mx-4 my-4'/>
        <h4 className='text-white font-semibold mx-4 my-2'>Strength Training</h4>
        <p className='text-white mx-4 my-2'>In this  program, you are trained to improve your strength through many exercises</p>
        <button className='flex text-white mx-4 '>Join Now <FaArrowRight className='mt-1 ml-1'/></button>
       </div>
       
      </div>
      


      
    </div>
  )
}

export default Programs