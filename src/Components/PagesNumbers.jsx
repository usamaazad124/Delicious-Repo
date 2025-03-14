import React from "react";

const PagesNumbers=() => {
  return (
    <>
      <div className="pagesNum  flex justify-center mx-auto bg-blog-area pt-20 pb-[12%]">
          <div className="flex items-center mr-5 cursor-pointer">
          <span className="text-2xl font-semibold mr-1 -mt-1">‹</span>
              <p className="text-xs text-black font-semibold uppercase">Prev</p>

          </div>
        <div className="h-8 w-8 bg-black text-xs text-semibold text-white cursor-pointer rounded-full flex items-center justify-center mr-3">
          1
        </div>
        <div className="h-8 w-8 bg-white text-xs text-semibold text-black cursor-pointer hover:text-white hover:bg-black rounded-full flex items-center justify-center mr-3">
          2
        </div>
        <div className="h-8 w-8 bg-white text-xs text-semibold text-black cursor-pointer hover:text-white hover:bg-black rounded-full flex items-center justify-center mr-3">
          3
        </div>
        <div className="h-8 w-8 bg-white text-xs text-semibold text-black cursor-pointer hover:text-white hover:bg-black rounded-full flex items-center justify-center mr-3">
          4
        </div>
        <div className="h-8 w-8 bg-white text-xs text-semibold text-black cursor-pointer hover:text-white hover:bg-black rounded-full flex items-center justify-center mr-3">
          5
        </div>
        <div className="h-8 w-8 bg-white text-xs text-semibold text-black cursor-pointer hover:text-white hover:bg-black rounded-full flex items-center justify-center mr-3">
          6
        </div>
        <div className="h-8 w-8 bg-white text-xs text-semibold text-black cursor-pointer hover:text-white hover:bg-black rounded-full flex items-center justify-center mr-3">
          7
        </div>
        <div className="flex items-center ml-2 cursor-pointer">
          <p className="text-xs text-black font-semibold uppercase">next</p>
          <span className="text-2xl font-semibold ml-1 -mt-1">›</span>
        </div>
      </div>
    </>
  );
}

export default PagesNumbers;
