import React from "react";
import { leftArrow } from "../assets";
import { Link } from "react-router-dom";
import { ROUTES } from "../constant";

const { HOME } = ROUTES;

const Title = ({ title, showBackButton = false }) => {
  return (
    <div>
      {showBackButton && (
        <Link to={HOME} className="flex items-center italic mt-2">
          <img src={leftArrow} width={15} height={15} className="mr-3" />
          <span>Back to home</span>
        </Link>
      )}
      <div className="font-extrabold text-5xl my-8">{title}</div>
    </div>
  );
};

export default Title;
