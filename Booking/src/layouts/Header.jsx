import React from "react";
import BtnStays from "./../utility/elements/btn-stays";

function Header(props) {
  return (
    <div className="bg-primary py-3">
      <div className="container">
        <div className="bg-primary d-flex py-3">
          <BtnStays />
        </div>
        <h1 className="text-white">Find your next stay</h1>
        <h3 className="text-white">
          Search deals on hotels, homes, and much more...
        </h3>
      </div>
    </div>
  );
}

export default Header;
