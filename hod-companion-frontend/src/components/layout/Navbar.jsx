import React from "react";
import PersonIcon from "../ui/Icons/PersonIcon";

const Navbar = (props) => {
  return (
    <>
      <div className="flex items-center justify-between p-2 border-b border-gray-200 bg-white">
        <span>Gautam Buddha University</span>
        <span>University School Of Biotechnology</span>
        <div className="flex justify-around">
          <span>
            <PersonIcon />
          </span>

          <strong>{props.hod}</strong>
        </div>
      </div>
    </>
  );
};

export default Navbar;
