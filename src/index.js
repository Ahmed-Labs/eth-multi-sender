import React from "react";
import ReactDOM from "react-dom/client";
import Styles from "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Index() {
  return (
    <div className="absolute m-0 overflow-hidden top-0 bottom-0 w-full bg-gradient-to-r from-blurple to-nurple">
      <div className="flex flex-col h-screen">
        <h1 className="p-10 font-semibold">
          <span className="text-3xl text-pink">ethereum</span>
          <span className="text-2xl pl-3 text-white">multi-sender</span>
        </h1>

        <div className="h-full flex justify-center items-center">
          <div className="max-w-[600px] bg-blurple rounded-md">
            <p className="p-40 py-60">test</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

root.render(<Index />);
