import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText";
import AnimatedTextV2 from "./AnimatedTextV2";

gsap.registerPlugin(ScrollTrigger);

const letters = ["I", "n", "t", "r", "o"];

const Intro = () => {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        toggleActions: "play none none none",
        trigger: ".about",
        start: "40% 100%",
        end: "70% 80% ",
        scrub: true,

        // markers: true,
      },
    });
    t1.from([".about"], {
      duration: 0.3,
      //   opacity: 0,
      //   delay: 0.4,
      scrub: "true",
      translateY: "150",
      stagger: 0.05,
      ease: "power1.inOut",
    });
  });

  return (
    <>
      <div className="mx-[5vw] md:mx-[10vw] md:mt-[5v md:flex md:flex-col gap-10">
        <div className="flex flex-col  ">
          <div className="mb-5 h-[12vw] w-[18] overflow-hidden flex font-bold  ">
            {letters.map((letter, index) => (
              <span
                key={index}
                id="about"
                className="text-[10vw] inline-block y about "
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center para md:flex-row  ">
          <div className="text-2xl md:text-[3vw] leading-none para  ">
            <AnimatedTextV2
              text={`With a blend of technical expertise and design sensibility, I bring a unique approach to building and designing web applications that not only function flawlessly but also captivate users.`}
              id={3}
            />
          </div>
        </div>
        <div className="leading-5 tracking-wide flex my-10 overflow-hidden ">
          <p className="w-1/2"></p>
          <div className="md:w-1/2 w-100 text-right md:text-xl font-medium">
            <AnimatedTextV2
              text={`Whether I’m designing intuitive interfaces or crafting robust server-side logic, I thrive on challenges that push my creativity and technical skills. Explore my projects below to see how I can help bring your vision to life!`}
              id={1}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
