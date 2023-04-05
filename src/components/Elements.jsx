import React from "react";
import "./style.css";

function Elements({text}) {
  return (
    <div>
        <h1 className="title text-center">
          {!text? "Title" : text}
        </h1>
    </div>
  );
}

export default Elements;
