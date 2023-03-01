import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} animate-wiggle w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row `}>
        <p className="font-poppins font-medium text-[18px] leading-[15px] ">
          <span className="text-gradient">Get</span>
        </p>
        <img
          alt="arrow"
          src={arrowUp}
          className="w-[24px] h-[24px] object-contain pl-[2px]"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[15px] ">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
