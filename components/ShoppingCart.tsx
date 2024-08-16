"use client";
import React from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/supabase/hooks/redux";
import {
  decrementQuantity,
  getCart,
  incrementQuantity,
  removeFromTheCart,
} from "@/redux/cartSlice";

const ShoppingCart = () => {
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex justify-between items-center border-b border-gray-300 py-3">
        <h1 className="font-bold text-2xl">ShoppingCart</h1>
        <h1 className="font-medium">Price</h1>
      </div>

      {cart.map((product: any) => {
        return (
          <div key={product.id} className="my-4 flex justify-between">
            <div className="flex">
              <div>
                <Image
                  src={product.image}
                  width={100}
                  height={100}
                  alt={product.title}
                />
              </div>
              <div className="ml-6">
                <h1 className="font-medium">{product.title}</h1>
                <p className="text-[#007600] my-2 text-xs font-bold">
                  In Stock
                </p>
                <h1
                  onClick={() => {
                    dispatch(removeFromTheCart(product.id));
                  }}
                  className="font-bold text-red-500 cursor-pointer"
                >
                  Remove
                </h1>
                <div className="flex items-center justify-between bg-gray-200 rounded-md px-5 py-1 my-4 w-fit text-xl font-medium">
                  <div
                    onClick={() => {
                      product.quantity > 1 &&
                        dispatch(decrementQuantity(product));
                    }}
                    className="cursor-pointer mr-4"
                  >
                    -
                  </div>
                  <div className="">{product.quantity}</div>
                  <div
                    onClick={() => {
                      dispatch(incrementQuantity(product));
                    }}
                    className="cursor-pointer ml-4"
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-2xl">{`$${product.price}`}</h1>
              <p className="text-xs py-1">
                M.R.P. : <span className="line-through">$500</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShoppingCart;
