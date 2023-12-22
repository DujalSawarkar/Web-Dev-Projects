import React from "react";
import logo from "../imgs/SHOP.CO.png";
import FooterCard from "./FooterCard";
import visa from "../imgs/PaymentImg/visa.png";
import ApplePay from "../imgs/PaymentImg/ApplePay.png";
import Badge from "../imgs/PaymentImg/Badge.png";
import Gpay from "../imgs/PaymentImg/GPay.png";
import Paypal from "../imgs/PaymentImg/Paypal.png";
import "./Footer.css";
import { IoLogoTwitter } from "react-icons/io";
import { LuFacebook } from "react-icons/lu";
import { RiInstagramLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
const Footer = (props) => {
  const FooterData = props.FooterData;
  return (
    <div className="Footer-Main">
      <div className="Footer-Main-Upper">
        <div className="Footer-Main-Upper-Heading">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </div>
        <div className="Footer-Main-Upper-Form">
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe to Newsletter</button>
        </div>
      </div>
      <div>
        <div className="Card-Section">
          <div className="Card-Section-Div1">
            <img src={logo} alt="Your Logo" />
            <br />
            <br />
            <p>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <br />
            <div className="logo-div">
              <div className="footer-logo">
                <IoLogoTwitter />
              </div>
              <div className="footer-logo">
                <LuFacebook />
              </div>
              <div className="footer-logo">
                <RiInstagramLine />
              </div>
              <div className="footer-logo">
                <FaGithub />
              </div>
            </div>
          </div>

          {FooterData.map((e) => (
            <FooterCard key={e.id} FooterData={e} />
          ))}
          
        </div>
    
        <hr  />
        <div className="Payment-div">
          <div className="Payment-div-text">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
          <div className="payment-img">
            <div>
              <img src={visa} alt="#" />
            </div>
            <div>
              <img src={ApplePay} alt="#" />
            </div>
            <div>
              <img src={Gpay} alt="#" />
            </div>
            <div>
              <img src={Badge} alt="#" />
            </div>
            <div>
              <img src={Paypal} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
