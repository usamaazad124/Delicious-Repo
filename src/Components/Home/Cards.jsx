import React, { useEffect, useState } from "react";
import Card1 from "../../images/card1.png";
import Card2 from "../../images/card2.png";
import Card3 from "../../images/card3.png";
import CardChild from "./CardChild";

const ArrayUpper = [
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
];

const Cards = ({ query }) => {
  const [filtered, setFiltered] = useState(ArrayUpper);

  useEffect(() => {
    const filtered = ArrayUpper.filter((item) => {
      return query.length < 0
        ? item
        : item.Title.toLowerCase().includes(query.toLowerCase());
    });
    setFiltered(filtered);
  }, [query]);
  return (
    <>
      <div className="">
        <div className="w-full bg-blog-area pt-[200px]">
          <div className="flex sm:justify-between  px-5 justify-center md:flex-row flex-col flex-wrap md:items-start items-center  container mx-auto text-center  ">
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

export default Cards;
