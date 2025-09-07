import React from "react";
import "./Navbar.css";
import CartWishLogo from "@assets/cartwishlogo.png";

import LinkWithIcons from "./LinkWithIcons";

import Rocket from "@assets/rocket.png";
import Star from "@assets/glowing-star.png";
import IdButton from "@assets/id-button.png";
import Memo from "@assets/memo.png";
import Order from "@assets/package.png";
import Lock from "@assets/locked.png";

const Navbar = () => {
  return (
    <nav className="align-center navbar">
      
      <div className="align-center">
        <img src={CartWishLogo} alt="Cart Wish Logo" className="navbar_logo" />
      </div>

      <div className="align-center">
        <form className="align-center navbar_form">
          <input
            className="navbar_input"
            type="text"
            placeholder="Search products..."
          />
          <button className="navbar_search_button" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="align_center navbar_links">
        <LinkWithIcons title="Home" emoji={Rocket} link="#" />
        <LinkWithIcons title="Products" emoji={Star} link="#" />
        <LinkWithIcons title="Login" emoji={IdButton} link="#" />
        <LinkWithIcons title="Signup" emoji={Memo} link="#" />
        <LinkWithIcons title="My Orders" emoji={Order} link="#" />
        <LinkWithIcons title="Logout" emoji={Lock} link="#" />
        <a href="/cart" className="align_center">
          Cart <span className="align_center cart_counts">0</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
