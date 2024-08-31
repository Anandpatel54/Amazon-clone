"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useSupabase } from "@/lib/supabase/hooks/useSupabase";
import CategoryWiseProduct from "./shared/CategoryWiseProduct";
import Footer from "./Footer";

const HomePage = () => {
  const { getMensClothing, mensProduct, getWomensClothing, womensProduct } =
    useSupabase();
  useEffect(() => {
    getMensClothing();
    getWomensClothing();
  }, [getMensClothing, getWomensClothing]);
  return (
    <div>
      <Image
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.5))",
        }}
        src={
          "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/YMF/YMF_S4/3000x1200_V1._CB567147650_.jpg"
        }
        height={1000}
        width={10000}
        alt=""
      />
      <div className="w-[85%] mx-auto grid grid-cols-4 gap-4 relative -top-64">
        {mensProduct.map((product) => (
          <div key={product.id}>
            <CategoryWiseProduct product={product} />
          </div>
        ))}
        {womensProduct.map((product) => (
          <div key={product.id}>
            <CategoryWiseProduct product={product} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
