import React from "react";

const Home = () => {
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="https://i.pinimg.com/originals/3a/c6/58/3ac658a9b53e3ec59c0968278c56af95.jpg"
          alt=""
        />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://img.freepik.com/premium-photo/shot-adorable-little-baby-girl-created-with-generative-ai_762026-21297.jpg"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>Baby Girl Frame</span>
          <br />
          <span>Price: 100/-</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
