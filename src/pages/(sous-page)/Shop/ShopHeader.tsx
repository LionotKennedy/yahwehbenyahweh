// import { Link } from "react-router-dom"
// import "./style/header.css"
// import "./style/ShopHeader.css";
// import { useState } from "react";

// interface ShopHeaderProps {
//     cartCount?: number;
// }

// // export function ShopHeader() {
// export default function ShopHeader({ cartCount = 0 }: ShopHeaderProps) {
//     const [query, setQuery] = useState("");
//     return (
//         <>
//             {/* ---------- TOP BAR ---------- */}
//             <div className="shop-top-bar">
//                 <a className="shop-top-link" href="/shop/signin">Sign In</a>
//                 <span className="shop-top-sep">|</span>
//                 <a className="shop-top-link" href="/shop/register">Create Account</a>
//             </div>
//             <div id="gold-top" className="gold-top">
//                 <div id="site-logo" className="site-logo">
//                     <Link to="/">
//                         {/* <img src="/src/assets/images/Site_Logo.png" alt="Site Logo" className="tailImage" /> */}
//                         <div className="tailImage" aria-label="Site Logo"></div>
//                     </Link>
//                 </div>
//                 <div className="shop-search">
//                     <input
//                         type="search"
//                         placeholder="Search products..."
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                         className="shop-search-input"
//                     />
//                     <button className="shop-search-btn" aria-label="Search">
//                         🔍
//                     </button>
//                 </div>
//                 <Link to="/shop/cart" className="shop-cart" >
//                     <span className="shop-cart-icon">🛒</span>
//                     {cartCount > 0 && <span className="shop-cart-badge">{cartCount}</span>}
//                 </Link>
//             </div>
//         </>
//     )
// }








// import { Link } from "react-router-dom";
// import "./style/ShopHeader.css";
// import { useState } from "react";

// interface ShopHeaderProps {
//   cartCount?: number;
// }

// export default function ShopHeader({ cartCount = 0 }: ShopHeaderProps) {
//   const [query, setQuery] = useState("");
//   return (
//     <>
//       {/* TOP BAR */}
//       <div className="shop-top-bar">
//         <a className="shop-top-link" href="/shop/signin">Sign In</a>
//         <span className="shop-top-sep">|</span>
//         <a className="shop-top-link" href="/shop/register">Create Account</a>
//       </div>

//       {/* MAIN BAR */}
//       <div id="gold-top" className="gold-top">
//         {/* logo */}
//         <div id="site-logo" className="site-logo">
//           <Link to="/">
//             <div className="tailImage" aria-label="Site Logo" />
//           </Link>
//         </div>

//         {/* recherche courte */}
//         <div className="shop-search">
//           <input
//             type="search"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="shop-search-input"
//           />
//           <button className="shop-search-btn" aria-label="Search">
//             🔍
//           </button>
//         </div>

//         {/* panier */}
//         <Link to="/shop/cart" className="shop-cart">
//           <span className="shop-cart-icon">🛒</span>
//           {cartCount > 0 && (
//             <span className="shop-cart-badge">{cartCount}</span>
//           )}
//         </Link>
//       </div>
//     </>
//   );
// }








// import React, { useState } from "react";
// import "./style/ShopHeader.css";

// interface ShopHeaderProps {
//   cartCount?: number;
// }

// export default function ShopHeader({ cartCount = 0 }: ShopHeaderProps) {
//   const [query, setQuery] = useState("");

//   return (
//     <>
//       {/* ---------- TOP BAR ---------- */}
//       <div className="shop-top-bar">
//         <a className="shop-top-link" href="/shop/signin">Sign In</a>
//         <span className="shop-top-sep">|</span>
//         <a className="shop-top-link" href="/shop/register">Create Account</a>
//       </div>

//       {/* ---------- MAIN HEADER ---------- */}
//       <header className="shop-header">
//         <div className="shop-logo">
//           {/* <img src="/logo-shop.png" alt="Shop logo" /> */}
//         </div>

//         <div className="shop-search">
//           <input
//             type="search"
//             placeholder="Search products..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="shop-search-input"
//           />
//           <button className="shop-search-btn" aria-label="Search">
//             🔍
//           </button>
//         </div>

//         <a href="/shop/cart" className="shop-cart">
//           <span className="shop-cart-icon">🛒</span>
//           {cartCount > 0 && <span className="shop-cart-badge">{cartCount}</span>}
//         </a>
//       </header>
//     </>
//   );
// }

























import { Link } from "react-router-dom"
import "./style/header.css"
import "./style/ShopHeader.css"
import { useState } from "react"

interface ShopHeaderProps {
    cartCount?: number
}

export default function ShopHeader({ cartCount = 0 }: ShopHeaderProps) {
    const [query, setQuery] = useState("")
    return (
        <>
            {/* ---------- TOP BAR ---------- */}
            <div className="shop-top-bar">
                <span className="shop-top-sep">P.E.E.S.S. Foundation</span>
                <a className="shop-top-link" href="/shop/signin">Sign In</a>
                <span className="shop-top-sep">|</span>
                <a className="shop-top-link" href="/shop/register">Create Account</a>
            </div>

            {/* ---------- MAIN HEADER ---------- */}
            {/* <div className="shop-header-container"> */}
            <div id="gold-top" className="gold-top"> 
                <div className="shop-header">
                    <div className="shop-logo">
                        <Link to="/">
                            <div className="tailImage" aria-label="Site Logo"></div>
                        </Link>
                    </div>

                    <div className="shop-header-right">
                        <div className="shop-search-container">
                            <input
                                type="search"
                                placeholder="Search products..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="shop-search-input"
                            />
                            <button className="shop-search-btn" aria-label="Search">
                                🔍
                            </button>
                        </div>

                        <Link to="/shop/cart" className="shop-cart">
                            <span className="shop-cart-icon">🛒</span>
                            {cartCount > 0 && <span className="shop-cart-badge">{cartCount}</span>}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}