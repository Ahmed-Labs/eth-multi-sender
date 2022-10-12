import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/UI/Button";
import "./index.css";
import AnimatedBG from "./components/UI/AnimatedBG";
import PrepareTransaction from "./components/PrepareTransaction";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Index() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletDetails, setWalletDetails] = useState({
    address: "0x",
    balance: 0,
  });

  const ConnectWalletButton = (
    <div className="absolute bottom-0 left-0 right-0 p-2">
      <Button buttonName={"Connect Wallet"} buttonFunction={ConnectWallet} />
    </div>
  );
  const Blur = (
    <div className="absolute z-1 bottom-0 left-0 right-0 top-0 backdrop-blur-md"></div>
  );

  function ConnectWallet() {
    return;
  }

  return (
    <div className="absolute m-0 overflow-hidden top-0 bottom-0 w-full bg-blurple">
      <div className="absolute top-0 left-0 right-0 h-[10px]">
        <AnimatedBG />
      </div>
      <div className="flex flex-col h-screen">
        <div className="flex justify-center">
          <div className="w-[600px] mx-7 pt-14 flex items-center">
            <a href="/">
              <h1 className="font-semibold">
                <span className="text-xl text-pink">ethereum</span>
                <span className="text-lg pl-2 text-white">multi-sender</span>
              </h1>
            </a>
            <div className="ml-auto py-1.5 px-4 border-2 border-pink rounded">
              <p className="text-white text-md font-semibold">0 ETH</p>
            </div>
          </div>
        </div>

        <div className="h-full flex justify-center">
          <div className="flex flex-col relative mt-14 mx-7 w-[600px] h-[600px] border border-lurple rounded-lg overflow-hidden">
            <PrepareTransaction />
            {isWalletConnected ? (
              <></>
            ) : (
              <>
                {/* {Blur} */}
                {ConnectWalletButton}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

root.render(<Index />);
