import React from "react";
import SubTotal from "./shared/SubTotal";

const ProccedToBuy = ({
  length,
  totalPrice,
}: {
  length: number,
  totalPrice: number,
}) => {
  return (
    <div className="w-[25%] h-fit border border-gray-300 ">
      <div className="p-4 ">
        <p>
          <span className="text-[#007600]">Your order is eligible for FREE Delivery.</span> Choose FREE Delivery option
          at checkout
        </p>
        <SubTotal left={true} length={length} totalPrice={totalPrice} />
        <button className="bg-[#FFD814] w-full py-1 rounded-md shadow-md my-4">Procced to Buy</button>
      </div>
    </div>
  );
};

export default ProccedToBuy;
