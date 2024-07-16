import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoLogoApple } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

const Choose = () => {
  return (
    <div className='  w-full bg-gradient-to-t from-gray-600 from-10% via-gray-700 via-20% to-gray-800 to-90%'>

      <div className='flex px-40 py-40 gap-12 '>
      <div>
      <img className='w-96 h-96 mt-8 ml-40 mr-5' src="\bodybuilding.jpg" alt="" />
      </div>

      <div>
        <h5 className='font-bold text-sm text-orange-500 my-6'>SOME REASONS</h5>
        <div className='flex font-bold  text-4xl gap-2 text-white my-4'><h1>WHY</h1><h1>CHOOSE US?</h1></div>

        <div>
          <ul>
            <li className='flex my-2'>< IoMdCheckmarkCircleOutline className='w-10 h-10 text-orange-500 '/><h4 className='font-semibold text-white mt-1 ml-2 text-lg'>OVER 140+ EXPERT COACHS</h4>
            </li>
            <li className='flex my-2'>< IoMdCheckmarkCircleOutline className='w-10 h-10 text-orange-500'/><h4 className='font-semibold text-white mt-1 ml-2 text-lg'>TRAIN SMARTER AND FASTER THAN BEFORE</h4>
            </li>
            <li className='flex my-2'>< IoMdCheckmarkCircleOutline className='w-10 h-10 text-orange-500'/><h4 className='font-semibold text-white mt-1 ml-2 text-lg'>1 FREE PROGRAM FOR NEW MEMBER</h4>
            </li>
            <li className='flex my-2'>< IoMdCheckmarkCircleOutline className='w-10 h-10 text-orange-500'/><h4 className='font-semibold text-white mt-1 ml-2 text-lg'>RELIABLE PARTNERS</h4>
            </li>
          </ul>

<div>
<h6 className='text-gray-400 mt-6 font-semibold'>OUR PARTNERS</h6>
<div className='flex gap-4 py-2 my-2 '>
<IoLogoApple className=' w-20 h-20 text-slate-400'/>
<IoLogoFacebook className=' w-20 h-20 text-slate-400'/>
<IoLogoGithub className=' w-20 h-20 text-slate-400'/>
</div>


</div>
          

        </div>
        
      </div>
      </div>

      
    </div>
  )
}

export default Choose