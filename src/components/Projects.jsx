import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hover2 from "./Hover2";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [preview, setPreview] = useState(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
    tl.from(".overlay", {
      opacity: 1,
      width: "100%",
      duration: 1,
      stagger: 0.2,
    }).from(".project-item", {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: 1,
    });
  });

  // Project Data Array
  const projects = [
    {
      number: "01",
      title: "The Wild Oasis",
      to: "https://github.com/TheXro/Wild-Oasis",
      info: "A cabin booking app made in React with Redux Query, React Router, and styled components, using Supabase as backend.",
      img: "https://dummyimage.com/600x400/111/fff&text=The+Wild+Oasis",
    },
    {
      number: "02",
      title: "Money Minded",
      to: "https://moneyminded.vercel.app/",
      info: "A full-stack money and task manager app built with React, Node, Express, and MongoDB.",
      img: "https://dummyimage.com/600x400/111/fff&text=Money+Minded",
    },
    {
      number: "03",
      title: "Fast Pizza",
      to: "https://github.com/TheXro/fast-pizza",
      info: "A pizza booking app built with React, Redux Toolkit, and React Router.",
      img: "https://dummyimage.com/600x400/111/fff&text=Fast+Pizza",
    },
    {
      number: "04",
      title: "Corn Chan",
      to: "https://github.com/TheXro/chatApp",
      info: "A chat web app developed with socket.io.",
      img: "https://dummyimage.com/600x400/222/fff&text=Corn+Chan",
    },
    {
      number: "05",
      title: "Portfolio",
      to: "https://github.com/TheXro/RaviYadav",
      info: "My portfolio website built with React, Tailwind CSS and GSAP.",
      img: "https://dummyimage.com/600x400/333/fff&text=Portfolio",
    },
    {
      number: "06",
      title: "XoFlix",
      to: "https://github.com/TheXro/xoflix",
      info: "A movie and TV show app built with React, Redux Toolkit, and styled components.",
      img: "https://dummyimage.com/600x400/444/fff&text=XoFlix",
    },
  ];

  return (
    <div
      className="md:flex flex-col relative overflow-hidden mx-[5vw] md:mx-[10vw] mt-[1vw] pb-28"
      id="projects"
    >
      <h1 className="text-[10vw] project relative y">
        Projects
        <span className="overlay absolute opacity-90 top-0 left-0 bg-[#000] w-0 h-full z-10"></span>
      </h1>

      <section className="w-full mt-4 relative z-10">
        {projects.map((project, index) => (
          <div
            className="project-item"
            key={index}
            onMouseEnter={(e) =>
              setPreview({ img: project.img, x: e.clientX, y: e.clientY })
            }
            onMouseMove={(e) =>
              setPreview((prev) => prev && { ...prev, x: e.clientX, y: e.clientY })
            }
            onMouseLeave={() => setPreview(null)}
          >
            <Hover2
              number={project.number}
              to={project.to}
              info={project.info}
              img={project.img}
            >
              {project.title}
            </Hover2>
            {index < projects.length - 1 && (
              <div className="w-full h-[1px] my-3 bg-white"></div>
            )}
          </div>
        ))}
      </section>

      {/* Floating Preview Image */}
      {preview && (
        <img
          src={preview.img}
          alt=""
          className="fixed pointer-events-none w-[400px] h-[250px] object-cover rounded-xl shadow-2xl transition-opacity duration-200"
          style={{ top: preview.y + 20, left: preview.x + 20 }}
        />
      )}
    </div>
  );
}

export default Projects;
