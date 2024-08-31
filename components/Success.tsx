"use client";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import Image from "next/image";
import Link from "next/link";

const Success = () => {
  const cart = useAppSelector(getCart);
  return (
    <div className="absolute top-0 w-full bg-white py-14">
      <div className="text-center mx-auto w-[70%]">
        <h1>Thanku for ordering with Amazon.in</h1>
        <div>
          <h1 className="font-bold py-3 underline">Order Details</h1>
          {cart.map((product: any) => {
            return (
              <div key={product._id}>
                <div className="flex mt-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                  />
                  <div className="ml-5 font-bold mt-4">
                    <h1>{product.title}</h1>
                    <h1>{`$${product.price}`}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="my-5">
        <Link href={"/"} className="bg-[#FFD814] px-4 py-2 rounded-md">Buy more product</Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
