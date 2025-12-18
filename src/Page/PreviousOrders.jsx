import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io"; //down arrow icon

const PreviousOrders = () => {
  const allOrdersFromRedux = useSelector((state) => state.cart.Orders);

  const [SearchInput, setSearchInput] = useState("");


  const allOrders =  SearchInput.length > 0
    ? allOrdersFromRedux.filter(
        (item) => item.OrderNumber == SearchInput
      )
    : allOrdersFromRedux;

  
  

  const [showDetails, setshowDetails] = useState(false)



  return (
    <div className="w-full md:full px-3 h-full ">
      {/* Search and heading  -------------------------------*/}
      <div className="heading bg-(--mainColor) rounded-xl p-4 flex justify-between">
        <h1 className="font-[logo] font-semibold text-xl mb-2">All Orders</h1>

        <div className=" bg-white px-4 py-2 flex justify-start gap-3 items-center rounded-xl w-2/4">
          <FiSearch />
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type= 'number'
            value={SearchInput}
            className="outline-0 w-full"
            placeholder="Search Order Number . . ."
          />
        </div>
      </div>

      {/* All Order Maping --------------------------------- */}

      <div className="relative w-full  p-4 flex flex-wrap gap-2">
        <span className="backgroundImageDiv opacity-5 absolute w-full min-h-[80vh] left-0 top-0"></span>

        {allOrders.length <= 0 ? (
          // if no order / or if orders exists
          <div className="flex justify-center items-center w-full h-80 font-[logo] text-xl">
            No Order yet
          </div>
        ) : (
          allOrders.map((order, index) => {
            const date = new Date(order.CreatedAt);
            const formattedDate = `${date.getDate()} ${date.toLocaleString(
              "default",
              { month: "short" }
            )} ${date.getFullYear().toString().slice(-2)}`;
            const GrandTotalOfSingleClient = "";
            

            return (
              <div key={index} className="rounded-xl inline-block h-auto  px-4 py-2 bg-white hover:shadow-2xl z-10 border-2 ">
                {/* Order No div ⬆️*/}
                <div className="OrderNumberDiv  flex justify-center items-center gap-3 ">
                  <h3
                    className="rounded-full bg-linear-to-r from-red-500 via-[#ff4d6d] to-[#ff758f]
 text-xl p-2 w-12 h-12 flex justify-center items-center text-white cursor-pointer"
                  >
                    {order.OrderNumber}
                  </h3>
                  <IoIosArrowDown onClick={()=>setshowDetails(prev => !prev)} className={`${showDetails? 'rotate-x-180' : '' } text-2xl cursor-pointer hover:scale-120 transition-all duration-300 ease-in-out`} />
                </div>

                {/* details ⬇️*/}
                <div className={`${showDetails ? '' : 'hidden' } rounded-xl  px-2  w-full p-2"`}>
                  {/* time */}
                  <h4>{formattedDate}</h4>

                  {/* table heading */}
                  <div className=" heading flex gap-2 justify-between items-center font-bold">
                    <h3 className="flex-4">Item</h3>
                    <h3 className="flex-3">Qty</h3>
                    <h3 className="flex-3">Price</h3>
                    <h3 className="flex-3">Total</h3>
                  </div>
                  <hr />

                  {/* item details */}

                  {order.CartItems.map((singleitem, index) => {
                    // reducer to get Grand Total:
                    const GrandTotal = order.CartItems.reduce(
                      (acc, item) =>
                        item.type === "Pizza"
                          ? acc + item[item.selectedSize] * item.quantity
                          : item.type === "ColdDrink"
                          ? acc + item[item.selectedDrinkSize] * item.quantity
                          : acc + item.price * item.quantity,
                      0
                    );

                    return (
                      <div
                        key={index}
                        className="heading flex gap-2 justify-between items-center font-bold"
                      >
                        <h3 className="flex-4 text-gray-400 font-light">
                          {
                            <h3 className="flex-4">
                              {singleitem.type === "Pizza"
                                ? singleitem.name +
                                  "(" +
                                  singleitem.selectedSize +
                                  ")"
                                : singleitem.type === "ColdDrink"
                                ? singleitem.name +
                                  "(" +
                                  singleitem.selectedDrinkSize +
                                  ")"
                                : singleitem.name}
                            </h3>
                          }
                        </h3>
                        {/* quantity */}
                        <h3 className="flex-3 text-gray-400 font-light">
                          {singleitem.quantity + " " + "x"}
                        </h3>

                        {/* Price */}
                        <h3 className="flex-3 text-gray-400 font-light">
                          {singleitem.type === "Pizza"
                            ? singleitem[singleitem.selectedSize] + "="
                            : singleitem.type === "ColdDrink"
                            ? singleitem[singleitem.selectedDrinkSize] + "="
                            : singleitem.price + "="}
                        </h3>

                        {/* one item total */}
                        <h3 className="flex-3">
                          {singleitem.type === "Pizza"
                            ? singleitem[singleitem.selectedSize] *
                              singleitem.quantity
                            : singleitem.type === "ColdDrink"
                            ? singleitem[singleitem.selectedDrinkSize] *
                              singleitem.quantity
                            : singleitem.price * singleitem.quantity}
                        </h3>
                      </div>
                    );
                  })}

                  <hr />

                  {/*Grand TOTAL */}
                  <div className=" flex justify-between items-center text-xl font-bold">
                    <div
                      className={`"flex-4 text-xs ${
                        order.Discount ? "text-green-400" : "hidden"
                      }`}
                    >
                      Discount: {order.Discount}%
                    </div>
                    <div className="flex-3 text-xs"></div>
                    
                    <div className="relative flex-3 border-b ">
                      TOTAL 
                    </div>

                    <div className="flex-3 font-[Muck] border-b">{`${
                      order.Discount
                        ? Math.floor(
                            order.GrandTotal -
                              (order.GrandTotal / 100) * order.Discount
                          )
                        : Math.floor(order.GrandTotal).toLocaleString()
                    }`}</div>
                    
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PreviousOrders;
