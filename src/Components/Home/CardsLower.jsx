import React, { useEffect, useState } from "react";
import CardChild from "./CardChild";
import Card4 from "../../images/card4.png";
import Card5 from "../../images/card5.png";
import Card6 from "../../images/card6.png";

const ArrayLower = [
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
const CardsLower = ({query}) => {
    const [filtered, setFiltered] = useState(ArrayLower);

    useEffect(() => {
      const filtered = ArrayLower.filter((item) => {
        return query.length < 0
          ? item
          : item.Title.toLowerCase().includes(query.toLowerCase());
      });
      setFiltered(filtered);
    }, [query]);

  return (
    <>
      <div className="">
        <div className="w-full bg-blog-area ">
          <div className="flex sm:justify-between px-5 justify-center md:flex-row flex-col flex-wrap md:items-start items-center container mx-auto text-center  ">
            {filtered.map((item) => {
              return (
                <CardChild
                  Image={item.Image}
                  Catagory={item.Catagory}
                  Title={item.Title}
                  PostedDate={item.PostedDate}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsLower;
