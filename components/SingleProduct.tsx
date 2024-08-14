import React from "react";
import Image from "next/image";
import Ratings from "./shared/Ratings";
import AddToCart from "./AddToCart";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <div className="flex justify-between">
        {singleProduct.map((product: any) => {
          return (
            <div  key={product.id} className='flex'>
              <div className="flex">
                <div className="bg-gray-100 rounded-md">
                  <Image
                    className="mix-blend-multiply p-4"
                    src={product.image}
                    width={300}
                    height={300}
                    alt={product.title}
                  />
                </div>
                <div className="mx-4 w-[70%]">
                  <h1 className="font-bold text-xl">{product.title}</h1>
                  <p className="text-sm mt-4">{product.description}</p>
                  <div className="mt-4">
                    <Ratings ratings={product.rating} />
                  </div>
                  <h1 className="font-bold mt-4">{`$${product.price}`}</h1>
                  <div className="mt-4">
                    <h1 className="font-bold text-2xl">About this item</h1>
                    <li className="text-sm mt-2">
                      Best for Gifting and for personal Use, combine it with
                      matching dress and be the limelight of every Occassion
                    </li>
                    <li className="text-sm mt-2">
                      Nickel free and Lead free as per International Standards
                      that makes it very skin friendly. The plating is
                      non-allergic and safe for all environments
                    </li>
                    <li className="text-sm mt-2">
                      lated with High Quality Polish for Long Lasting Finish
                    </li>
                  </div>
                </div>
              </div>
              <AddToCart product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleProduct;
