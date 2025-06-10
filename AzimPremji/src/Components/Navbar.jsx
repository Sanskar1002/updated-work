// import React, { useEffect, useState, useRef } from "react";
// import "./Navbar.css";
// const Navbar = () => {
//   const [dropdownArticle, setDropdownArticle] = useState(false);
//   const [dropdownResources, setDropdownResources] = useState(false);
//   const [dropdownLanguage, setDropdownLanguage] = useState(false);
//   function handleArticleDropdown() {
//     setDropdownArticle(!dropdownArticle);
//     setDropdownResources(false);
//     setDropdownLanguage(false);
//   }

//   function handleResourcesDropdown() {
//     setDropdownResources(!dropdownResources);
//     setDropdownArticle(false);
//     setDropdownLanguage(false);
//   }
//   function handleLanguage() {
//     setDropdownLanguage(!dropdownLanguage);
//     setDropdownArticle(false);
//     setDropdownResources(false);
//   }
//   const articleRef = useRef(null);
//   const resourcesRef = useRef(null);
//   const LanguageRef = useRef(null);
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         articleRef.current &&
//         !articleRef.current.contains(event.target) &&
//         resourcesRef.current &&
//         !resourcesRef.current.contains(event.target) &&
//         LanguageRef.current &&
//         !LanguageRef.current.contains(event.target)
//       ) {
//         setDropdownArticle(false);
//         setDropdownResources(false);
//         setDropdownLanguage(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div id="NavContainerFluid" className="container-fluid ">
//       <img id="topimg1" src="1.png" alt="" />
//       <img id="topimg2" src="2.png" alt="" />
//       <img id="topimg3" src="2.png" alt="" />

//       <div className="container">
//         <div className="row offset-sm-3">
//           <img src="APU Logo.png" alt="" />
//           <img id="Logohead" src="Vector.png" alt="" />
//         </div>
//         <div className="row">
//           <img src="Line 3.png" id="line" alt="" />
//         </div>
//         <div id="mainrow">
//           <div id="row1">
//             <i class="ri-menu-line"></i>
//             <ul>
//               <li ref={articleRef} onClick={handleArticleDropdown}>
//                 ARTICLE{" "}
//                 <span>
//                   <img src="chevron-down.png" alt="" />
//                   {dropdownArticle ? (
//                     <div id="dropdown">
//                       <li>FEATURES</li>
//                       <li>CLASSROOM</li>
//                       <li>THE JOY OF MATHEMATICS</li>
//                       <li>REVIEWS</li>
//                     </div>
//                   ) : (
//                     ""
//                   )}
//                 </span>{" "}
//               </li>
//               <li ref={resourcesRef} onClick={handleResourcesDropdown}>
//                 RESOURCES
//                 <span>
//                   <img src="chevron-down.png" alt="" />
//                 </span>
//                 {dropdownResources ? (
//                   <div id="dropdown2">
//                     <li>PULLOUTS</li>
//                     <li>TEAROUR</li>
//                     <li>WORKSHEET</li>
//                     <li>POSTERS</li>
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </li>
//               <li>MAGAZINE ISSUES </li>
//               <li>ABOUT US</li>
//             </ul>
//           </div>
//           <div id="row2">
//             <button>Call for Article</button>
//             <button>Subscribe for Free</button>
//             <img id="searchimg" src="search.png" />
//             <li
//               ref={LanguageRef}
//               onClick={handleLanguage}
//               style={{ marginBottom: "0", fontSize: "18px", listStyle: "none" }}
//             >
//               {/* <img src="chevron-down.png" alt="" /> */}

//               <select
//                 name="lang"
//                 id="lang"
//                 style={{
//                   background: "transparent",
//                   border: "none",
//                   color: "white",
//                 }}
//               >
//                 <option value="english" style={{ color: "black" }}>
//                   English
//                 </option>
//                 <option value="hindi" style={{ color: "black" }}>
//                   Hindi
//                 </option>
//                 <option value="kanada" style={{ color: "black" }}>
//                   ಕನ್ನಡ
//                 </option>
//               </select>
//             </li>
//             <img id="topimg4" src="top.png" alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState, useRef } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [dropdownArticle, setDropdownArticle] = useState(false);
//   const [dropdownResources, setDropdownResources] = useState(false);
//   const [dropdownLanguage, setDropdownLanguage] = useState(false);

//   const articleRef = useRef(null);
//   const resourcesRef = useRef(null);
//   const LanguageRef = useRef(null);

//   function handleArticleDropdown() {
//     setDropdownArticle(!dropdownArticle);
//     setDropdownResources(false);
//     setDropdownLanguage(false);
//   }

//   function handleResourcesDropdown() {
//     setDropdownResources(!dropdownResources);
//     setDropdownArticle(false);
//     setDropdownLanguage(false);
//   }

//   function handleLanguage() {
//     setDropdownLanguage(!dropdownLanguage);
//     setDropdownArticle(false);
//     setDropdownResources(false);
//   }

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         articleRef.current &&
//         !articleRef.current.contains(event.target) &&
//         resourcesRef.current &&
//         !resourcesRef.current.contains(event.target) &&
//         LanguageRef.current &&
//         !LanguageRef.current.contains(event.target)
//       ) {
//         setDropdownArticle(false);
//         setDropdownResources(false);
//         setDropdownLanguage(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div id="NavContainerFluid" className="container-fluid">
//       <img id="topimg1" src="1.png" alt="" />
//       <img id="topimg2" src="2.png" alt="" />
//       <img id="topimg3" src="2.png" alt="" />

//       <div className="container">
//         <div className="row offset-sm-3">
//           <img src="APU Logo.png" alt="" />
//           <img id="Logohead" src="Vector.png" alt="" />
//         </div>

//         <div className="row">
//           <img src="Line 3.png" id="line" alt="" />
//         </div>

//         {/* Bootstrap Navbar */}
//         <nav className="navbar navbar-expand-lg">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarContent"
//             aria-controls="navbarContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarContent">
//             <div id="mainrow" className="d-flex flex-column flex-lg-row w-100">
//               <div id="row1" className="me-auto">
//                 <ul className="navbar-nav">
//                   <li
//                     className="nav-item dropdown"
//                     ref={articleRef}
//                     onClick={handleArticleDropdown}
//                   >
//                     ARTICLE{" "}
//                     <span>
//                       <img src="chevron-down.png" alt="" />
//                       {dropdownArticle && (
//                         <div id="dropdown">
//                           <li>FEATURES</li>
//                           <li>CLASSROOM</li>
//                           <li>THE JOY OF MATHEMATICS</li>
//                           <li>REVIEWS</li>
//                         </div>
//                       )}
//                     </span>
//                   </li>
//                   <li
//                     className="nav-item dropdown"
//                     ref={resourcesRef}
//                     onClick={handleResourcesDropdown}
//                   >
//                     RESOURCES
//                     <span>
//                       <img src="chevron-down.png" alt="" />
//                     </span>
//                     {dropdownResources && (
//                       <div id="dropdown2">
//                         <li>PULLOUTS</li>
//                         <li>TEAROUR</li>
//                         <li>WORKSHEET</li>
//                         <li>POSTERS</li>
//                       </div>
//                     )}
//                   </li>
//                   <li className="nav-item">MAGAZINE ISSUES</li>
//                   <li className="nav-item">ABOUT US</li>
//                 </ul>
//               </div>

//               <div id="row2" className="d-flex align-items-center">
//                 <button>Call for Article</button>
//                 <button>Subscribe for Free</button>
//                 <img id="searchimg" src="search.png" alt="" />
//                 <li
//                   ref={LanguageRef}
//                   onClick={handleLanguage}
//                   style={{
//                     marginBottom: "0",
//                     fontSize: "18px",
//                     listStyle: "none",
//                   }}
//                 >
//                   <select
//                     name="lang"
//                     id="lang"
//                     style={{
//                       background: "transparent",
//                       border: "none",
//                       color: "white",
//                     }}
//                   >
//                     <option value="english" style={{ color: "black" }}>
//                       English
//                     </option>
//                     <option value="hindi" style={{ color: "black" }}>
//                       Hindi
//                     </option>
//                     <option value="kanada" style={{ color: "black" }}>
//                       ಕನ್ನಡ
//                     </option>
//                   </select>
//                 </li>
//                 <img id="topimg4" src="top.png" alt="" />
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState, useRef } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [dropdownArticle, setDropdownArticle] = useState(false);
//   const [dropdownResources, setDropdownResources] = useState(false);
//   const [dropdownLanguage, setDropdownLanguage] = useState(false);

//   const handleArticleDropdown = () => {
//     setDropdownArticle(!dropdownArticle);
//     setDropdownResources(false);
//     setDropdownLanguage(false);
//   };

//   const handleResourcesDropdown = () => {
//     setDropdownResources(!dropdownResources);
//     setDropdownArticle(false);
//     setDropdownLanguage(false);
//   };

//   const handleLanguage = () => {
//     setDropdownLanguage(!dropdownLanguage);
//     setDropdownArticle(false);
//     setDropdownResources(false);
//   };

//   const articleRef = useRef(null);
//   const resourcesRef = useRef(null);
//   const LanguageRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         articleRef.current &&
//         !articleRef.current.contains(event.target) &&
//         resourcesRef.current &&
//         !resourcesRef.current.contains(event.target) &&
//         LanguageRef.current &&
//         !LanguageRef.current.contains(event.target)
//       ) {
//         setDropdownArticle(false);
//         setDropdownResources(false);
//         setDropdownLanguage(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div id="NavContainerFluid" className="container-fluid">
//       <img id="topimg1" src="1.png" alt="" />
//       <img id="topimg2" src="2.png" alt="" />
//       <img id="topimg3" src="2.png" alt="" />

//       <div className="container">
//         <div className="row offset-sm-3">
//           <img src="APU Logo.png" alt="" />
//           <img id="Logohead" src="Vector.png" alt="" />
//         </div>

//         <div className="row">
//           <img src="Line 3.png" id="line" alt="" />
//         </div>

//         {/* Bootstrap Navbar */}
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//           <a className="navbar-brand" href="#">
//             <i className="ri-menu-line"></i>
//           </a>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item dropdown" ref={articleRef}>
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded={dropdownArticle}
//                   onClick={handleArticleDropdown}
//                 >
//                   ARTICLE
//                 </a>
//                 <ul
//                   className={`dropdown-menu${dropdownArticle ? " show" : ""}`}
//                 >
//                   <li className="dropdown-item">FEATURES</li>
//                   <li className="dropdown-item">CLASSROOM</li>
//                   <li className="dropdown-item">THE JOY OF MATHEMATICS</li>
//                   <li className="dropdown-item">REVIEWS</li>
//                 </ul>
//               </li>

//               <li className="nav-item dropdown" ref={resourcesRef}>
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded={dropdownResources}
//                   onClick={handleResourcesDropdown}
//                 >
//                   RESOURCES
//                 </a>
//                 <ul
//                   className={`dropdown-menu${dropdownResources ? " show" : ""}`}
//                 >
//                   <li className="dropdown-item">PULLOUTS</li>
//                   <li className="dropdown-item">TEAROUR</li>
//                   <li className="dropdown-item">WORKSHEET</li>
//                   <li className="dropdown-item">POSTERS</li>
//                 </ul>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   MAGAZINE ISSUES
//                 </a>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   ABOUT US
//                 </a>
//               </li>
//             </ul>

//             <div className="d-flex align-items-center gap-2">
//               <button className="btn btn-outline-light btn-sm">
//                 Call for Article
//               </button>
//               <button className="btn btn-success btn-sm">
//                 Subscribe for Free
//               </button>
//               <img id="searchimg" src="search.png" alt="search" />

//               <div ref={LanguageRef} onClick={handleLanguage}>
//                 <select
//                   name="lang"
//                   id="lang"
//                   className="form-select form-select-sm bg-dark text-white border-0"
//                 >
//                   <option value="english">English</option>
//                   <option value="hindi">Hindi</option>
//                   <option value="kanada">ಕನ್ನಡ</option>
//                 </select>
//               </div>

//               <img id="topimg4" src="top.png" alt="top" />
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownArticle, setDropdownArticle] = useState(false);
  const [dropdownResources, setDropdownResources] = useState(false);
  const [dropdownLanguage, setDropdownLanguage] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // NEW

  function handleArticleDropdown() {
    setDropdownArticle(!dropdownArticle);
    setDropdownResources(false);
    setDropdownLanguage(false);
  }

  function handleResourcesDropdown() {
    setDropdownResources(!dropdownResources);
    setDropdownArticle(false);
    setDropdownLanguage(false);
  }

  function handleLanguage() {
    setDropdownLanguage(!dropdownLanguage);
    setDropdownArticle(false);
    setDropdownResources(false);
  }

  const articleRef = useRef(null);
  const resourcesRef = useRef(null);
  const LanguageRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        articleRef.current &&
        !articleRef.current.contains(event.target) &&
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target) &&
        LanguageRef.current &&
        !LanguageRef.current.contains(event.target)
      ) {
        setDropdownArticle(false);
        setDropdownResources(false);
        setDropdownLanguage(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="NavContainerFluid" className="container-fluid">
      <img id="topimg1" src="1.png" alt="" />
      <img id="topimg2" src="2.png" alt="" />
      <img id="topimg3" src="2.png" alt="" />

      <div className="container">
        <div className="row offset-sm-3">
          <img src="APU Logo.png" alt="" />
          <img id="Logohead" src="Vector.png" alt="" />
        </div>
        <div className="row">
          <img src="Line 3.png" id="line" alt="" />
        </div>

        <div id="mainrow">
          <div id="row1">
            <i
              className="ri-menu-line"
              onClick={() => setMenuOpen(!menuOpen)} // TOGGLE MENU
              style={{ fontSize: "24px", cursor: "pointer" }}
            ></i>

            <ul className="desktop-menu">
              <li ref={articleRef} onClick={handleArticleDropdown}>
                ARTICLE{" "}
                <span>
                  <img src="chevron-down.png" alt="" />
                  {dropdownArticle && (
                    <div id="dropdown">
                      <li>FEATURES</li>
                      <li>CLASSROOM</li>
                      <li>THE JOY OF MATHEMATICS</li>
                      <li>REVIEWS</li>
                    </div>
                  )}
                </span>
              </li>
              <li ref={resourcesRef} onClick={handleResourcesDropdown}>
                RESOURCES
                <span>
                  <img src="chevron-down.png" alt="" />
                </span>
                {dropdownResources && (
                  <div id="dropdown2">
                    <li>PULLOUTS</li>
                    <li>TEAROUR</li>
                    <li>WORKSHEET</li>
                    <li>POSTERS</li>
                  </div>
                )}
              </li>
              <li>MAGAZINE ISSUES </li>
              <li>ABOUT US</li>
            </ul>
          </div>

          <div id="row2">
            <button>Call for Article</button>
            <button>Subscribe for Free</button>
            <img id="searchimg" src="search.png" />
            <li
              ref={LanguageRef}
              onClick={handleLanguage}
              style={{
                marginBottom: "0",
                fontSize: "18px",
                listStyle: "none",
              }}
            >
              <select
                name="lang"
                id="lang"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                }}
              >
                <option value="english" style={{ color: "black" }}>
                  English
                </option>
                <option value="hindi" style={{ color: "black" }}>
                  Hindi
                </option>
                <option value="kanada" style={{ color: "black" }}>
                  ಕನ್ನಡ
                </option>
              </select>
            </li>
            <img id="topimg4" src="top.png" alt="" />
          </div>
        </div>

        {/* Hamburger Menu Overlay */}
        {/* {menuOpen && (
          <div className="mobile-menu">
            <ul>
              <li onClick={handleArticleDropdown}>
                ARTICLES
                {dropdownArticle && (
                  <ul>
                    <li>FEATURES</li>
                    <li>CLASSROOM</li>
                    <li>THE JOY OF MATHEMATICS</li>
                    <li>REVIEWS</li>
                  </ul>
                )}
              </li>
              <li onClick={handleResourcesDropdown}>
                RESOURCES
                {dropdownResources && (
                  <ul>
                    <li>PULLOUTS</li>
                    <li>TEAROUR</li>
                    <li>WORKSHEET</li>
                    <li>POSTERS</li>
                  </ul>
                )}
              </li>
              <li>MAGAZINE ISSUES</li>
              <li>ABOUT US</li>
              <div className="buttons">
                <button>Call for Articles</button>
                <button>Subscribe for free</button>
              </div>
            </ul>
          </div>
        )} */}

        {menuOpen && (
          <div className="mobile-menu-accordion">
            <div className="accordion-item">
              <div className="accordion-title" onClick={handleArticleDropdown}>
                ARTICLES <span>{dropdownArticle ? "▲" : "▼"}</span>
              </div>
              {dropdownArticle && (
                <div className="accordion-content">
                  <li>OVERVIEW</li>
                  <li>FEATURES</li>
                  <li>ONLINE</li>
                  <li>CLASSROOM</li>
                  <li>THE JOY OF MATHEMATICS</li>
                  <li>REVIEWS</li>
                </div>
              )}
            </div>

            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={handleResourcesDropdown}
              >
                RESOURCES <span>{dropdownResources ? "▲" : "▼"}</span>
              </div>
              {dropdownResources && (
                <div className="accordion-content">
                  <li>PULLOUTS</li>
                  <li>TEAROUT</li>
                  <li>WORKSHEET</li>
                  <li>POSTERS</li>
                </div>
              )}
            </div>

            <li className="accordion-title">MAGAZINE ISSUES</li>
            <li className="accordion-title">ABOUT US</li>

            <div className="mobile-buttons">
              <button style={{ background: "#00000069" }}>
                Call for Articles
              </button>
              <button style={{ background: "#00000069" }}>
                Subscribe for Free
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
