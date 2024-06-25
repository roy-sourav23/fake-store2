import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="navbar bg-[#007685] ">
        <div className="nav-brand">
          <Link to="/">
            <p className="text-[#fff] text-[1.5rem] font-bold py-3 px-6 ">fakeStore</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
