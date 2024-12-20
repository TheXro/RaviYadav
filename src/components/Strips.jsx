import React from "react";
import Mover from "./Mover";
function Strips() {
  return (
    <>
      <div className="my-[30vw] md:mb-[30vw] md:mt-0">
        <div className="">
          <div className="opacity-30 overflow-hidden absolute origin-center -rotate-[4deg] w-[110%] -left-4 ">
            <Mover
              className="strip1"
              item1={" UI/UX Design"}
              item2={" Full Stack Developer"}
              item3={" MERN "}
            />
          </div>
          <div className="origin-center overflow-clip  absolute -left-4 rotate-[6deg] w-[110%]">
            <Mover
              item3={" UI/UX Design"}
              item1={" Full Stack Developer"}
              item2={" JavaScript"}
            />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Strips;
