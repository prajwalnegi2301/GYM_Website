import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div>
              <ul className="flex gap-7 font-semibold text-sm ml-96 pl-20 my-4 nav-item">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/programs">Programs</a>
                </li>
                <li>
                  <a href="/why-us">Why Us</a>
                </li>
                <li>
                  <a href="/journey">Journey</a>
                </li>
                <li>
                  <a href="/testimonials">Testimonials</a>
                </li>
              </ul>
            </div>
    </div>
  )
}

export default Navbar
