import "./Form.css";
import { useNavigate } from "react-router-dom";
import React, {useState } from "react";
import axios from "axios";

export const Form = () => {
  const navigate = useNavigate();

  return (
    <div id="container">
      <img
        src={"https://images5.alphacoders.com/415/415257.jpg"}
        alt="404_ERROR"
        id="bgImg-home"
      />
      <h2 id="Head">Welcome !!</h2>
      <div id="box">
        <button className="btn login" onClick={() => navigate("/login")}>
          LOG IN
        </button>
        <button className="btn signup" onClick={() => navigate("/signup")}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};
export const Signup = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleMessage = () => {
    console.log(message);
    axios
      .get("http://localhost:8080/signup")
      .then((data) => {
        console.log(data);
        setMessage(data.data[0].message);
        console.log(data.data[0].message);
        alert(data.data[0].message);
        if (data.data[0].message === "Succefully Registerd") {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log("Error");
      });
  };
  return (
    <div id="container">
      <div id="responseMessage"></div>

      <img
        src={"https://images5.alphacoders.com/415/415257.jpg"}
        alt="404_ERROR"
        id="bgImg-home"
      />
      <h2 id="Head">Welcome !!</h2>
      <form action="http://localhost:8080/signup" method="post">
        <div id="box">
          <input
            type="text"
            name="username"
            className="input"
            placeholder="Enter Username"
            required
          />
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Enter Password"
            required
          />
          <button className="btn login" type="submit" onClick={handleMessage}>
            SIGN UP
          </button>
          <button className="btn back" onClick={() => navigate("/")}>
            BACK
          </button>
        </div>
      </form>
    </div>
  );
};
export const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSignin = () => {
    axios
      .get("http://localhost:8080/signin")
      .then((data) => {
        console.log(data);
        setMessage(data.data[0].message);
        console.log(data.data[0].message);
        if(data.data[0].message==="Invalid Data"){
            alert("Invalid Data")
        }
        if(data.data[0].message==="LoggedIn Succeffully"){
            alert("LoggedIn Succeffully")
            if(!message){
                alert("Invalid User")
            }else{
            navigate('/user/home')
            sessionStorage.setItem("userToken",data.data[0].jwtToken)
          }
        }
      })
      .catch((error) => {
        console.log("Error");
      });
  };
  return (
    <div id="container">
      <img
        src={"https://images5.alphacoders.com/415/415257.jpg"}
        alt="404_ERROR"
        id="bgImg-home"
      />
      <h2 id="Head">Welcome !!</h2>
      <form action="http://localhost:8080/signin" method="post">
        <div id="box">
          <input
            type="text"
            name="username"
            className="input"
            placeholder="Enter Username"
            required
          />
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Enter Password"
            required
          />
          <button className="btn login" onClick={handleSignin}>
            LOGIN
          </button>
          <button className="btn back" onClick={() => navigate("/")}>
            BACK
          </button>
        </div>
      </form>
    </div>
  );
};
