import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import anime from "animejs/lib/anime.es.js";

const Hero = () => {
  
  useEffect(() => {
    // Animation for the logo and title
    anime({
      targets: ".logo-title",
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeOutQuad",
    });

    // Animation for navigation items
    anime({
      targets: ".nav-item",
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeOutQuad",
      delay: anime.stagger(100),
    });

    // Animation for the image
    anime({
      targets: ".hero-image",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeOutQuad",
    });

    // Animation for the text and buttons
    anime({
      targets: ".hero-text, .hero-button",
      translateX: [-50, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeOutQuad",
      delay: anime.stagger(100),
    });
  }, []);

  return (
    <div className="container">
      <div className="flex relative">
        <div className="left bg-gray-800 w-2/3 h-screen">
          <div className="text-white flex">
            <img
              className="w-16 h-20 mx-2 logo-title"
              src=".\tf_logo-removebg-preview.png"
              alt=""
            />
            <div className="my-4 logo-title">
              <h1 className="mx-0.5 text-md font-semibold">THE</h1>
              <h1 className="mx-0.5 font-semibold text-md">FIT CLUB</h1>
            </div>

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
          <div className="ml-96 px-96 absolute">
            <img
              className="w-96 h-96 mt-24 hero-image"
              src="\src\gymimage-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="text-white mt-16 hero-text">
            <div className="bg-gray-900 w-fit px-2 border rounded-3xl py-3 ml-10">
              <div className="bg-orange-500 w-20 border rounded-3xl border-orange-500 py-2 h-10"></div>
              <h2 className="">THE BEST FITNESS CLUB IN THE TOWN</h2>
            </div>
          </div>

          <div className="text-white mt-12 ml-12 text-6xl font-bold hero-text">
            <div className="flex">
              <h1 className="my-2 py-1 mr-4 "> SHAPE</h1>{" "}
              <h1 className="my-2 py-1 ">YOUR</h1>
            </div>
            <h1 className="my-2 py-1 ">IDEAL BODY</h1>
          </div>

          <div>
            <p className="text-white mt-8 ml-12 hero-text">
              In here we will keep you to shape and build your ideal body and
              live up your life to fullest
            </p>
          </div>

          <div className="flex hero-text">
            <ul className="text-white text-3xl flex gap-14 ml-12 mt-10">
              <li>
                +133
                <p className="text-sm text-slate-400">EXPERT COACHES</p>
              </li>
              <li>
                +973
                <p className="text-sm text-slate-400">MEMBERS JOINED</p>
              </li>
              <li>
                +24
                <p className="text-sm text-slate-400">FITNESS PROGRAMS</p>
              </li>
            </ul>
            <div className="bg-slate-700 border border-slate-700 w-40 h-20 ml-16 mt-4">
              <div className="flex gap-8 px-2">
                <div className="w-24 h-24 mt-4 py-1">
                  <img src=".\graph-png-file.png" alt="" />
                </div>
                <div className="">
                  <h4 className="text-slate-200 leading-tight">
                    Calories burned
                  </h4>
                  <h4 className="text-white mt-2">220 kcal</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 hero-button">
            <button className="bg-orange-500 text-white px-4 border border-orange-500 ml-12 mt-6 font-semibold py-2">
              Get Started
            </button>
            <button className="bg-slate-800 ml-16 text-white border border-orange-500 px-4 py-2 font-semibold">
              Learn More
            </button>
          </div>
        </div>

        <div className="right bg-orange-500 w-1/3 h-screen">
          <div>
            <button className="bg-white border rounded-md px-2 py-1 font-semibold my-4 ml-96">
              Join Now
            </button>

            <div className="bg-gray-700 w-28 h-28 py-2 px-1 ml-72 mt-6 border border-slate-600 rounded-lg">
              <FaHeart className="w-10 px-0.5 py-0.5 h-8 mb-2" />
              <h4 className="text-slate-400 ml-3">Heart Rate</h4>
              <h5 className="text-white ml-3">116 bpm</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
