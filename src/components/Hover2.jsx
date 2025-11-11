import React from "react";

function Hover2({ children, number, to, info, img, setPreview }) {
  const handleClick = () => {
    window.open(to, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer"
      onMouseEnter={(e) => setPreview({ img, x: e.clientX, y: e.clientY })}
      onMouseMove={(e) => setPreview({ img, x: e.clientX, y: e.clientY })}
      onMouseLeave={() => setPreview(null)}
    >
      <div className="group relative transition-all duration-500 h-20 overflow-hidden">
        <div className="flex gap-2 justify-between items-center h-full md:px-8 duration-500">
          <div>
            <div className="text-2xl md:text-4xl transition-transform duration-300 md:group-hover:translate-x-10 md:group-hover:opacity-0">
              {number}.<span className="mx-4">{children}</span>
            </div>
            <div className="md:hidden text-xs leading-tighter">{info}</div>
          </div>

          <div className="icon transition-transform duration-200 md:group-hover:-translate-x-10 md:group-hover:-rotate-45 rounded-full flex justify-center items-center z-10">
            <div className="w-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="white"
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hover2;
