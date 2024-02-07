import React from "react";
import "./FourthSlide.scss";
import img1 from "../../assets/images/FourthSlide/1.png";
import img2 from "../../assets/images/FourthSlide/2.png";
import img3 from "../../assets/images/FourthSlide/3.png";
import img4 from "../../assets/images/FourthSlide/4.png";
import logo from "../../assets/images/FourthSlide/1.svg";
import logo2 from "../../assets/images/FourthSlide/2.svg";
import logo3 from "../../assets/images/FourthSlide/3.svg";
import logo4 from "../../assets/images/FourthSlide/4.svg";
import logo11 from "../../assets/images/FourthSlide/11.svg";
import logo22 from "../../assets/images/FourthSlide/22.png";
import logo33 from "../../assets/images/FourthSlide/33.png";
import circle from "../../assets/images/FourthSlide/circle.svg";
import img11 from "../../assets/images/banner/111.png";
import img22 from "../../assets/images/banner/222.png";
import img33 from "../../assets/images/banner/333.png";
import img44 from "../../assets/images/banner/444.png";

const FourthSlide = () => {
  const data = [
    {
      id: "1",
      img: logo,
    },
    {
      id: "2",
      img: logo2,
    },
    {
      id: "3",
      img: logo3,
    },
    {
      id: "4",
      img: logo4,
    },
  ];

  const images = [
    {
      id: 1,
      img: img11,
      time: "1200",
    },
    {
      id: 2,
      img: img22,
      time: "1300",
    },
    {
      id: 3,
      img: img33,
      time: "1400",
    },
    {
      id: 1,
      img: img44,
      time: "1500",
    },
  ];

  const data2 = [
    {
      id: "1",
      img: logo11,
    },
    {
      id: "2",
      img: logo22,
    },
    {
      id: "3",
      img: logo33,
    },
  ];

  return (
    <div className="container py-5">
      <div
        className="fourth-header"
        data-aos="zoom-in-left"
        data-aos-duration="1200"
      >
        <h2 className="text-end semi-bold">
          {" "}
          أفضل الممارسات <span style={{ color: "#0a9ba5" }}>(الحلول)</span>
        </h2>
      </div>
      <div className="row mt-4">
        <div
          className="col-lg-4 mt-4"
          data-aos="zoom-in-left"
          data-aos-duration="1300"
        >
          <div className="fourth-image-slide">
            <img src={img1} alt="" />
          </div>
        </div>
        <div
          className="col-lg-8 mt-4"
          data-aos="zoom-in-left"
          data-aos-duration="1500"
        >
          <div className="fourth-image-slide">
            <img src={img2} alt="" />
          </div>
        </div>

        <div
          className="col-lg-6 mt-5"
          data-aos="zoom-in-left"
          data-aos-duration="1600"
        >
          <div className="fourth-image-slide">
            <img src={img3} alt="" />
          </div>
        </div>

        <div
          className="col-lg-6 mt-5"
          data-aos="zoom-in-left"
          data-aos-duration="1600"
        >
          <div className="fourth-image-slide">
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
      {/*  */}
      <div
        className="fourth-header mt-5 pt-5"
        data-aos="zoom-in-left"
        data-aos-duration="1000"
      >
        <h2 className="text-end mt-5 semi-bold">
          {" "}
          أفضل الممارسات <span style={{ color: "#0a9ba5" }}>(الحلول)</span>
        </h2>
      </div>
      {/*  */}
      <div className="relative___part___image">
        <div className="row mt-5">
          {images.map((item) => {
            return (
              <div
                key={item.id}
                className="col-lg-6 mt-3"
                data-aos="zoom-in-left"
                data-aos-duration={item.time}
              >
                <div className="fourth-slide-image">
                  <img src={item.img} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        {/*  */}
        <div
          className="position-absolute-image-resize"
          data-aos="zoom-in"
          data-aos-duration="1700"
        >
          <img src={circle} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FourthSlide;
