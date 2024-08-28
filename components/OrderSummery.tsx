import React from "react";

const OrderSummery = () => {
  return (
    <div className="border border-gray p-8 h-fit mt-5">
      <div>
        <h1 className="font-bold text-2xl">Order Summery</h1>
        <div className="text-sm my-4">
          <div className="flex items-center justify-between">
            <p>items:</p>
            <p>7070</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Delivery:</p>
            <p>7070</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Total:</p>
            <p>7070</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Promotion Applied:</p>
            <p>7070</p>
          </div>
          <div className="my-2 flex items-center justify-between text-[18px] text-[#B12704] font-bold py-2 border-t border-b border-gray-300">
            <h1>Order Total: </h1>
            <h1>{"78766"}</h1>
          </div>
        </div>
        <button className="bg-[#FFD814] w-full rounded-md px-4 py-1 text-md">
          Place Your Order Now
        </button>
      </div>
    </div>
  );
};

export default OrderSummery;
