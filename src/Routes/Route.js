import "../App.css";
import { Routes, Route } from "react-router-dom";
import { Form, Signup, Login } from "../Component/Form";
import Home from "../Component/Home";
import { useState, useEffect } from "react";
import { createContext } from "react";

export const context = createContext();

const Routing = () => {
  const [toggle, setToggle] = useState(true);
  const orderDetails={
    collections:{"Dosa2":2,
        "Thundoori":10 ,"Rotti":2,
        "Allu gobi":2,
        "Masala Chat":8,
        "Nasta":20,
        "Panneer Butter":15,
        "Butter Non":10,
        "Vendi Masala":4,
        "Dhaal Goobi":10}
  }
  useEffect(() => {
    setTimeout(() => {
      setToggle(false);
    }, 6000);
  }, []);
  const Loading = () => {
    return (
      <>
        <div id="loader">
          <div></div>
          <h2 style={{ color: "white", fontSize: "30px" }}>
            .......LOADING......
          </h2>
        </div>
      </>
    );
  };
  return (
    <context.Provider value={orderDetails}>
      <Routes>
        <Route exact path="/" element={<Form />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/user/home"
          element={toggle ? <Loading /> : <Home />}
        ></Route>
      </Routes>
    </context.Provider>
  );
};
export default Routing;
