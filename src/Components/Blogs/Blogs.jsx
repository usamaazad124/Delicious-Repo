import React, { useState } from "react";
import Card1 from "../../images/card1.png";
import Card2 from "../../images/card2.png";
import Card3 from "../../images/card3.png";
import CardChild from "../Home/CardChild";
import Card4 from "../../images/card4.png";
import Card5 from "../../images/card5.png";
import Card6 from "../../images/card6.png";


const ArrayLower = [
  {
    Image: Card1,
    Catagory: "seasonal events",
    Title:
      "How to Host Exciting Virtual Holiday Parties for Remote and Hybrid Teams",
    PostedDate: "Aug 22,2022",
  },
  {
    Image: Card2,
    Catagory: "seasonal events",
    Title: "7 Fun Ways to Celebrate Hispanic Heritage Month in Your Workplace",
    PostedDate: "aug 8,2022",
  },
  {
    Image: Card3,
    Catagory: "seasonal events",
    Title:
      "Women's Equality Day 2022 and Beyond: 5 Ways to Promote Gender Diversity in Your Workplace",
    PostedDate: "jul 25,2022",
  },

  {
    Image: Card4,
    Catagory: "b2b",
    Title: "7 Interactive Onboarding Experiences to Welcome New Team Members",
    PostedDate: "jul 11,2022",
  },
  {
    Image: Card5,
    Catagory: "b2b",
    Title: "5 Creative July 4th Celebrations for Remote and Hybrid Teams",
    PostedDate: "jun 27,2022",
  },
  {
    Image: Card6,
    Catagory: "team building events",
    Title: "5 Unique Ways to Create Team Cohesion in a Hybrid Workplace",
    PostedDate: "jun 13,2022",
  },
];

const Blogs = () => {
  const id =1;
  const [RenderData, setRenderData] = useState(ArrayLower);
  const deleteHandle = index => {
    console.log("index",index)
    setRenderData(oldValues => {
      return oldValues.filter((_, i) => i !== index)
    })
  }
  
 

  return (
    <>
      <div className="">
        <div className="w-full bg-blog-area pt-[200px]">
          <div className="flex sm:justify-between  px-5 justify-center md:flex-row flex-col flex-wrap md:items-start items-center  container mx-auto text-center  ">
            {RenderData.map((item, index) => {
              return (
                <CardChild
                  key={index}
                  Image={item.Image}
                  Catagory={item.Catagory}
                  Title={item.Title}
                  PostedDate={item.PostedDate}
                  onDelete={()=>deleteHandle(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
