import React, { useEffect } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import anime from "animejs/lib/anime.es.js"; // Import anime.js library

const AboutUs = () => {
  useEffect(() => {
    // Animation for the title "TESTIMONIALS"
    anime({
      targets: ".testimonial-title",
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeOutQuad",
    });

    // Animation for the description text
    anime({
      targets: ".description-text",
      translateX: [-50, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeOutQuad",
    });

    // Animation for the social media icons
    anime({
      targets: ".social-icon",
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeOutQuad",
      delay: anime.stagger(100),
    });
  }, []);

  return (
    <div className="w-full pt-16 pb-10 bg-gradient-to-b from-gray-800 to-gray-900">
      <h1 className="text-orange-500 font-bold text-lg ml-16 px-4 mr-2 py-8 testimonial-title">
        TESTIMONIALS
      </h1>

      <div className="flex justify-around mx-10">
        <div>
          <h1 className="ml-10 mr-2 text-white text-4xl mt-6 mb-4 font-semibold">
            WHAT THEY
          </h1>
          <h1 className="ml-10 mr-2 text-white text-6xl mb-10 font-bold">
            SAY ABOUT US
          </h1>
          <p className="text-white ml-10 mr-20 mt-4 text-sm description-text">
            Gym is amazing. Amazing facility, top equipment and great
            environment. Good service with friendly staff and super clean and
            comfortable gym for everyone from beginners to professional athletes{" "}
          </p>
          <div className="flex">
            <p className="text-orange-500 ml-10 mt-4 text-lg ">JOHN KEVIN</p>
            <p className="text-white mt-4 ml-2 text-lg"> - COACH</p>
          </div>
        </div>

        <div className="flex justify-around">
          <div className="w-56 h-56 border border-orange-500 mr-40 pl-32"></div>
          <div className="bg-gradient-to-r from-orange-600 from-10% via-oramge-700 via-40% to-orange-700 to-90%  px-8 pt-8 pb-4 absolute w-56 h-56 mt-6 mr-28"></div>
        </div>
      </div>

      <div className="w-72 h-1 bg-orange-500 ml-72 pl-20 px-4 mt-16  border border-orange-500 rounded-2xl"></div>
      <div className="flex justify-around ">
        <div className="flex gap-10 text-white ml-16 px-4 mt-4 font-semibold text-4xl">
          <h1>READY TO</h1>
          <h1>LEVEL UP</h1>
        </div>

        <div className="mt-4">
          <input
            className="py-2 border border-slate-500 rounded-lg pl-4 pr-8 bg-slate-500 text-slate-300"
            placeholder="Enter your Email Address here"
            type="email"
          />
          <button className="text-white bg-orange-500 border rounded-lg ml-1 border-orange-500  px-2 py-2">
            Join Now
          </button>
        </div>
      </div>

      <div className="h-1 w-full bg-slate-500 mt-16"></div>

      <div className="text-slate-400 flex justify-around mx-72 pt-20 px-72 ">
        <TiSocialFacebook className="w-10 h-10 social-icon" />
        <TiSocialLinkedin className="w-10 h-10 social-icon" />
        <TiSocialTwitter className="w-10 h-10 social-icon" />
      </div>

      <div className="flex justify-center mt-8">
        <img
          className=" w-20 h-20"
          src=".\tf_logo-removebg-preview.png"
          alt=""
        />
        <div className="text-slate-400 font-semibold text-lg">
          <h5>THE </h5>
          <h5>FIT CLUB</h5>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
