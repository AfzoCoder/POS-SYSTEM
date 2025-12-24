import React, { useEffect, useState } from "react";
import easyPaisa from "./../assets/OtherImages/Easypaisa_Logo-removebg-preview.png";
import cash from "./../assets/OtherImages/cash-removebg-preview.png";
import calender from "./../assets/OtherImages/calender.png";
import { useSelector } from "react-redux";

const Home = () => {
  const allOrdersFromRedux = useSelector((state) => state.cart.Orders);
  const [filterData, setfilterData] = useState([]); //main variable for filteration

  const accum = filterData.reduce((acc, total) => acc + total.GrandTotal, 0);

  const [filterPayment, setfilterPayment] = useState("");

  const [selectedDate, setselectedDate] = useState(
    new Date().toISOString().split("T")[0]
  ); // today date

  useEffect(() => {
    const myfilter = allOrdersFromRedux.filter((item) => {
      if (filterPayment) {
        const itemDate = new Date(item.CreatedAt).toISOString().split("T")[0];
        return itemDate === selectedDate && item.Payment === filterPayment ;
      } else {
        const itemDate = new Date(item.CreatedAt).toISOString().split("T")[0]; //date from orders into same today formate
        return itemDate === selectedDate;
      }
    });

    setfilterData(myfilter);
  }, [selectedDate, filterPayment]);

  return (
    <div className="w-full md:full  h-full px-3  rounded-xl flex flex-col justify-center items-center ">
      {/* Heading Options */}
      <div className="heading w-full rounded-xl bg-(--mainColor) p-2 overflow-x-scroll">
        <h3 className="font-[logo] font-semibold text-xl mb-2 ">
          Daily Sale Sheet
        </h3>

        {/* Options */}
        <div className="w-full flex justify-around items-center">
          <div className="Date flex flex-col justify-center items-center gap-3">
            <img src={calender} className="w-10 md:w-24 cursor-pointer" title="show all orders" 
            onClick={()=> setfilterPayment('')
            }/>
            <h3
              onClick={() => setfilter("Date")}
              className="cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out font-[logo] text-sm md:text-2xl rounded-4xl bg-white px-1 md:px-4 py-1 flex justify-center items-center md:gap-3"
            >
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setselectedDate(e.target.value)}
                className="cursor-pointer"
              />
            </h3>
          </div>

          <div className="Date flex flex-col justify-center items-center gap-3">
            <img src={easyPaisa} className="w-10 md:w-24" />
            <h3
              onClick={() => setfilterPayment("EasyPaisa")}
              className="cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out font-[logo] text-sm md:text-2xl rounded-4xl bg-white px-1 md:px-4 py-1 flex justify-center items-center gap-1 md:gap-3"
            >
              <div
                className={`${
                  filterPayment === "EasyPaisa" ? "bg-green-400" : ""
                } w-4 h-4  border rounded-full`}
              ></div>
              EasyPaisa
            </h3>
          </div>

          <div className="Cash flex flex-col justify-center items-center gap-3">
            <img src={cash} className="w-10 md:w-24" />
            <h3
              onClick={() => setfilterPayment("Cash")}
              className="cursor-pointer hover:scale-95 transition-all duration-300 ease-in-out font-[logo] text-sm md:text-2xl rounded-4xl bg-white px-1 md:px-4 py-1 flex justify-center items-center gap-1  md:gap-3"
            >
              <div
                className={`${
                  filterPayment === "Cash" ? "bg-green-400" : ""
                } w-4 h-4  border rounded-full `}
              ></div>{" "}
              Cash
            </h3>
          </div>
        </div>
      </div>

      {/* Table Container */}

      <div className="Table w-full py-6 px-2 ">
        <table className="border-collapse border border-gray-300 w-full ">
          <thead className="bg-(--mainColor)/20 font-[logo] ">
            <tr>
              <th className="border border-gray-300 px-1 md:px-4 py-2 ">Order No</th>
              <th className="border border-gray-300 px-4 md:px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 md:px-4 py-2">Payment</th>
              <th className="border border-gray-300 px-4 md:px-4 py-2">Amount</th>
            </tr>
          </thead>

          {/* data from redux and map */}
          <tbody>
            {filterData?.map((item, index) => {
              //accumulator for grand Total

              //date formating
              const date = new Date(item.CreatedAt);
              const formattedDate = `${date.getDate()} ${date.toLocaleString(
                "default",
                { month: "short" }
              )} ${date.getFullYear().toString().slice(-2)}`;

              return (
                <tr className="text-center text-sm md:text-xl">
                  <td className="border border-gray-300 px-1 md:px-4 py-2 ">
                    {item.OrderNumber}
                  </td>
                  <td className="border border-gray-300 px-1 md:px-4 py-2 ">
                    {formattedDate}
                  </td>
                  <td className="border border-gray-300 px-1 md:px-4 py-2 ">
                    {item.Payment}
                  </td>
                  <td className="border border-gray-300 px-1 md:px-4 py-2 ">
                    Rs.{item.GrandTotal.toLocaleString()}/-
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tfoot>
            <tr className="text-center text-xl font-semibold font-[logo]">
              <td></td>
              <td></td>
              <td className="border border-gray-300 px-4 py-2 ">Total:</td>
              <td className="border border-gray-300 px-4 py-2 ">
                {accum.toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Home;
