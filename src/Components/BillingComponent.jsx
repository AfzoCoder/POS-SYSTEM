import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md"; //delete icon
import { HiMiniArrowTurnRightDown } from "react-icons/hi2"; //icon
import { BsPrinter } from "react-icons/bs";
import easyPaisa from "./../assets/OtherImages/Easypaisa_Logo-removebg-preview.png";
import cash from "./../assets/OtherImages/cash-removebg-preview.png";

import { IoArrowBackOutline } from "react-icons/io5";

import {
  deleteFromCart,
  OrderCompleted,
  OrderNumberIncreaser,
  addRemarks,
} from "../Feature/CartSlice";

// Sound effects 🛎️
const bellSound = new Audio("/Sounds/bill.mp3");
const deleteSound = new Audio("/Sounds/delete.mp3");

const playBell = () => {
  bellSound.currentTime = 0;
  bellSound.play();
};
const playDelete = () => {
  deleteSound.currentTime = 0;
  deleteSound.play();
};

const billingComponent = () => {
  const CartItems = useSelector((state) => state.cart.CartArray);
  const OrderNumber = useSelector((state) => state.cart.OrderNumber);
  const Remarks = useSelector((state) => state.cart.Remarks);

  const dispatch = useDispatch();

  // for order numbering
  const [OrderNo, setOrderNo] = useState(1);
  const [payment, setpayment] = useState("");
  const [AdminRemarks, setAdminRemarks] = useState("");

  const [PrintAndSaveBTNS, setPrintAndSaveBTNS] = useState(false); //admin first click Payment then can see these btns

  const prevCount = useRef();
  useEffect(() => {
    prevCount.current = OrderNo;
  }, [OrderNo]);

  // Grand total with acc
  const GrandTotal = CartItems.reduce(
    (acc, item) =>
      item.type === "Pizza"
        ? acc + item[item.selectedSize] * item.quantity
        : item.type === "ColdDrink"
        ? acc + item[item.selectedDrinkSize] * item.quantity
        : acc + item.price * item.quantity,
    0
  );

  const discountArray = [0, 5, 10, 15];
  const [showDiscount, setshowDiscount] = useState(false);
  const [Discount, setDiscount] = useState(0);
  const [showBill, setshowBill] = useState(false);

  // print Handler
  let printFunction = () => {
    window.print();
  };

  return (
    <div className=" billing  flex-1/4 bg-white overflow-hidden min-h-20 px-4 rounded-xl ">
      <div className="flex-1/4   bg-white h-full p-4 rounded-xl font-[logo] font-semibold text-xl">
        <h1>Bill</h1>

        <div className="mt-2  flex flex-col  gap-2 justify-center items-center">
          {/* Grand Total Div */}
          <div className="grandTotalBox text-gray-500 flex  justify-between items-center font-semibold w-full py-3 px-2 bg-(--mainColor) rounded-xl">
            Grand Total:
            <span className="font-semibold text-white text-2xl ">
              {Discount
                ? Math.floor(GrandTotal - (GrandTotal / 100) * Discount)
                : Math.floor(GrandTotal).toLocaleString()}
              /-
            </span>
          </div>

          <div className="theBillingContainer p-2 w-full">
            <h2>
              Next Order#
              <span className="ml-2 text-red-500">{OrderNumber}</span>
            </h2>

            {/* maping on redux store Cart */}
            <div className="overflow-y-scroll max-h-90">
              {CartItems.map((item) => {
                return (
                  <div className="w-full py-2 flex  justify-between items-center text-sm">
                    {/* delete Handler  ---------------*/}
                    <div
                      className="delte"
                      onClick={() => {
                        playDelete()
                        dispatch(deleteFromCart(item));
                      }}
                    >
                      <MdDelete
                        className="text-red-500/50 hover:text-red-500 cursor-pointer"
                        title="delete"
                      />
                    </div>

                    {/* image and price */}
                    <div>
                      <h3 className="text-xs text-gray-400 flex">
                        {item.type === "Pizza"
                          ? item[item.selectedSize]
                          : item.type === "ColdDrink"
                          ? item[item.selectedDrinkSize]
                          : item.price}
                        <HiMiniArrowTurnRightDown />
                      </h3>
                      <img
                        src={
                          item.type === "ColdDrink" &&
                          item.selectedDrinkSize == "NR"
                            ? item.img
                            : item.type === "ColdDrink" &&
                              item.selectedDrinkSize == "0.5"
                            ? item.img2
                            : item.type === "ColdDrink" &&
                              item.selectedDrinkSize == "1"
                            ? item.img3
                            : item.type === "ColdDrink" &&
                              item.selectedDrinkSize == "1.5"
                            ? item.img4
                            : item.img
                        }
                        alt={`${item.name}`}
                        className="w-12 h-12"
                      />
                    </div>

                    <h3>x</h3>
                    <h3>{` ${item.quantity}`}</h3>
                    <h3>=</h3>
                    <h3>{`${
                      item.type === "Pizza"
                        ? item[item.selectedSize] * item.quantity
                        : item.type === "ColdDrink"
                        ? item[item.selectedDrinkSize] * item.quantity
                        : item.price * item.quantity
                    }`}</h3>
                  </div>
                );
              })}
            </div>

            <div className="line-Brk w-full h-0.5 bg-gray-500"></div>
            {/* Grant total ------------*/}
            <div className="totalDiv flex justify-between items-center">
              <h1>TOTAL:</h1>
              <h1>
                {Discount
                  ? Math.floor(GrandTotal - (GrandTotal / 100) * Discount)
                  : Math.floor(GrandTotal)}
              </h1>
            </div>

            {/* discount */}
            <div className="text-xs flex gap-2 justify-start items-start">
              <button
                onClick={() => setshowDiscount((prev) => !prev)}
                className={`"text-gray-300  cursor-pointer ${
                  Discount > 0 ? "text-green-400" : ""
                }`}
              >
                Discount
              </button>

              <ul
                className={`${
                  showDiscount ? "inline-flex border" : "hidden"
                }  flex-col gap-2 rounded-2xl p-2 `}
              >
                {discountArray.map((discount) => {
                  return (
                    <li
                      onClick={() => {
                        setDiscount(discount);
                        setshowDiscount(false);
                      }}
                      className={`"inline-block hover:text-green-400 cursor-pointer ${
                        Discount === discount ? "text-green-400" : ""
                      }`}
                    >
                      {discount}%
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Remarks textArea */}
          <div className=" w-full text-lg">
            <textarea
              value={AdminRemarks}
              onChange={(e) => setAdminRemarks(e.target.value)}
              placeholder="Remarks or Phone Number..."
              className="remakrsInput min-h-12 outline-0 mt-5 w-full p-2 rounded-lg border text-wrap"
            ></textarea>
          </div>

          <button
            onClick={() => {
              if (CartItems.length < 1) {
                return;
              } else {
                setshowBill(true);
                dispatch(addRemarks(AdminRemarks));
              }
            }}
            className="w-full bg-(--mainColor) px-4 py-2 rounded-xl text-white cursor-pointer mt-3 hover:shadow-2xl active:scale-95 hover:bg-amber-300"
          >
            Done
          </button>
        </div>
      </div>

      {/* -------------------------------INVOICE 🖨️--------------------------------- */}
      <div
        className={`${
          showBill ? "fixed" : "hidden"
        }  top-0 left-0 w-full h-full bg-black/70`}
      >
        <div className=" w-full h-full flex justify-center items-center">
          {/* invoice div */}
          <div className="BillSlip overflow-y-scroll  PrintDiv relative bg-[#F4F5EF] p-8 h-[90%] rounded-3xl w-[80%] md:w-[50%] lg:w-[30%]">
            {/* CLOSE the bill */}
            <h1
              onClick={() => setshowBill(false)}
              title="close"
              className="absolute PrintHide right-6 top-1  cursor-pointer hover:text-red-500  text-2xl text-gray-500 "
            >
              X
            </h1>

            <div className=" flex  justify-around items-center">
              <h1 className="logo my-2 md:my-5 font-[logo] font-semibold text-lg md:text-2xl">
                Halab Kitchen
              </h1>
              <h1 className="Bill font-[Muck] my-2 md:my-5 text-2xl md:text-5xl  font-semibold ">
                INVOICE
              </h1>
            </div>

            <div className="shopDetails text-xs flex justify-between items-center font-bold ">
              <div>
                <h3 className="font-bold text-sm">Bill Generated By:</h3>
                <h4>Halab Kitchen, Roopwal</h4>
                <h4>
                  Order No #{" "}
                  <span className="text-red-500 font-bold text-xl">
                    {OrderNumber}
                  </span>
                </h4>
              </div>

              <div>
                <h4>0319-9787737</h4>
                <h4>0312-4642343</h4>
              </div>
            </div>

            <div className="w-full my-8  ">
              <hr className="my-1" />

              <div className=" heading flex justify-between items-center font-bold">
                <h3 className="flex-4">Item</h3>
                <h3 className="flex-3">Qty</h3>
                <h3 className="flex-3">Unit Price</h3>
                <h3 className="flex-3">Total</h3>
              </div>

              <hr className=" my-1" />

              <div className="">
                {/* maping for bill */}
                {CartItems.map((item) => {
                  return (
                    <div className="flex border-b">
                      {/* item name */}
                      <h3 className="flex-4 leading-tight">
                        {item.type === "Pizza"
                          ? item.name + "(" + item.selectedSize + ")"
                          : item.type === "ColdDrink"
                          ? item.name + "(" + item.selectedDrinkSize + ")"
                          : item.name}
                      </h3>

                      {/* item quantity */}
                      <h3 className="flex-3">{item.quantity}</h3>

                      {/* pizza price */}
                      <h3 className="flex-3">
                        {item.type === "Pizza"
                          ? item[item.selectedSize]
                          : item.type === "ColdDrink"
                          ? item[item.selectedDrinkSize]
                          : item.price}
                      </h3>
                      {/* one item total */}
                      <h3 className="flex-3">
                        {item.type === "Pizza"
                          ? item[item.selectedSize] * item.quantity
                          : item.type === "ColdDrink"
                          ? item[item.selectedDrinkSize] * item.quantity
                          : item.price * item.quantity}
                      </h3>
                    </div>
                  );
                })}
              </div>

              {/* TOTAL */}
              <div className="  flex justify-between items-center text-xl font-bold">
                <div className="flex-4"></div>
                {/* <div className="flex-3"></div> */}
                <div className="relative flex-6 border-b ">
                  TOTAL <br />
                  {/* Discount */}
                  <h4
                    className={`${
                      Discount ? "absolute left-0 top-8" : "hidden"
                    } flex  flex-nowrap text-xs`}
                  >
                    Discount: {Discount}%
                  </h4>
                </div>

                <div className="flex-3 font-[Muck] border-b">{`${
                  Discount
                    ? Math.floor(GrandTotal - (GrandTotal / 100) * Discount)
                    : Math.floor(GrandTotal).toLocaleString()
                }`}</div>
              </div>

              {/* Remarks */}
              <div className="w-full text-wrap">
                <h2 className="text-sm font-bold text-green-700">NOTE:</h2>
                <h4 className="text-wrap w-full">{Remarks}</h4>
              </div>

              {/* Payment Method div---------------- */}
              <div className="paymentMethod w-full p-2 bg-white rounded-xl mt-6 shadow-xl border flex flex-col justify-around items-start ">
                <h2 className="font-[logo] font-semibold">Payment Method:</h2>

                <div className="EasyPaisa+Cash w-full flex justify-around items-center ">
                  {/* easy paisa 1️⃣*/}
                  <div
                    className="easypaisa flex justify-center items-center gap-2 cursor-pointer"
                    onClick={() => {
                      setpayment("EasyPaisa");
                      setPrintAndSaveBTNS(true);
                    }}
                  >
                    <div
                      className={`${
                        payment === "EasyPaisa" ? "bg-green-400" : ""
                      } w-4 h-4 rounded-full  border "`}
                    ></div>
                    <button className="flex justify-center items-center">
                      <img src={easyPaisa} alt="" className="w-6" />
                      <h4>EasyPaisa</h4>
                    </button>
                  </div>

                  {/* Cash 2️⃣*/}
                  <div
                    className="Cash flex justify-center items-center gap-2 cursor-pointer"
                    onClick={() => {
                      setpayment("Cash");
                      setPrintAndSaveBTNS(true);
                    }}
                  >
                    <div
                      className={`${
                        payment === "Cash" ? "bg-green-400 " : ""
                      } w-4 h-4 rounded-full  border "`}
                    ></div>
                    <button className="flex justify-center items-center">
                      <img src={cash} alt="" className="w-8" />
                      <h4>Cash</h4>
                    </button>
                  </div>
                </div>
              </div>

              {/* Thank you */}
              <h2 className=" mt-13 font-[logo] font-semibold">
                Thank you for your Order! 😊
              </h2>

              {/* print/  back btn */}
              <div
                className={` ${
                  PrintAndSaveBTNS ? "flex" : "hidden"
                } Print/SaveButtons w-full  mt-5 justify-around items-center `}
              >
                <button
                  onClick={() => {
                    playBell();
                    setshowBill(false);
                    dispatch(
                      OrderCompleted({ Discount, GrandTotal, payment, Remarks })
                    );
                    dispatch(OrderNumberIncreaser());
                    setpayment("");
                    setAdminRemarks(""); //clearing Admin remarks after submit order
                  }}
                  className="PrintHide active:scale-95 px-4 py-2 flex flex-col justify-center items-center rounded-xl hover:bg-red-400 hover:text-white cursor-pointer border"
                >
                  <IoArrowBackOutline className="PrintHide" />
                  Save & Back
                </button>

                {/* Print btn */}
                <button
                  onClick={() => {
                    printFunction();
                    dispatch(
                      OrderCompleted({ Discount, GrandTotal, payment, Remarks })
                    );
                    setshowBill(false);
                    dispatch(OrderNumberIncreaser());
                    setpayment("");
                    setAdminRemarks(""); //clearing Admin remarks after submit order
                  }}
                  className="PrintHide active:scale-95 px-4 py-2 flex flex-col justify-center items-center rounded-xl hover:bg-green-400 hover:text-white cursor-pointer border "
                >
                  <BsPrinter /> Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default billingComponent;
