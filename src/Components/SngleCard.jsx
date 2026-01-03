import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInCart } from "../Feature/CartSlice";

const SingleCard = ({ data }) => {
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);
  const sizes = ["S", "M", "L", "XL"];
  const splSizes = ["M", "L", "XL"]; //spl pizza dont have small
  const [selectedSize, setselectedSize] = useState("M");

  const DrinkSizes = ["NR", "0.5", "1L", "1.5"];
  const [selectedDrinkSize, setselectedDrinkSize] = useState("NR");

  // Sound effects 🛎️
  const clickSound = new Audio("/Sounds/click.mp3");

  const playClick = () => {
    clickSound.currentTime = 0;
    clickSound.play();
  };

  return (
    <div className="relative rounded-xl  flex flex-col justify-center items-center  active:scale-95 p-1 bg-white hover:shadow-2xl ">
      {/* price - (absolute position) */}
      <h2 className="absolute text-xs top-2 rounded-r-xl left-0 bg-red-400 text-white px-1">
        {data.type === "Pizza"
          ? data[selectedSize]
          : data.type === "ColdDrink"
          ? data[selectedDrinkSize]
          : data.price}
        /-
      </h2>

      {/*img div  */}
      <div className="flex justify-center items-center w-30 h-30">
        <img
          src={
            data.type === "ColdDrink" && selectedDrinkSize == "NR"
              ? data.img
              : data.type === "ColdDrink" && selectedDrinkSize == "0.5"
              ? data.img2
              : data.type === "ColdDrink" && selectedDrinkSize == "1"
              ? data.img3
              : data.type === "ColdDrink" && selectedDrinkSize == "1.5"
              ? data.img4
              : data.img
          }
          className=" bg-[#ced4da]/50 rounded-xl w-full h-full object-fit "
        />
      </div>

      <h2 className="text-sm font-semibold mt-1">{data.name}</h2>

      {/* Controllers buttons */}
      <div className="w-full flex gap-1 justify-around items-center text-sm">
        {/* PIZZA LOGIC */}
        {data.type === "Pizza" &&
          sizes.map((size, index) => {
            if (!(size in data)) return null; // ⬅️ skip if key not exists
            return (
              <span
                onClick={() => setselectedSize(size)}
                className={`border border-gray-400 rounded-xl py-1 px-2 hover:text-white ${
                  selectedSize === size ? "bg-red-400 text-white" : ""
                } hover:bg-red-400 cursor-pointer`}
              >
                {size}
              </span>
            );
          })}

        {/* COLD DRINK LOGIC */}
        {data.type === "ColdDrink" &&
          DrinkSizes.map((Drink, index) => {
            return (
              <span
              key={index}
                onClick={() => setselectedDrinkSize(Drink)}
                className={`border border-gray-400 rounded-xl py-1 px-2 hover:text-white ${
                  selectedDrinkSize === Drink ? "bg-red-400 text-white" : ""
                } hover:bg-red-400 cursor-pointer`}
              >
                {Drink}
              </span>
            );
          })}
      </div>
      <div className="controlers flex items-center gap-2 justify-around mt-1">
        <button
          onClick={() => setquantity(quantity + 1)}
          className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white cursor-pointer rounded-xl"
        >
          +
        </button>

        <input
          type="number"
          value={quantity}
          className="w-4 outline-0 flex justify-center items-center read-only:"
          aria-controls="false"
        />

        <button
          onClick={() => setquantity(Math.max(quantity - 1, 1))} // logic to get bigger number always.😊
          className="w-6 h-6 cursor-pointer rounded-xl flex justify-center items-center bg-blue-500 text-white"
        >
          -
        </button>
      </div>

      {/* ADD Btn */}
      <button
        onClick={() => {  dispatch( addInCart({ ...data, quantity, selectedSize, selectedDrinkSize }) );
          playClick(); // sound effect of click
        }}
        className="rounded-xl ml-2 cursor-pointer mt-2 px-8 py-1 font-semibold bg-orange-500 hover:bg-orange-400 text-white border-2"
      >
        Add
      </button>
    </div>
  );
};

export default SingleCard;
