import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiCodeforces } from "react-icons/si";
import { MdLocationPin } from "react-icons/md";
import React from "react";
import BlurText from "./animations/BlurText";
import SplitText from "./animations/SplitText"


const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className=" mt-20 w-11/12 mx-auto">
      <div className="w-5/6 mx-auto gap-5">
        {/* <span className="absolute hidden lg:flex left-16 top-15 w-[2px] h-[120px] bg-indigo-700"></span> */}
        {/* <div className="lg:flex fixed hidden gap-10 lg:flex-col">
          <a href="https://github.com/DevAbidHasan" target="_blank"> 
            <FiGithub
              size={22}
              className="hover:text-indigo-600  hover:cursor-pointer hover:transition 300"
            />
          </a>
          <a href="https://www.linkedin.com/in/abid-hasan-plabon-a4aa222a1/" target="_blank">
            <FiLinkedin
              size={22}
              className="hover:text-indigo-600  hover:cursor-pointer hover:transition 300"
            />
          </a>
          <a href="https://www.facebook.com/plabon48" target="_blank">
            <FiFacebook
              size={22}
              className="hover:text-blue-600 hover:cursor-pointer hover:transition 300"
            />
          </a>
          <a href="https://codeforces.com/profile/abidhasanplabon80" target="_blank">
            <SiCodeforces
              size={22}
              className="hover:text-yellow-600 0 hover:cursor-pointer hover:transition 300"
            />
          </a>
          {/* <span className="absolute left-16 top-107 w-[2px] h-screen bg-indigo-700"></span> */}
        {/* </div> */} 
        <div className="space-y-3">
          <p className="ibm text-gray-700 font-semibold">Hi there, this is</p>
          {/* <h2 className="font-bold poppins my-6 text-3xl md:text-5xl text-indigo-600 lg:text-7xl">
            Abid Hasan Plabon
          </h2> */}

          <SplitText
            text="Abid Hasan Plabon"
            className="font-bold poppins my-3 lg:my-6 text-2xl md:text-5xl text-indigo-600 lg:text-7xl"
            delay={100}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            
          />
          {/* <p className='font-bold ibm text-lg md:text-2xl lg:text-4xl text-indigo-500'></p> */}
          <BlurText
            text="Front-end web developer"
            delay={300}
            animateBy="words"
            direction="bottom"
            onAnimationComplete={handleAnimationComplete}
            className="font-bold ibm text-lg md:text-2xl lg:text-4xl text-indigo-500"
          />
          <p className="md:text-lg font-medium text-sm poppins text-gray-600">
            I merge creativity and code to build interfaces that are both
            beautiful and seamless.
          </p>
          {/* <p className="flex items-center poppins font-thick gap-2">
            <MdLocationPin size={20} className="text-amber-600" /> <p className="text-gray-600">Dhaka,
            Bangladesh</p>
          </p> */}
        </div>
        
        
         <div className=" flex items-center sm:justify-start mb-5 mt-8 gap-4 md:gap-8 ">
          <a href="https://github.com/DevAbidHasan" target="_blank"> 
            <FiGithub
              size={22}
              className="hover:text-indigo-600  hover:cursor-pointer hover:transition 300"
            />
          </a>
          <a href="https://www.linkedin.com/in/abid-hasan-plabon-a4aa222a1/" target="_blank">
            <FiLinkedin
              size={22}
              className="hover:text-indigo-600  hover:cursor-pointer hover:transition 300"
            />
          </a>
          <a href="https://www.facebook.com/plabon48" target="_blank">
            <FiFacebook
              size={22}
              className="hover:text-blue-600 hover:cursor-pointer hover:transition 300"
            />
          </a>
          <a href="https://codeforces.com/profile/abidhasanplabon80" target="_blank">
            <SiCodeforces
              size={22}
              className="hover:text-yellow-600 0 hover:cursor-pointer hover:transition 300"
            />
          </a>
          {/* <span className="absolute left-16 top-107 w-[2px] h-screen bg-indigo-700"></span> */}
        </div>
        <div className="my-10 space-x-5">
            <a className="btn btn-primary">
                Contact
            </a>
            <a className="btn btn-outline">
                Resume
            </a>
        </div>
        {/* <div className="lg:flex hidden lg:absolute lg:right-12 gap-10 lg:flex-col">
          
            <a href="https://github.com/DevAbidHasan" target="_blank"> 
            <FiGithub
              size={22}
              className="hover:text-indigo-600  hover:cursor-pointer hover:transition 300"
            />
          </a>
          <a href="https://www.linkedin.com/in/abid-hasan-plabon-a4aa222a1/" target="_blank">
            <FiLinkedin
              size={22}
              className="hover:text-indigo-600  hover:cursor-pointer hover:transition 300"
            />
          </a>
          <a href="https://www.facebook.com/plabon48" target="_blank">
            <FiFacebook
              size={22}
              className="hover:text-blue-600 hover:cursor-pointer hover:transition 300"
            />
          </a>
          
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
