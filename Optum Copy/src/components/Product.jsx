// import React, { useState, useEffect } from 'react';
// import './Product.css'; 
// import { useNavigate, Link } from 'react-router-dom';

// export const data = [
//   { img: "/Images/vincetChase.png", Item: "Vincet Chase", Name: "Hustlr ACE", MRP: "$499", caption: " Sunglasses for Men and Women" },
//   { img: "/Images/Rayban.png", Item: "Rayban", Name: "Wayfarer", MRP: "$499", caption: " Sunglasses for Men and Women" },
//   { img: "/Images/Fastrack.png", Item: "FasTrack", Name: "Aviator", MRP: "$499", caption: " Sunglasses for Men and Women" },
//   { img: "/Images/Titan.png", Item: "Titan", Name: "Tees", MRP: "$499", caption: " Sunglasses for Men and Women" },
//   { img: "/Images/Maybach.png", Item: "MayBach", Name: "The Boss", MRP: "$499", caption: " Sunglasses for Men and Women" },
//   { img: "/Images/Maybach.png", Item: "MayBach", Name: "The Boss", MRP: "$499", caption: " Sunglasses for Men and Women" },
//   { img: "/Images/Titan.png", Item: "Titan", Name: "Tees", MRP: "$499", caption: " Sunglasses for Men and Women" },
//   { img: "/Images/vincetChase.png", Item: "Vincet Chase", Name: "Hustlr ACE", MRP: "$499", caption: " Sunglasses for Men and Women" },
//   { img: "/Images/Rayban.png", Item: "Rayban", Name: "Wayfarer", MRP: "$499", caption: " Sunglasses for Men and Women" },
//   { img: "/Images/Fastrack.png", Item: "FasTrack", Name: "Aviator", MRP: "$499", caption: " Sunglasses for Men and Women" },
// ];


// export function handleNav(item, navigate) {
//     const userLogined = localStorage.getItem("userLogined");

//     if (userLogined !== "true") {
//       if (navigate) {
//         navigate('/Login');
//       } 
//     } else {
//         const price = item.MRP.replace('$', ''); // Remove the $ sign
//         const itemString = `${item.Item}|${item.Name}|${price}|${item.caption}|${item.img}`;

//         const cartItems = localStorage.getItem("cartItems") || '';

//         const updatedCartItems = cartItems ? `${cartItems},${itemString}` : itemString;

//         localStorage.setItem("cartItems", updatedCartItems);
//         if (navigate) {
//           navigate('/Cart');
//         }
//     }
// }

// function Product({ userLogined, setUserLogined }) {
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 500);
//   }, []);

//   function Loader() {
//     return (
//       <div style={{
//         height: "950px",
//         width: "100%",
//         position: "absolute",
//         padding: "280px"
//       }}>
//         <div id="loader" style={{
//           fontSize: "40px",
//           marginLeft: "38%",
//         }}>
//           <h4>Loading...</h4>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {loading ? <Loader /> : (
//         <div id='ProMain'>
//           <div id="headline">
//             <i className="ri-glasses-2-line"></i>
//             <h1 id='h1'>Shades on, Worries gone</h1>
//             <i className="ri-glasses-2-line"></i>
//           </div>
//           <div id="innerdiv">
//             {data.map((item, index) => (
//               <div key={index} className="items">
//                 <div id="item-upper">
//                   <img src={item.img} alt={item.Item} />
//                 </div>
//                 <div id="item-lower">
//                   <h1>{item.Item}</h1>
//                   <p>{item.Name}</p>
//                   <div id="itemslower">
//                     <Link id="Link" to={`/View/${index}`}>View Details</Link>
//                     <button onClick={() => handleNav(item, navigate)}>Buy Now</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Product;








import React, { useState, useEffect } from 'react';
import './Product.css'; 
import { useNavigate, Link } from 'react-router-dom';

export const data = [
  { img: "/Images/vincetChase.png", Item: "Vincet Chase", Name: "Hustlr ACE", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Rayban.png", Item: "Rayban", Name: "Wayfarer", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Fastrack.png", Item: "FasTrack", Name: "Aviator", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Titan.png", Item: "Titan", Name: "Tees", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Maybach.png", Item: "MayBach", Name: "The Boss", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Maybach.png", Item: "MayBach", Name: "The Boss", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Titan.png", Item: "Titan", Name: "Tees", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/vincetChase.png", Item: "Vincet Chase", Name: "Hustlr ACE", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Rayban.png", Item: "Rayban", Name: "Wayfarer", MRP: "$499", caption: " Sunglasses for Men and Women" },
  { img: "/Images/Fastrack.png", Item: "FasTrack", Name: "Aviator", MRP: "$499", caption: " Sunglasses for Men and Women" },
];

// Helper function to check if item exists in cart
export function isItemInCart(item) {
  const cartItems = localStorage.getItem("cartItems");
  if (!cartItems) return false;
  
  const itemsArray = cartItems.split(",");
  return itemsArray.some(cartItem => {
    const [cartItemName, cartItemModel] = cartItem.split("|");
    return cartItemName === item.Item && cartItemModel === item.Name;
  });
}

// Helper function to add item to cart or increment quantity
export function addOrIncrementItem(item) {
  const price = item.MRP.replace('$', '');
  const cartItems = localStorage.getItem("cartItems") || '';
  
  if (!cartItems) {
    // Cart is empty, add new item
    const itemString = `${item.Item}|${item.Name}|${price}|${item.caption}|${item.img}|1`;
    localStorage.setItem("cartItems", itemString);
    return;
  }
  
  const itemsArray = cartItems.split(",");
  let itemFound = false;
  
  const updatedItemsArray = itemsArray.map(cartItem => {
    const itemProperties = cartItem.split("|");
    const [cartItemName, cartItemModel] = itemProperties;
    
    if (cartItemName === item.Item && cartItemModel === item.Name) {
      itemFound = true;
      // Increment quantity
      const currentQuantity = parseInt(itemProperties[5] || 1);
      itemProperties[5] = (currentQuantity + 1).toString();
      return itemProperties.join("|");
    }
    return cartItem;
  });
  
  if (!itemFound) {
    // Item not found, add new item
    const itemString = `${item.Item}|${item.Name}|${price}|${item.caption}|${item.img}|1`;
    updatedItemsArray.push(itemString);
  }
  
  localStorage.setItem("cartItems", updatedItemsArray.join(","));
}

export function handleNav(item, navigate, actionType = 'buy') {
  const userLogined = localStorage.getItem("userLogined");

  if (userLogined !== "true") {
    if (navigate) {
      navigate('/Login');
    } 
  } else {
    if (actionType === 'add') {
      // Just add to cart, don't navigate
      addOrIncrementItem(item);
    } else {
      // Buy now - add to cart and navigate
      addOrIncrementItem(item);
      if (navigate) {
        navigate('/Cart');
      }
    }
  }
}

function Product({ userLogined, setUserLogined }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  function Loader() {
    return (
      <div style={{
        height: "950px",
        width: "100%",
        position: "absolute",
        padding: "280px"
      }}>
        <div id="loader" style={{
          fontSize: "40px",
          marginLeft: "38%",
        }}>
          <h4>Loading...</h4>
        </div>
      </div>
    );
  }

  return (
    <>
      {loading ? <Loader /> : (
        <div id='ProMain'>
          <div id="headline">
            <i className="ri-glasses-2-line"></i>
            <h1 id='h1'>Shades on, Worries gone</h1>
            <i className="ri-glasses-2-line"></i>
          </div>
          <div id="innerdiv">
            {data.map((item, index) => (
              <div key={index} className="items">
                <div id="item-upper">
                  <img src={item.img} alt={item.Item} />
                </div>
                <div id="item-lower">
                  <h1>{item.Item}</h1>
                  <p>{item.Name}</p>
                  <div id="itemslower">
                    <Link id="Link" to={`/View/${index}`}>View Details</Link>
                    <button onClick={() => handleNav(item, navigate, 'buy')}>Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
