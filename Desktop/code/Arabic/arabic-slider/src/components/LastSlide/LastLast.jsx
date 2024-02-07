import React from "react";
import logo from "../../assets/images/last/logo.svg";

const LastLast = () => {
  return (
    <div className="last_footer" style={{height:"100vh"}}>
      <div
        className="text-end pt-5 container"
        data-aos="zoom-in-left"
        data-aos-duration="1200 "
      >
        <img src={logo} alt="" style={{ zIndex: "10000" }} />
      </div>

      <div className="last-slie-text-heading">
        <div className="container text-end">
          <h2 data-aos="zoom-in-left" data-aos-duration="1700" style={{color:"white"}}>
            شكراً لكم
          </h2>
        </div>
      </div>

      <div
        className="slide-contain-bg"
        data-aos="zoom-in-left"
        data-aos-duration="1800"
      ></div>

      <img
        src="/banner/last-bg.jpg"
        className="last-bg-image" 
        style={{ objectFit: "conver", width: "100vw", height: "100vh",position:"absolute",left:"0",top:"0",zIndex:"-10" }}
      />
      <div
        style={{backgroundColor:"rgba(0,0,0,.5)",width: "100vw", height: "100vh",position:"absolute",left:"0",top:"0",zIndex:"-10" }}
      >
      </div>
    </div>
  );
};

export default LastLast;
