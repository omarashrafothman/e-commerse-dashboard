import React from "react";

function NavigationFooter() {
  return (
    <div className="navigationFooter d-flex align-items-center justify-content-between py-3">
      <div className="navsBtns">
        <button className="btn mx-1 ">Pervios</button>
        <button className="btn  mx-1">Next</button>
      </div>
      <div className="pagesNumbers">
        <p>Pages 1 of 20</p>
      </div>
    </div>
  );
}

export default NavigationFooter;
