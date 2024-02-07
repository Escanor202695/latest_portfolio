import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = (handleToggleMinimize) => {
  const locations = [
    {
      id: 1,
      to: "/slide-1",
      text: "تقرير إدارة تجربة العميل",
      src: "/public/banner/1.jpg",
    },
    {
      id: 2,
      to: "/slide-2",
      text: "`مؤشرات الاداء`",
      src: "/public/banner/2nd.jpg",
    },
    {
      id: 3,
      to: "/slide-3",
      text: "صوت العميل",
      src: "/public/frame/3.jpg",
    },
    {
      id: 4,
      to: "/slide-4",
      text: "إدارة المنتجات`",
      src: "/public/banner/online-marketing.jpg",
    },
    {
      id: 5,
      to: "/slide-5",
      text: "`المهام التشغيلية`",
      src: "/public/banner/slide5.jpg",
    },
    {
      id: 6,
      to: "/slide-6",
      text: "موقع البنك",
      src: "/public/banner/slide6.jpg",
    },
    {
      id: 7,
      to: "/slide-7",
      text: "المتسوق الخفي",
      src: "/public/banner/slide7.jpg",
    },
    {
      id: 8,
      to: "/slide-8",
      text: "الفروع",
      src: "/public/banner/slide8.jpg",
    },
    {
      id: 9,
      to: "/slide-9",
      text: "التواصل",
      src: "/public/banner/banner9.jpg",
    },
    {
      id: 10,
      to: "/slide-10",
      text: " المشاركة المجتمعية",
      src: "/public/banner/10.jpg",
    },
    {
      id: 11,
      to: "/slide-11",
      text: "`برنامج ولاء العميل`",
      src: "/public/banner/last.jpg",
    },
  ];

  return (
    <div className={`transform-navbar`}>
      <div className="scroll-container">
        {locations.map((location) => (
          <Link
            key={location.id}
            to={location.to}
            className="slide-box"
            onClick={handleToggleMinimize}
          >
            <img src={location.src} alt={location.label} />
            <div style={{backgroundColor:"rgba(0,0,0,.3)",position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}></div>
            <p>{location.text}</p>
          </Link>
        ))}
        <Link
          key={12}
          to={`/slide-12`}
          className="slide-box"
          onClick={handleToggleMinimize}
        >
          <img src={`/public/banner/last-bg.jpg`} alt={`Slide11`} />
          <p>{`شكراً لكم`}</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
