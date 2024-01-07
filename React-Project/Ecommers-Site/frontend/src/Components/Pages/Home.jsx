import Rectangle2 from "../imgs/Rectangle2.png";
import Vector from "../imgs/Vector.png";
import Group from "../imgs/Group.png";
import Zara from "../imgs/Zara.png";
import gucci from "../imgs/gucci.png";
import prada from "../imgs/prada.png";
import Calvin from "../imgs/Calvin.png";
import image11 from "../imgs/Cloth-img/image11.png";
import image13 from "../imgs/Cloth-img/image13.png";
import image12 from "../imgs/Cloth-img/image12.png";
import image14 from "../imgs/Cloth-img/image14.png";
// import Data from "../../Data.js";
import Cards from "../Card/Cards.jsx";
import SwiperCard from "../Swiper/SwiperCard.jsx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";
import getdata from "../../Data.js";

// import axios from "axios";

const Home = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    getdata().then((data) => {
      setData(data);
    });
  }, []);

  const head1 = "NEW ARRIVALS";
  const head2 = "TOP SELLINGS";

  return (
    <div className="home-main">
      {console.log(Data)}
      <div className="div1">
        <div className="main-img">
          <div className="main-img-inner">
            <img src={Rectangle2} alt="#" />
            <div className="absolute-div">
              <div className="heading">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </div>
              <p className="Sub-heading">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="Shop-btn">Shop Now</button>
              <div className="numbers">
                <div>
                  <h1>200+</h1>
                  <p>International Brands</p>
                </div>
                <hr />
                <div>
                  <h1>2,000+</h1>
                  <p>High-Quality Products</p>
                </div>
                <hr />
                <div>
                  <h1>30,000+</h1>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Vector-img A">
            <img src={Vector} alt="Star" />
          </div>
          <div className="Vector-img B">
            <img src={Vector} alt="Star" />
          </div>
        </div>
      </div>
      <div className="div2">
        <img src={Group} alt="img" />
        <img src={Zara} alt="img" />
        <img src={gucci} alt="img" />
        <img src={prada} alt="img" />
        <img src={Calvin} alt="img" />
      </div>
      {Data == null ? (
        <div className="loader-div">
          <div class="loader"></div>
        </div>
      ) : (
        <Cards Data={Data} head={head1} key={1} />
      )}
      <hr className="btw-card" />

      {Data == null ? (
        <div className="loader-div">
          <div class="loader"></div>
        </div>
      ) : (
        <Cards Data={Data} head={head2} key={2} />
      )}

      <div className="div4">
        <p>BROWSE BY DRESS STYLE</p>
        <div className="container">
          <div className=" img a">
            <Link to={"/category/casuals"}>
              <h1>Casual</h1>
              <img src={image11} alt="" />
            </Link>
          </div>
          <div className=" img b">
            <Link to={"/category/formals"}>
              <h1>Formal</h1>
              <img src={image13} alt="" />
            </Link>
          </div>
          <div className=" img d">
            <Link to={"/category/party"}>
              <h1>Party</h1>
              <img src={image12} alt="" />
            </Link>
          </div>
          <div className=" img c">
            <Link to={"/category/gym"}>
              <h1>Gym</h1>
              <img src={image14} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="customers-heading">OUR HAPPY CUSTOMERS</div>
      <div className="div5">
        <SwiperCard />
      </div>
    </div>
  );
};
export default Home;
