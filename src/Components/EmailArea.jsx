import React from "react";

const EmailArea=({query,setQuery})=> {
 console.log(query)
  return (
    <>
   

      <div className="bg-blog-area ">
        <div className="md:w-[91%] w-[92%] lg:w-[87%] mx-auto py-20 bg-blog-area container ">
          <div className="flex w-full p-8  bg-contact-yellow items-center md:justify-between justify-center md:flex-wrap flex-nowrap border">
            <div>
              <h2 className="text-black text-2xl font-freight font-semibold capitalize">
                join our Newsletter
              </h2>
              <p className="text-black text-sm font-freight">
                Enter your email and we'll keep you posted with news and
                updates!
              </p>
            </div>
            <div className="flex flex-row md:w-[38%] w-[100%] lg:w-[41%]">
            <form className="flex w-[97%]">
              <input className="bg-white w-full py-4 focus:outline-none text-xs pl-2 font-semibold border" required type="text" placeholder="Enter your E-mail.." onChange={(e)=>setQuery(e.target.value) }
             />
              <button className="focus:outline-none bg-black text-white text-xs  font-semibold px-4 py-3 mt-1 rounded mr-1">subscribe</button>
            </form>
            </div>
           
          </div>
        </div>
        
      </div>
    </>
  );
}

export default EmailArea;
