"use client";
import React from "react";
import Image from "next/image";
import amazonLogo from "../public/amazon-logo.png";
import { FaLock } from "react-icons/fa";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";

const Checkout = () => {
  const cart = useAppSelector(getCart);
  return (
    <div className="absolute top-0 w-full p-12 bg-white">
      <div className="w-[80%] mx-auto flex items-center justify-between border-b border-gray-400 pb-5">
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
      <div className="w-[70%] mx-auto border-b border-gray-300 py-2">
        <div className="flex justify-between w-[50%]">
          <h1 className="font-bold text-lg">1. Delivery Address</h1>
          <p className="text-sm">
            Anand patel <br /> Sai ram caloni <br /> BHOPAL, MADHYA PREDESH{" "}
            <br /> add delivery instructions
          </p>
        </div>
      </div>
      <div className="w-[70%] mx-auto border-b border-gray-300 py-2">
        <div className="flex justify-between w-[50%]">
          <h1 className="font-bold text-lg">2. Items and Delivery</h1>
        </div>
        {cart.map((product: any) => {
          return (
            <div key={product._id} className="my-4">
              <div className="flex">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                />
                <div className="ml-4">
                  <h1 className="font-bold">{product.title}</h1>
                  <p className="font-bold text-2xl py-2">{`$${product.price}`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
