import React from "react";

const Home = (props) => {
  console.warn("Home", props);
  return (
    <div>
      <p>
        Check the console to see whether the data is getting or not after
        clicking on the add to cart button
      </p>
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
          <button
            onClick={() =>
              props.addToCartHandler({ price: 100, name: "Frame" })
            }
          >
            Add to Cart
          </button>
          <br />
          <br />
          <button onClick={() => props.removeToCartHandler()}>
            Remove to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
