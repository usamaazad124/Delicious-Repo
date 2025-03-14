import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  once: true,
});

const CardChild = ({ Image, Title, PostedDate,Catagory, onDelete }) => {
  return (
    <>
      <div
        className="md:w-[45%]  lg:w-[31%] w-11/12 md:mb-0 mb-10"
        data-aos="zoom-in"
      >
        <img className="w-full" src={Image} alt="" />
        <h4 className=" inline-block text-center cursor-pointer text-xs uppercase font-semibold border-b-2 border-yellow-400 text-black pt-5">
          {Catagory}
        </h4>
        <h1 className="text-black font-bold text-2xl font-freight mt-2 w-[66%] mx-auto cursor-pointer">
          {Title}
        </h1>
        <p className="text-xs cursor-pointer text-center text-gray-500 font-semibold mt-3 uppercase">
          {PostedDate}
        </p>
        <button className="bg-[red] py-2 px-5 mb-5 rounded text-white" onClick={onDelete}>
          Delete
        </button>
      </div>
    </>
  );
};

export default CardChild;
