// import React, { useState } from "react";
// import { data } from "./Product.jsx";
// import { Link, useParams,useNavigate } from "react-router-dom";
// import { handleNav } from "./Product.jsx";
// import './View.css';

// function View() {
//   const { index } = useParams(); // Get the index from the URL
//   const product = data[index];
//   const [Toggel, setToggel] = useState(true)
//   const color = ["Black", "White", "Golden"];
//   const navigate =useNavigate();
//   return (
//     <>
//       <div id="Viewmain">
//         <div id="Viewmain-left">
//             <h1>{product.Name}</h1>
//             <p>Style is not just what you wear; it's the attitude you project through every detail</p>
//           <div id="Viewmain-left-upper">
//             <img src={product.img} alt={product.Item} />
//           </div>
//           <div id="Viewmain-left-bottom">
//               {color.map((color, index) => {
//                 return (
//                   <div key={index} id="Colorbox">
//                     <input type="radio" name="color" value={color} />
//                     <h4>{color}</h4>
//                   </div>
//                 );
//               })}
//             </div>

//         </div>
//         <div id="Viewmain-right">
//            <div id="Viewman-right-upper">
//               <h1>{product.Name} {product.caption}</h1>
//               <div id="stars">
//               <i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>
//               </div>
//               <h2>*MRP:{product.MRP}</h2>
//               <h3>Inclusive all Taxes</h3>
//               <h4> Hurry up..!! 5700+ Already bought this </h4>
//            </div>
//            <div id="Viewmain-right-Middle">
//               <h3>Description</h3>
//               <p id="p"> Sunglasses from Tees By Fastrack. Shades are designed to save your eyes from harmful UV rays while providing best in class style. (M8022GR7V). Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo obcaecati nesciunt nemo repudiandae unde optio! Quo porro quibusdam et consequuntur.</p>
//            </div>
//            <div id="Viewmain-right-Lower">
//              <div id="Viewmain-right-Lower1">
//              <i id="eye" class="ri-eye-fill"></i>
//               <h3>Eye Exam</h3>
//               <p className="para">Lorem ipsum dolor sit amet.</p>
//               <Link id="Link">Learn More</Link>
//              </div>
//              <div id="Viewmain-right-Lower1">
//              <i id="eye" class="ri-glasses-2-line"></i>
//               <h3>Lense Fitting</h3>
//               <p className="para">Lorem ipsum dolor sit amet.</p>
//               <Link id="Link">Learn More</Link>
//               </div>
//               <div id="Viewmain-right-Lower1">
//               <i id="eye" class="ri-id-card-line"></i>
//               <h3>Virtual Try-on</h3>
//               <p className="para">Lorem ipsum dolor sit amet.</p>
//               <Link id="Link">Learn More</Link>
//               </div>
//            </div>
//            <div id="Viewmain-right-Lower2">
//            { Toggel?(
//             <button onClick={() => {handleNav(product,navigate);setToggel(false)}}>Add to Cart</button>):
//             (<button onClick={() => navigate("/Cart")}>View Cart</button>)
//             }
//               <button onClick={() => handleNav(product, navigate)}>Buy Now</button>

//            </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default View;

import React, { useState, useEffect } from "react";
import { data } from "./Product.jsx";
import { Link, useParams, useNavigate } from "react-router-dom";
import { handleNav, isItemInCart } from "./Product.jsx";
import "./View.css";

function View() {
  const { index } = useParams(); // Get the index from the URL
  const product = data[index];
  const [isInCart, setIsInCart] = useState(false);
  const color = ["Black", "White", "Golden"];
  const navigate = useNavigate();

  // Check if item is in cart on component mount and when localStorage changes
  useEffect(() => {
    const checkCartStatus = () => {
      setIsInCart(isItemInCart(product));
    };

    checkCartStatus();

    // Listen for storage changes (when cart is updated)
    const handleStorageChange = () => {
      checkCartStatus();
    };

    window.addEventListener("storage", handleStorageChange);

    // Also check periodically in case of same-tab updates
    const interval = setInterval(checkCartStatus, 500);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, [product]);

  const handleAddToCart = () => {
    handleNav(product, navigate, "add");
    setIsInCart(true);
  };

  const handleBuyNow = () => {
    handleNav(product, navigate, "buy");
  };

  const handleGoToCart = () => {
    navigate("/Cart");
  };

  return (
    <>
      <div id="Viewmain">
        <div id="Viewmain-left">
          <h1>{product.Name}</h1>
          <p>
            Style is not just what you wear; it's the attitude you project
            through every detail
          </p>
          <div id="Viewmain-left-upper">
            <img src={product.img} alt={product.Item} />
          </div>
          <div id="Viewmain-left-bottom">
            {color.map((color, index) => {
              return (
                <div key={index} id="Colorbox">
                  <input type="radio" name="color" value={color} />
                  <h4>{color}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <div id="Viewmain-right">
          <div id="Viewman-right-upper">
            <h1>
              {product.Name} {product.caption}
            </h1>
            <div id="stars">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>
            <h2>*MRP:{product.MRP}</h2>
            <h3>Inclusive all Taxes</h3>
            <h4> Hurry up..!! 5700+ Already bought this </h4>
          </div>
          <div id="Viewmain-right-Middle">
            <h3>Description</h3>
            <p id="p">
              {" "}
              Sunglasses from Tees By Fastrack. Shades are designed to save your
              eyes from harmful UV rays while providing best in class style.
              (M8022GR7V). Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quo obcaecati nesciunt nemo repudiandae unde optio! Quo
              porro quibusdam et consequuntur.
            </p>
          </div>
          <div id="Viewmain-right-Lower">
            <div id="Viewmain-right-Lower1">
              <i id="eye" className="ri-eye-fill"></i>
              <h3>Eye Exam</h3>
              <p className="para">Lorem ipsum dolor sit amet.</p>
              <Link id="Link">Learn More</Link>
            </div>
            <div id="Viewmain-right-Lower1">
              <i id="eye" className="ri-glasses-2-line"></i>
              <h3>Lense Fitting</h3>
              <p className="para">Lorem ipsum dolor sit amet.</p>
              <Link id="Link">Learn More</Link>
            </div>
            <div id="Viewmain-right-Lower1">
              <i id="eye" className="ri-id-card-line"></i>
              <h3>Virtual Try-on</h3>
              <p className="para">Lorem ipsum dolor sit amet.</p>
              <Link id="Link">Learn More</Link>
            </div>
          </div>
          <div id="Viewmain-right-Lower2">
            {isInCart ? (
              <button onClick={handleGoToCart}>Go to Cart</button>
            ) : (
              <button onClick={handleAddToCart}>Add to Cart</button>
            )}
            <button onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
