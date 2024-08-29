//"use client";
import React from "react";
import Image from "next/image";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";

const DeliveryAddress = () => {
  const cart = useAppSelector(getCart);
  return (
    <div>
      <div className="border-b border-gray-300 py-2">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">1. Delivery Address</h1>
          <p className="text-sm ml-8">
            Anand patel <br /> Sai ram caloni <br /> BHOPAL, MADHYA PREDESH{" "}
            <br /> add delivery instructions
          </p>
        </div>
      </div>
      <div className="border-b border-gray-300 py-2">
        <div className="flex justify-between">
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

export default DeliveryAddress;
