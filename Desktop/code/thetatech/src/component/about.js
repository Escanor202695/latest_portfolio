import React from "react";

function About(props) {
  return (
    <div className="flex justify-center items-center bg-transparent py-[80px] mt-[-80px]" id="about">
      <div className="flex max-w-[80rem] gap-12">
        <div className="w-1/2">
          <img
            alt="about-vector"
            src="./about.png"
            className="w-[500px] h-[450px] object-contain"
          />
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold text-5xl mb-4">About Us</h2>
          <p className="max-w-[30rem] text-lg text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt fringilla justo, sed tincidunt odio finibus in. Morbi
            tempor magna auctor ultricies fringilla. Mauris dictum lorem non
            diam congue, sit amet lacinia justo consectetur. Phasellus dictum
            metus vel libero ullamcorper, eu fermentum nunc semper. Quisque at
            tincidunt justo.
            <br />
            <br />
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec eleifend turpis vel nisl consequat
            finibus. Nullam venenatis sollicitudin libero, id fermentum erat
            congue ac. Sed non ultrices ligula.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
