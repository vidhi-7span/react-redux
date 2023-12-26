import React from "react";

const Header = (props) => {
  console.warn("Header", props);
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="https://i.pinimg.com/originals/3a/c6/58/3ac658a9b53e3ec59c0968278c56af95.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default Header;
