import React from "react";
import Image from "next/image";
import amazonLogo from "../public/amazon-logo.png";

const Checkout = () => {
  return (
    <div className="absolute top-0 w-full p-20 bg-white">
      <div className="w-[80%] mx-auto flex">
        <Image src={amazonLogo} alt={"amazon-logo"} width={150} height={150} />
      </div>
      <div>
        <h1>Checkout</h1>
      </div>
      <div></div>
    </div>
  );
};

export default Checkout;
