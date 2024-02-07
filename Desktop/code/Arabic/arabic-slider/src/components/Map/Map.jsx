import React, { useState } from "react";
import "./map.css";
import LocationIcon from "./location"; // Replace with your actual location icon image
import { Link } from "react-router-dom";

const Map = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const handleLocationHover = (locationId) => {
    setHoveredLocation(locationId);
  };

  return (
    <>
      <div className="container-map">
        <img
          src="/src/assets/images/logo/right.png"
          style={{
            position: "fixed",
            left: "20px",
            bottom: "20px",
            height: "60px",
            width: "auto",
          }}
        />
        <img
          src="/src/assets/images/logo/left.png"
          alt=""
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            height: "60px",
            width: "auto",
          }}
        />

        {/* Hardcoded location icons */}
        <div
          className={` ${hoveredLocation === 1 ? "hovered" : ""} area`}
          style={{
            position: "absolute",
            top: "42%",
            left: "38%",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleLocationHover(1)}
          onMouseLeave={() => handleLocationHover(null)}
        >
          <Link to="/slide-1">
            <img
              src="/map-icon.png"
              alt="map-icon"
              style={{ height: "30px", width: "auto" }}
              className="map-icon  "
            />
            <div
              className={`location-info-box ${
                hoveredLocation === 1 ? "open" : ""
              }`}
              style={{
                top: "100%",
                left: 0,
                transform: "translateX(-40%)",
                height: "140px",
                width: "200px",
                borderRadius: "5px",
                overflow: "hidden",
                border: "2px solid #3F8BC5",
                background: "white",
                visibility: hoveredLocation === 1 ? "visible" : "hidden",
                position: "absolute",
                zIndex: 999, // Ensure it appears on top of other elements
              }}
            >
              <img
                src="/public/banner/1.jpg"
                alt="Location 1"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
              <p
                className="location-text"
                style={{ position: "absolute", color: "black" }}
              >
                تقرير إدارة تجربة العميل
              </p>
            </div>
          </Link>
        </div>

        {/* Second Location */}
        <div
          className={` ${hoveredLocation === 2 ? "hovered" : ""} area`}
          style={{
            position: "absolute",
            top: "21%",
            left: "40%",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleLocationHover(2)}
          onMouseLeave={() => handleLocationHover(null)}
        >
          <Link to="/slide-2">
            <img
              src="/map-icon.png"
              alt="map-icon"
              style={{ height: "30px", width: "auto" }}
              className="map-icon  "
            />
            <div
              className={`location-info-box ${
                hoveredLocation === 2 ? "open" : ""
              }`}
              style={{
                top: "100%",
                left: 0,
                transform: "translateX(-40%)",
                height: "140px",
                width: "200px",
                borderRadius: "5px",
                overflow: "hidden",
                border: "2px solid #3F8BC5",
                background: "white",
                visibility: hoveredLocation === 2 ? "visible" : "hidden",
                position: "absolute",
                zIndex: 999, // Ensure it appears on top of other elements
              }}
            >
              <img
                src="/public/banner/2nd.jpg"
                alt="Location 2"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
              <p
                className="location-text"
                style={{ position: "absolute", color: "black" }}
              >
                مؤشرات الاداء
              </p>
            </div>
          </Link>
        </div>

        {/* Third Location */}
        <div
          className={` ${hoveredLocation === 3 ? "hovered" : ""} area`}
          style={{
            position: "absolute",
            left: "46.5%",
            top: "22.5%",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleLocationHover(3)}
          onMouseLeave={() => handleLocationHover(null)}
        >
          <Link to="/slide-3">
            <img
              src="/map-icon.png"
              alt="map-icon"
              style={{ height: "30px", width: "auto" }}
              className="map-icon  "
            />
            <div
              className={`location-info-box ${
                hoveredLocation === 3 ? "open" : ""
              }`}
              style={{
                top: "100%",
                left: 0,
                transform: "translateX(-40%)",
                height: "140px",
                width: "200px",
                borderRadius: "5px",
                overflow: "hidden",
                border: "2px solid #3F8BC5",
                background: "white",
                visibility: hoveredLocation === 3 ? "visible" : "hidden",
                position: "absolute",
                zIndex: 999, // Ensure it appears on top of other elements
              }}
            >
              <img
                src="/public/frame/3.jpg"
                alt="Location 3"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
              <p
                className="location-text"
                style={{ position: "absolute", color: "black" }}
              >
                صوت العميل
              </p>
            </div>
          </Link>
        </div>
        {/* Fourth Location */}
        <div
          className={` ${hoveredLocation === 4 ? "hovered" : ""} area`}
          style={{
            position: "absolute",
            top: "62%",
            left: "45%",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleLocationHover(4)}
          onMouseLeave={() => handleLocationHover(null)}
        >
          <Link to="/slide-4">
            <img
              src="/map-icon.png"
              alt="map-icon"
              style={{ height: "30px", width: "auto" }}
              className="map-icon  "
            />
            <div
              className={`location-info-box ${
                hoveredLocation === 4 ? "open" : ""
              }`}
              style={{
                top: "100%",
                left: 0,
                transform: "translateX(-40%)",
                height: "140px",
                width: "200px",
                borderRadius: "5px",
                overflow: "hidden",
                border: "2px solid #3F8BC5",
                background: "white",
                visibility: hoveredLocation === 4 ? "visible" : "hidden",
                position: "absolute",
                zIndex: 999, // Ensure it appears on top of other elements
              }}
            >
              <img
                src="/public/banner/online-marketing.jpg"
                alt="Location 4"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
              <p
                className="location-text"
                style={{ position: "absolute", color: "black" }}
              >
                إدارة المنتجات
              </p>
            </div>
          </Link>
        </div>

        {/* Fifth Location */}
        <div
          className={` ${hoveredLocation === 5 ? "hovered" : ""} area`}
          style={{
            position: "absolute",
            top: "37%",
            left: "53%",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleLocationHover(5)}
          onMouseLeave={() => handleLocationHover(null)}
        >
          <Link to="/slide-5">
            <img
              src="/map-icon.png"
              alt="map-icon"
              style={{ height: "30px", width: "auto" }}
              className="map-icon  "
            />
            <div
              className={`location-info-box ${
                hoveredLocation === 5 ? "open" : ""
              }`}
              style={{
                top: "100%",
                left: 0,
                transform: "translateX(-40%)",
                height: "140px",
                width: "200px",
                borderRadius: "5px",
                overflow: "hidden",
                border: "2px solid #3F8BC5",
                background: "white",
                visibility: hoveredLocation === 5 ? "visible" : "hidden",
                position: "absolute",
                zIndex: 999, // Ensure it appears on top of other elements
              }}
            >
              <img
                src="/public/banner/slide5.jpg"
                alt="Location 5"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
              <p
                className="location-text"
                style={{ position: "absolute", color: "black" }}
              >
                المهام التشغيلية
              </p>
            </div>
          </Link>
        </div>

        {/* Sixth Location */}
        <div
          className={` ${hoveredLocation === 6 ? "hovered" : ""} area`}
          style={{
            position: "absolute",
            left: "76%",
            top: "24.5%",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleLocationHover(6)}
          onMouseLeave={() => handleLocationHover(null)}
        >
          <Link to="/slide-6">
            <img
              src="/map-icon.png"
              alt="map-icon"
              style={{ height: "30px", width: "auto" }}
              className="map-icon  "
            />
            <div
              className={`location-info-box ${
                hoveredLocation === 6 ? "open" : ""
              }`}
              style={{
                top: "100%",
                left: 0,
                transform: "translateX(-40%)",
                height: "140px",
                width: "200px",
                borderRadius: "5px",
                overflow: "hidden",
                border: "2px solid #3F8BC5",
                background: "white",
                visibility: hoveredLocation === 6 ? "visible" : "hidden",
                position: "absolute",
                zIndex: 999, // Ensure it appears on top of other elements
              }}
            >
              <img
                src="/public/banner/slide6.jpg"
                alt="Location 6"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
              <p
                className="location-text"
                style={{ position: "absolute", color: "black" }}
              >
                موقع البنك
              </p>
            </div>
          </Link>
        </div>
        {/* Seventh Location */}
        <div
          className={` ${hoveredLocation === 7 ? "hovered" : ""} area`}
          style={{
            position: "absolute",
            top: "55%",
            left: "53%",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleLocationHover(7)}
          onMouseLeave={() => handleLocationHover(null)}
        >
          <Link to="/slide-7">
            <img
              src="/map-icon.png"
              alt="map-icon"
              style={{ height: "30px", width: "auto" }}
              className="map-icon  "
            />
            <div
              className={`location-info-box ${
                hoveredLocation === 7 ? "open" : ""
              }`}
              style={{
                top: "100%",
                left: 0,
                transform: "translateX(-40%)",
                height: "140px",
                width: "200px",
                borderRadius: "5px",
                overflow: "hidden",
                border: "2px solid #3F8BC5",
                background: "white",
                visibility: hoveredLocation === 7 ? "visible" : "hidden",
                position: "absolute",
                zIndex: 999, // Ensure it appears on top of other elements
              }}
            >
              <img
                src="/public/banner/slide7.jpg"
                alt="Location 7"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
              <p
                className="location-text"
                style={{ position: "absolute", color: "black" }}
              >
                المتسوق الخفي
              </p>
            </div>
          </Link>
        </div>

        {/* Eighth Location */}
        <div
          className={` ${hoveredLocation === 8 ? "hovered" : ""} area`}
          style={{
            position: "absolute",
            top: "54%",
            left: "67%",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleLocationHover(8)}
          onMouseLeave={() => handleLocationHover(null)}
        >
          <Link to="/slide-8">
            <img
              src="/map-icon.png"
              alt="map-icon"
              style={{ height: "30px", width: "auto" }}
              className="map-icon  "
            />
            <div
              className={`location-info-box ${
                hoveredLocation === 8 ? "open" : ""
              }`}
              style={{
                top: "100%",
                left: 0,
                transform: "translateX(-40%)",
                height: "140px",
                width: "200px",
                borderRadius: "5px",
                overflow: "hidden",
                border: "2px solid #3F8BC5",
                background: "white",
                visibility: hoveredLocation === 8 ? "visible" : "hidden",
                position: "absolute",
                zIndex: 999, // Ensure it appears on top of other elements
              }}
            >
              <img
                src="/public/banner/slide8.jpg"
                alt="Location 8"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
              <p
                className="location-text"
                style={{ position: "absolute", color: "black" }}
              >
                الفروع
              </p>
            </div>
          </Link>
        </div>

        {/* Ninth Location */}
        <div
          className={` ${hoveredLocation === 9 ? "hovered" : ""} area`}
          style={{
            position: "absolute",
            top: "14%",
            left: "62%",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleLocationHover(9)}
          onMouseLeave={() => handleLocationHover(null)}
        >
          <Link to="/slide-9">
            <img
              src="/map-icon.png"
              alt="map-icon"
              style={{ height: "30px", width: "auto" }}
              className="map-icon  "
            />
            <div
              className={`location-info-box ${
                hoveredLocation === 9 ? "open" : ""
              }`}
              style={{
                top: "100%",
                left: 0,
                transform: "translateX(-40%)",
                height: "140px",
                width: "200px",
                borderRadius: "5px",
                overflow: "hidden",
                border: "2px solid #3F8BC5",
                background: "white",
                visibility: hoveredLocation === 9 ? "visible" : "hidden",
                position: "absolute",
                zIndex: 999, // Ensure it appears on top of other elements
              }}
            >
              <img
                src="/public/banner/banner9.jpg"
                alt="Location 9"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
              <p
                className="location-text"
                style={{ position: "absolute", color: "black" }}
              >
                التواصل
              </p>
            </div>
          </Link>
        </div>

        {/* Tenth Location */}
        <div
          className={` ${hoveredLocation === 10 ? "hovered" : ""} area`}
          style={{
            position: "absolute",
            left: "78.3%",
            bottom: "87%",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleLocationHover(10)}
          onMouseLeave={() => handleLocationHover(null)}
        >
          <Link to="/slide-10">
            <img
              src="/map-icon.png"
              alt="map-icon"
              style={{ height: "30px", width: "auto" }}
              className="map-icon  "
            />
            <div
              className={`location-info-box ${
                hoveredLocation === 10 ? "open" : ""
              }`}
              style={{
                top: "100%",
                left: 0,
                transform: "translateX(-40%)",
                height: "140px",
                width: "200px",
                borderRadius: "5px",
                overflow: "hidden",
                border: "2px solid #3F8BC5",
                background: "white",
                visibility: hoveredLocation === 10 ? "visible" : "hidden",
                position: "absolute",
                zIndex: 999, // Ensure it appears on top of other elements
              }}
            >
              <img
                src="/public/banner/10.jpg"
                alt="Location 10"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
              <p
                className="location-text"
                style={{ position: "absolute", color: "black" }}
              >
                المشاركة المجتمعية
              </p>
            </div>
          </Link>
        </div>

        {/* Eleventh Location */}
        <div
          className={` ${hoveredLocation === 11 ? "hovered" : ""} area`}
          style={{
            position: "absolute",
            bottom: "36%",
            left: "80%",
            cursor: "pointer",
          }}
          onMouseEnter={() => handleLocationHover(11)}
          onMouseLeave={() => handleLocationHover(null)}
        >
          <Link to="/slide-11">
            <img
              src="/map-icon.png"
              alt="map-icon"
              style={{ height: "30px", width: "auto" }}
              className="map-icon  "
            />
            <div
              className={`location-info-box ${
                hoveredLocation === 11 ? "open" : ""
              }`}
              style={{
                top: "100%",
                left: 0,
                transform: "translateX(-40%)",
                height: "140px",
                width: "200px",
                borderRadius: "5px",
                overflow: "hidden",
                border: "2px solid #3F8BC5",
                background: "white",
                visibility: hoveredLocation === 11 ? "visible" : "hidden",
                position: "absolute",
                zIndex: 999, // Ensure it appears on top of other elements
              }}
            >
              <img
                src="/public/banner/last.jpg"
                alt="Location 11"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
              <p
                className="location-text"
                style={{ position: "absolute", color: "black" }}
              >
                برنامج ولاء العميل
              </p>
            </div>
          </Link>
        </div>

        {/* Add more hardcoded location icons as needed */}
      </div>
    </>
  );
};

export default Map;
