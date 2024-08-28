"use client";
import React from "react";
import Image from "next/image";
import amazonLogo from "../public/amazon-logo.png";
import { FaLock } from "react-icons/fa";
import DeliveryAddress from "./DeliveryAddress";
import OrderSummery from "./OrderSummery";

const Checkout = () => {
  return (
    <div className="absolute top-0 w-full p-12 bg-white">
      <div className="flex items-center justify-between w-[80%] mx-auto border-b border-gray-400 pb-5">
        <div>
          <Image
            src={amazonLogo}
            alt={"amazon-logo"}
            width={150}
            height={150}
          />
        </div>
        <div>
          <h1 className="font-bold text-2xl">Checkout</h1>
        </div>
        <div className="text-gray-400">
          <FaLock size={"30px"} />
        </div>
      </div>
      <div className="w-[80%] mx-auto flex justify-between">
        <DeliveryAddress />
        <OrderSummery />
      </div>
    </div>
  );
};

export default Checkout;
