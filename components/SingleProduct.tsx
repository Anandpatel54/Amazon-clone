import React from "react";
import Image from "next/image";
import Ratings from "./shared/Ratings";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <div>
        {singleProduct.map((product: any) => {
          return (
            <div key={product} className="flex">
              <div className="bg-gray-100">
                <Image
                  className="mix-blend-multiply p-4"
                  src={product.image}
                  width={400}
                  height={500}
                  alt={product.title}
                />
              </div>
              <div className="ml-5">
                <h1 className="font-bold text-lg">{product.title}</h1>
                <p>{product.description}</p>
                <Ratings ratings={product.rating} />
                <h1 className="font-bold">{`$${product.price}`}</h1>
                <div>
                  <h1>About this item</h1>
                  <li>
                    Best for Gifting and for personal Use, combine it with
                    matching dress and be the limelight of every Occassion
                  </li>
                  <li>
                    Nickel free and Lead free as per International Standards
                    that makes it very skin friendly. The plating is
                    non-allergic and safe for all environments
                  </li>
                  <li>
                    lated with High Quality Polish for Long Lasting Finish
                  </li>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleProduct;
