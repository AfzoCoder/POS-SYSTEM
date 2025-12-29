//Colddrink
import pepsiNR from "./assets/FoodImages/pepsi/NR-removebg-preview.png";
import pepsiHalfLtr from "./assets/FoodImages/pepsi/halfLtr-removebg-preview.png";
import pepsiLtr from "./assets/FoodImages/pepsi/1Ltr-removebg-preview.png";
import pepsiOneAndHalfLtr from "./assets/FoodImages/pepsi/1.5Ltr-removebg-preview.png";

import sevenUpNR from "./assets/FoodImages/7up/NR-removebg-preview.png";
import sevenUpHalfLtr from "./assets/FoodImages/7up/halfLtr.png";
import sevenUpLtr from "./assets/FoodImages/7up/7UP_1L_removebg-preview.png";
import sevenUpOneAndHalfLtr from "./assets/FoodImages/7up/7up_pet_1.5ltr.png";

import DewNR from "./assets/FoodImages/dew/nrDEW-removebg-preview.png";
import DewHalfLtr from "./assets/FoodImages/dew/halfLtr-removebg-preview.png";
import DewLtr from "./assets/FoodImages/dew/ltrDEW-removebg-preview.png";
import DewOneAndHalfLtr from "./assets/FoodImages/dew/1.5-removebg-preview.png";

// burger images
import Dynamite from "./assets/FoodImages/Burgers/DynamiteBurger.png";
import Patty from "./assets/FoodImages/Burgers/pattyBurger.png";
import EggBurger from "./assets/FoodImages/Burgers/EggBurger.png";
import PizzaBurger from "./assets/FoodImages/Burgers/PIZZABURGER.png";
import Zinger from "./assets/FoodImages/Burgers/Zinger.png";
import HalalSpl from "./assets/FoodImages/Burgers/HALABSPL.jpg";

//Fries
import RegularFries from "./assets/FoodImages/Fries/plan_fries-removebg-preview.png";
import LoadedFires from "./assets/FoodImages/Fries/loaded_Fries-removebg-preview.png";

//Fries
import Pasta from "./assets/FoodImages/Pasta/pasta-removebg-preview.png";


//Paratha Rolls
import ChickenRoll from "./assets/FoodImages/ParathaRolls/chickenRoll.jpg";
import zingerROLL from "./assets/FoodImages/ParathaRolls/zingerROLL.jpg";
import KABARrOLL from "./assets/FoodImages/ParathaRolls/KABARrOLL.jpg";

//Wings
import SixWings from "./assets/FoodImages/Wings/6wigs.png";
import TwelveWings from "./assets/FoodImages/Wings/12wings.png";


//Nuggets
import SixNuggets from "./assets/FoodImages/Nuggets/6-Piece-Nuggets-removebg-preview.png";
import TwelveNuggets from "./assets/FoodImages/Nuggets/12_nugets-removebg-preview.png";

//Pizzas
import Tikka from "./assets/FoodImages/Pizzas/tikka.png";
import Fajita from "./assets/FoodImages/Pizzas/FAJITA-removebg-preview.png";
import Vegitable from "./assets/FoodImages/Pizzas/veg-removebg-preview (1).png";
//spl pizzas
import CrownCrust from "./assets/FoodImages/Pizzas/CROWN-removebg-preview.png";
import PizzaSpecial from "./assets/FoodImages/Pizzas/spl.jpg";
import ChickenSupreme from "./assets/FoodImages/Pizzas/supreme-removebg-preview.png";
import HalabSpecial from "./assets/FoodImages/Pizzas/HALABSPL-removebg-preview.png";

//Student Deals
import StudentDealOne from "./assets/FoodImages/Deals/Std1.png";
import StudentDealTwo from "./assets/FoodImages/Deals/Std2.png";
import StudentDealThree from "./assets/FoodImages/Deals/Std-3.png";

// Family Box Deals
import FamilyBoxOne from "./assets/FoodImages/Deals/box1.png";
import FamilyBoxTwo from "./assets/FoodImages/Deals/box2.png";
import FamilyBoxThree from "./assets/FoodImages/Deals/box3.png";


// MidNight Deals
import MidnightOne from "./assets/FoodImages/Deals/mid1.png";
import MidnightTwo from "./assets/FoodImages/Deals/mid2.png";
import MidnightThree from "./assets/FoodImages/Deals/mid3.png"

let allItemsData = [
  //--------------pizza-------------------
  // Tikka 
  {
    img: Tikka,
    name: "Pizza Tikka",
    type: "Pizza",
    S: 650,
    M: 1099,
    L: 1399,
    XL:1800,
  },
  // Fajita
  {
    img: Fajita,
    name: "Pizza Fajita",
    type: "Pizza",
    S: 650,
    M: 1099,
    L: 1399,
    XL:1800,
  },
  // Vegitable
  {
    img: Vegitable,
    name: "Pizza Veg",
    type: "Pizza",
    S: 650,
    M: 1099,
    L: 1399,
    XL:1800,
  },

  // -----------expensive PIZZAS------------
  // Crown Crust
  {
    img: CrownCrust,
    name: "Crown Crust",
    type: "Pizza",
    M: 1399,
    L: 1699,
    XL:2099,
  },
  // PizzaSpecial
  {
    img: PizzaSpecial,
    name: "Pizza Special",
    type: "Pizza",
   M: 1399,
    L: 1699,
    XL:2099,
  },
  // ChickenSupreme
  {
    img: ChickenSupreme,
    name: "Chicken Supreme",
    type: "Pizza",
   M: 1399,
    L: 1699,
    XL:2099,
  },
  // HalabSpecial
  {
    img: HalabSpecial,
    name: "Halab Special",
    type: "Pizza",
    M: 1399,
    L: 1699,
    XL:2099,
  },
  // -------------Drinks-------------------
  // Dew pic
  {
    img: DewNR,
    img2: DewHalfLtr,
    img3: DewLtr,
    img4: DewOneAndHalfLtr,
    name: "Dew",
    type: "ColdDrink",
    NR: 100,
    0.5: 130,
    "1L": 170,
    1.5: 220,
  },

  // 7up pic
  {
    img: sevenUpNR,
    img2: sevenUpHalfLtr,
    img3: sevenUpLtr,
    img4: sevenUpOneAndHalfLtr,
    name: "7Up",
    type: "ColdDrink",
   NR: 100,
    0.5: 130,
    "1L": 170,
    1.5: 220,
  },

  // pepsi pic
  {
    img: pepsiNR,
    img2: pepsiHalfLtr,
    img3: pepsiLtr,
    img4: pepsiOneAndHalfLtr,
    name: "Pepsi",
    type: "ColdDrink",
     NR: 100,
    0.5: 130,
    "1L": 170,
    1.5: 220,
  },
  //----------------Burgers-----------------
  //zinger Burger
  {
    img:Zinger, //:TODO:
    name: "Zinger Bgr",
    type: "Burgers",
    price: 400,
  },
  //patty Burger
  {
    img: Patty,
    name: "Patty Bgr",
    type: "Burgers",
    price: 300,
  },
  //Egg Burger
  {
    img: EggBurger,
    name: "Egg Bgr",
    type: "Burgers",
    price: 200,
  },
  //Dynamite Burger
  {
    img: Dynamite,
    name: "Dynamite",
    type: "Burgers",
    price: 500,
  },
  //Halab Special Burger
  {
    img: HalalSpl,
    name: "Halab Spl BRG",
    type: "Burgers",
    price: 550,
  },
  //Pizza Burger
  {
    img: PizzaBurger,
    name: "Pizza Burger",
    type: "Burgers",
    price: 600, 
  },
  // ------------------Fries-------------------
  //Regular
  {
    img: RegularFries,
    name: "Regular Fries",
    type: "Fries",
    price: 200,
  },
  // Loaded Fries
  {
    img: LoadedFires,
    name: "Loaded Fries",
    type: "Fries",
    price: 400,
  },
  //-------------------Pasta------------------
  {
    img: Pasta,
    name: "pasta",
    type: "Pasta",
    price: 600,
  },

  //-------------------Rolls------------------

// Chicken roll
  {
    img: ChickenRoll,
    name: "Chicken Paratha Roll",
    type: "Paratha Rolls",
    price: 300,
  },
// Zinger roll
  {
    img: zingerROLL,
    name: "Zinger Paratha Roll",
    type: "Paratha Rolls",
    price: 350,
  },
// Kabab roll
  {
    img: KABARrOLL,
    name: "Kabab Paratha Roll",
    type: "Paratha Rolls",
    price: 400,
  },
   //-------------------Wings------------------

// 6 wings
  {
    img: SixWings,
    name: "Wings - 6 Pcs ",
    type: "Wings",
    price: 400,
  },

// 12 wings
  {
    img: TwelveWings,
    name: "Wings - 12 Pcs",
    type: "Wings",
    price: 850,
  },
   //-------------------Nuggets------------------

// 6 Nuggets
  {
    img: SixNuggets,
    name: "Nuggets - 6 Pcs ",
    type: "Nuggets",
    price: 400,
  },
// 12 Nuggets
  {
    img: TwelveNuggets,
    name: "Nuggets - 12 Pcs ",
    type: "Nuggets",
    price: 800,
  },

  //---------------------Deals------------------
  //Student Deal 1
  {
    img: StudentDealOne,
    name: "Student Deal - 1",
    type: "Deals",
    price: 650,
  },
  //StudentDealTwo 
  {
    img: StudentDealTwo ,
    name: "Student Deal - 2",
    type: "Deals",
    price: 1250,
  },
  //Student Deal 3
  {
    img: StudentDealThree,
    name: "Student Deal - 3",
    type: "Deals",
    price: 2100,
  },

  //Family Box 1
  {
    img: FamilyBoxOne,
    name: "Family Box - 1",
    type: "Deals",
    price: 2200,
  },
  //Family Box 2
  {
    img: FamilyBoxTwo,
    name: "Family Box - 2",
    type: "Deals",
    price: 3400,
  },
  //Family Box 3
  {
    img: FamilyBoxThree,
    name: "Family Box - 3",
    type: "Deals",
    price: 3600,
  },
  
  //MidNight 1
  {
    img: MidnightOne,
    name: "Midnight Deal - 1",
    type: "Deals",
    price: 1150,
  },
  //MidNight 2
  {
    img: MidnightTwo,
    name: "Midnight Deal - 2",
    type: "Deals",
    price: 1550,
  },
  //MidNight 3
  {
    img: MidnightThree,
    name: "Midnight Deal - 3",
    type: "Deals",
    price: 1900,
  },
];

export default allItemsData;
