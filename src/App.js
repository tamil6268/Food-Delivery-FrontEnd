import Routing from ".//Routes/Route";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
};
export default App;

// //Referance:

// import React, { createContext, useContext, useEffect, useState } from "react";
// import "./App.css";

// const cartCtx = createContext();
// const API="http://localhost:8080"

// export default function App() {
//   const [mobiles, setMobiles] = useState([]);

//   useEffect(() => {
//     fetch(`${API}/mobile`)
//       .then((data) => data.json())
//       .then((mobile) => setMobiles(mobile));
//   }, []);

//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     fetch(`${API}/cart`)
//       .then((data) => data.json())
//       .then((cartlist) => setCart(cartlist));
//       console.log(cart);
//   }, [cart]);

//   const updateCart = ({ mobile, type }) => {
//     fetch(`${API}/cart?type=${type}`,{
//       method:'PUT',
//       body: JSON.stringify(mobile),
//       headers:{
//         "Content-Type":"application/json"
//       },}).then((data) => data.json())
//       .then((cartlist) => setCart(cartlist));

//   };

//   return (
//     <div id="container">
//       <cartCtx.Provider value={[cart, mobiles, updateCart]}>
//         <PhoneList />
//         <CartList />
//       </cartCtx.Provider>
//     </div>
//   );
// }

// function PhoneList() {
//   const [, mobiles] = useContext(cartCtx);
//   return (
//     <div id="parent">
//       {mobiles.map((mobile, index) => (
//         <Phone mobile={mobile} key={index} />
//       ))}
//     </div>
//   );
// }

// function Phone({ mobile }) {
//   const [, , updateCart] = useContext(cartCtx);
//   return (
//     <div id="child">
//       <img src={mobile.img} alt={mobile.model} className="phone-img" />
//       <h2 className="phone-name">{mobile.model}</h2>
//       <p>{mobile.company}</p>
//       <h2>Price: {mobile.price}</h2>
//       <button onClick={() => updateCart({ mobile, type: "increment" })}>
//         Add-to-Cart
//       </button>
//     </div>
//   );
// }

// function CartList() {
//   const [cart] = useContext(cartCtx);

//   return (
//     <div id="parent">
//       <h1>Cart List</h1>
//       {cart.map((mobile) => (
//         <CartItem mobile={mobile} key={mobile._id} />
//       ))}
//     </div>
//   );
// }

// function CartItem({ mobile }) {
//   const [, , updateCart] = useContext(cartCtx);
//   return (
//     <div id="child">
//       <img src={mobile.img} alt={mobile.model} className="phone-img" />
//       <div>
//         <h2 className="cart-item-name">{mobile.model}</h2>
//         <p className="cart-item-company">{mobile.company}</p>
//         <p className="cart-item-quantity">
//           <h2>Price: {mobile.price}</h2>
//           <button onClick={() => updateCart({ mobile, type: "increment" })}>
//             +
//           </button>
//           <span>&nbsp; Quantity: &nbsp;</span>
//           {mobile.qty}
//           &nbsp;
//           <button onClick={() => updateCart({ mobile, type: "decrement" })}>
//             -
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }
