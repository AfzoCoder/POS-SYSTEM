import React, { useEffect, useState } from "react";
import { CiPizza } from "react-icons/ci"; //pizza icon
import { PiHamburgerThin } from "react-icons/pi"; //burger icon
import { CiFries } from "react-icons/ci"; //fries icon
import { RiDrinksLine } from "react-icons/ri";
import SingleCard from "./SngleCard";
import allItemsData from "../Data.js";
import wings from '../assets/FoodImages/categoryImages/fried-chicken.png'
import deals from '../assets/FoodImages/categoryImages/deals.png'
import nugets from '../assets/FoodImages/categoryImages/nugets.jfif'
import pasta from '../assets/FoodImages/categoryImages/pasta.jpg'
import Rolls from '../assets/FoodImages/categoryImages/rolls.png'


const placeOrder = () => {
  //all json data into a state variable.
  const [Data, setData] = useState(allItemsData);
  

  const CategoriesArray = [
    { name: "Pizza", icon: <CiPizza /> },
    { name: "Burgers", icon: <PiHamburgerThin /> },
    { name: "Fries", icon: <CiFries /> },
    { name: "ColdDrink", icon: <RiDrinksLine /> },
    { name: "Pasta",img:pasta, icon: <CiPizza /> },
    { name: "Nuggets",img:nugets, icon: <CiPizza /> },
    { name: "Wings", img: wings ,icon: <CiPizza />, },
    { name: "Paratha Rolls",img: Rolls, icon: <CiPizza /> },
    { name: "Deals",img: deals, icon: <CiPizza /> },
  ];

  const [filter, setfilter] = useState("");

  // filter handler
  let filtering = () => {
    let typeFilter = allItemsData.filter((item) => item.type === filter);
    console.log(typeFilter);
    if (!filter) {
      setData(allItemsData);
    } else {
      setData(typeFilter);
    }
  };
  useEffect(() => {
    filtering();
  }, [filter]);

  return (
    <div className="cat flex-3/4 h-full md:px-4 rounded-xl overflow-hidden">
      <div className="categories relative rounded-xl bg-(--mainColor) px-2 py-2 md:py-6">
         {/*show all cates  */}
        <span 
        onClick={()=>setfilter('')}
        className="absolute right-4 top-4 text-sm  text-white hover:scale-105 font-medium cursor-pointer">Show All</span>
        
        <h1 className="font-[logo] font-semibold text-xl mb-2">Category</h1>

      {/* map for all categories */}
        <div className="allCategories flex gap-2 flex-wrap ">
          {CategoriesArray.map((category, index) => {
            return (
              <div
                onClick={() => setfilter(category.name)}
                key={category.name}
                className="rounded-xl bg-white px-4 py-2 text-xl cursor-pointer hover:scale-105 flex justify-center items-center flex-col gap-1 transition-all ease-in duration-150"
              >
                {category.img? <img className={` ${category.name === 'Wings' ? 'w-6' : 'w-10'}`} src={`${category.img}`}/>: category.icon} {category.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* all food items show here */}
      <div className="w-full  p-2 mt-3 flex flex-wrap gap-2">
        {Data.map((item, index) => {
          return <SingleCard key={item.name} data={item} />;
        })}
      </div>
    </div>
  );
};

export default placeOrder;
