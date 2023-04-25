import "./Home.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../Routes/Route";

const Home = () => {
  const navigate = useNavigate();
  const [username, SetUsername] = useState("");
  const [home, setHome] = useState([]);

  const data = useContext(context);

  useEffect(() => {
    handleClick();
  }, [username]);
  // const url = ["https://images7.alphacoders.com/910/thumbbig-910442.webp"];
  useEffect(() => {
    fetch("https://food-delivery-berlin.onrender.com/user/home")
      .then((data) => data.json())
      .then((res) => setHome(res));
  }, []);

  const handleClick = () => {
    let token = sessionStorage.getItem("userToken");
    fetch("https://food-delivery-berlin.onrender.com/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        JWTToken: token
      }
    })
      .then((data) => data.json())
      .then((res) => SetUsername(res));
  };

  const handleLogout = () => {
    alert("Welcome Have a Nice Day....");
    let token = sessionStorage.removeItem("userToken");
    navigate("/login");
    return token;
  };

  const handleMouse = (data) => {
    const Pop = document.getElementById("orderDetails");
    Pop.style.display = "flex";
    let finding = Object.entries(data);
    let keys = Object.keys(data);

   Pop.innerHTML=`<h3 style="text-align: center;">Order List's</h3>
   <li>${finding}</li>`

    let values = Object.values(data);
    console.log(keys, values);

    Pop.addEventListener("mouseleave", () => {
      Pop.style.display = "none";
    });
  };

  //orders list
  const OrderItem=()=>{
    alert("booked")
  }

  return (
    <section id="section">
      <nav id="nav-Bar">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzMypMENFj-jOSdTKMzlNKpvMTWHJfqexxg&usqp=CAU"
            height={70}
            alt="404_ERROR"
          />
        </div>
        <div id="stick">|</div>
        <div>
          <h2>Choose Location</h2>
          <input type="text" placeholder="Choose Resturant" />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width={50}
            height={50}
            onClick={handleClick}
          >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
          </svg>
          <h4>{username ? username.user.username : "Username"}</h4>
          <h5>{username ? username.user.email : "Email"}</h5>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width={40}
            height={40}
          >
            <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32H360V134.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V32H120.1C111 12.8 91.6 0 69.5 0H24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
          </svg>
          <h4 onMouseEnter={() => handleMouse(data.collections)}>
            Orders :
            <span style={{ fontSize: "20px", color: "dodgerblue" }}>
              {Object.keys(data.collections).length}
            </span>
          </h4>
          <code>
            Total Items:
            <span style={{ fontSize: "18px", color: "palevioletred" }}>
              {Object.values(data.collections).reduce(
                (sum, cur) => (sum = sum + cur)
              )}
            </span>
          </code>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            width={40}
            height={40}
          >
            <path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
          </svg>
          <h3 style={{ color: "blue", backgroundColor: "white" }}>Free WIFI</h3>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={40}
            height={40}
          >
            <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
          </svg>
          <h4 style={{ color: "red", backgroundColor: "" }}>Reviews</h4>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
            width={40}
            height={40}
          >
            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
          </svg>
          <h4>MENU</h4>
        </div>
        <button
          style={{
            color: "white",
            backgroundColor: "blue",
            width: "80px",
            height: "30px",
            border: "none",
            borderRadius: "20px",
            fontWeight: "700"
          }}
          onClick={handleLogout}
        >
          Log-Out
        </button>
      </nav>
      <header id="header">
        {home.map((item, index) => {
          return (
            <div key={index} id="flex">
              <img src={item.url} alt="404_ERROR" id="circle" />
            </div>
          );
        })}
      </header>
      <div className="side-nav right">
        <img
          src="https://images4.alphacoders.com/854/thumbbig-854547.webp"
          width={320}
          height={260}
          alt="404_ERROR"
        />
        <div className="Heading">
          <h3>ORIGINALS</h3>
        </div>
        <div id="menu">
          <i>- Special Dishes -</i>
          <li className="li">
            <div>Portobello Cheeseburger</div>
            <span>$22.00</span>
          </li>
          <li className="li">
            <div>Garlicky TurkeyBurger</div>
            <span>$35.00</span>
          </li>
          <li className="li">
            <div>Buffalo Burger</div>
            <span>$45.00</span>
          </li>
          <li className="li">
            <div>Chicken Mushroom Burger</div>
            <span>$25.00</span>
          </li>
          <li className="li">
            <div>Asian Chicken Burger</div>
            <span>$37.00</span>
          </li>
        </div>
        <div>
          <br />
          <h2>Reviews </h2>
          <div>
            Diabetic self management சர்க்கரையை வெல்வோம் "Rooms OK room service
            plumbing electrical should be improved"
          </div>
        </div>
        <br />
      </div>
      <div className="side-nav left">
        <div className="Heading">
          <h3>SPECIALS</h3>
        </div>
        <div id="menu">
          <i>- Special Dishes -</i>
          <li className="li">
            <div>Portobello Cheeseburger</div>
            <span>$22.00</span>
          </li>
          <li className="li">
            <div>Garlicky TurkeyBurger</div>
            <span>$35.00</span>
          </li>
          <li className="li">
            <div>Buffalo Burger</div>
            <span>$45.00</span>
          </li>
          <li className="li">
            <div>Chicken Mushroom Burger</div>
            <span>$25.00</span>
          </li>
          <li className="li">
            <div>Asian Chicken Burger</div>
            <span>$37.00</span>
          </li>
        </div>
        <div>
          <br />
          <h2>Contact Us</h2>
          <div>
            <h3>Address: </h3>McDonalds Rd, near Govt tourist office, Melapudur,
            Cantonment, Tiruchirappalli, Tamil Nadu 620001
          </div>
          <div>
            <h3>Phone: </h3>0431 241 4346
          </div>
        </div>
        <br />
        <img
          src="https://images5.alphacoders.com/878/thumbbig-878385.webp"
          width={318}
          height={260}
          alt="404_ERROR"
        />
      </div>
      <main>
        <div>
          <div className="bg-Home-pic">
            <h1 className="title">HOTEL ARIZONA</h1>
            <div id="cumber">
              <div>
                <h4 className="sub-title">Available Foods</h4>
                <ol type="number" id="item">
                  <li>Dosa</li>
                  <li style={{ textDecoration: "line-through" }}>
                    Thundoori Rotti
                  </li>
                  <li>Allu gobi</li>
                  <li style={{ textDecoration: "line-through" }}>
                    Masala Chat
                  </li>
                  <li>Nasta</li>
                  <li style={{ textDecoration: "line-through" }}>
                    Panneer Butter
                  </li>
                  <li>Butter Non</li>
                  <li>Vendi Masala</li>
                  <li style={{ textDecoration: "line-through" }}>
                    Dhaal Goobi
                  </li>
                </ol>
              </div>
              <div>
                <ol type="number" start={10} id="item">
                <li>Dosa
                    <button onClick={OrderItem}>Order</button>
                  </li>
                  {/* <li style={{ textDecoration: "line-through" }}>
                    Thundoori Rotti
                  </li>
                  <li>Dosa
                    <button onClick={OrderItem}>Order</button>
                  </li>
                  <li>Allu gobi</li>
                  <li>Nasta</li>
                  <li style={{ textDecoration: "line-through" }}>
                    Masala Chat
                  </li>
                  <li>Butter Non</li>
                  <li style={{ textDecoration: "line-through" }}>
                    French Fries
                  </li>
                  <li style={{ textDecoration: "line-through" }}>
                    Dhaal Goobi
                  </li>
                  <li>Vendi Masala</li> */}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer id="footer">
        <div>Copy Right.Policy act 2021</div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMgnQqCzOGeWrI2obHCqSOrSJLBBUqFYerg&usqp=CAU"
            alt="404_ERROR"
          />
        </div>
      </footer>
      <div id="orderDetails"></div>
    </section>
  );
};
export default Home;
