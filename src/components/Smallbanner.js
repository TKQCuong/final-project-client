import React from "react";

export default function Smallbanner(props) {
  function gotoServiceCheck() {
    props.history.push("/servicecheck");
  }

  return (
    <div className="small_banner">
      <div>
        <p>
          <i>place an order</i>{" "}
        </p>
        <p>
          <i>and</i>
        </p>
        <p>
          <i>we will take it from here...</i>
        </p>
        <button className="btn-hover color-8" onClick={() => gotoServiceCheck()}>SIGN ME UP</button>
      </div>
      <div className="small_banner_pic"></div>
    </div>
  );
}
