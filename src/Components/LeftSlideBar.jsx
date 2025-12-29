import React from "react";
import { IoFastFoodOutline } from "react-icons/io5"; //food icon
import { HiOutlineInbox } from "react-icons/hi2"; //order icon
import { CiBoxList } from "react-icons/ci"; //icon
import { BsTelephone } from "react-icons/bs"; //phone icon
import { IoLocationOutline } from "react-icons/io5"; //location icon
import { useLocation, useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import baloonLogo from "../assets/OtherImages/halabLogo baloon.png";


const leftSlideBar = () => {
  const navigate = useNavigate();
  
  const location = useLocation()
  
  

  const allOrders = useSelector((state) => state.cart.Orders);

  let deshBoardItem = [
    { name: "Desh Board ", icon: <CiBoxList />, Navigateto: "/" },
    {
      name: "Food Order",
      icon: <IoFastFoodOutline />,
      Navigateto: "/FoodOrder",
    },
    { name: "Order History", icon: <HiOutlineInbox />, Navigateto: "/Orders" },
  ];

  return (
    <div className=" relative md:min-h-screen md:scale-100 w-full md:w-[18%] flex flex-col justify-start items-center md:px-6 py-4 md:py-0 bg-white rounded-xl">
      {/* LOGO */}
      <div className="logo my-2 md:my-3 font-[logo] font-semibold text-lg md:text-2xl">
       <img src={baloonLogo}  className="w-30 md:w-59" />
        {/* Halab Kitchen */}
        {/* <span className="text-3xl text-(--mainColor)">.</span> */}
      </div>

      {/* DESHBOARD */}
      <div className="flex justify-center items-start flex-row md:flex-col md:gap-6">
        {deshBoardItem.map((menuItem, index) => {
          return (
            <div
              onClick={() => navigate(menuItem.Navigateto)}
              key={menuItem.name}
              className={`${location.pathname === menuItem.Navigateto ? 'text-red-400' : ''} relative hover:bg-amber-300 px-3 md:px-6 py-2 rounded-xl text-md md:text-xl cursor-pointer flex-col md:flex-row gap-5 justify-center items-center`}
            >
              {menuItem.icon} {menuItem.name}

              {menuItem.name === "Order History" && (
                <h2 className="absolute right-3 top-3 w-6 h-6 flex justify-center items-center text-xs bg-red-500 text-white rounded-full">
                  {allOrders.length}
                </h2>
              )}
            </div>
          );
        })}
      </div>

      <div className="font-[logo] bottom-2 absolute hidden md:inline-block">
        <div className="flex gap-2 justify-center items-center">
          <BsTelephone /> 0347-5447879
        </div>
        <div className="flex gap-2 justify-center items-center">
          <IoLocationOutline /> Halab Kitchen, Roopwal
        </div>
      </div>
    </div>
  );
};

export default leftSlideBar;
