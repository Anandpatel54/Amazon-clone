"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import amazonLogo from "../public/amazon-logo-2.webp";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import { supabase } from "@/lib/supabase/Products";

const itemList = [
  "All",
  "Fresh",
  "Amazon miniTV",
  "Sell",
  "Gift Cards",
  "Baby",
  "Buy Again",
  "Browsing History",
  "Amazon Pay",
  "Gift Ideas",
  "Health, Household & Personal Care",
];
const Header = () => {
  const [query, setQuery] = useState<string>("");
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const cart = useAppSelector(getCart);
  const searchHandler = () => {
    router.push(`/search/${query}`);
  };
  useEffect(() => {
    const getUserData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUserData();
  }, []);
  console.log(user);
  return (
    <>
      <div className="bg-[#131921] text-white py-1">
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <Link href={"/"} className="w-[10%]">
            <Image src={amazonLogo} alt={"logo"} width={150} height={150} />
          </Link>
          <div className="w-[55%] flex items-center">
            <input
              className="w-full p-2 rounded-l-md text-black outline-none"
              type="text"
              placeholder="Search Amazon.in"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <div
              onClick={searchHandler}
              className="bg-[#FEBD69] p-2 rounded-r-md cursor-pointer "
            >
              <IoMdSearch size={"24px"} className="text-black cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center justify-around w-[25%]">
            <div
              onClick={() => {
                router.push("/signin");
              }}
              className="cursor-pointer  hover:border border border-transparent hover:border-white p-1"
            >
              <h1 className="text-xs hover:underline">{`${
                user ? user?.identities[0]?.identity_data.full_name : "Signin"
              }`}</h1>
              <h1 className="font-medium text-sm">Account & List</h1>
            </div>
            <div className="cursor-pointer   hover:border border border-transparent hover:border-white p-1">
              <p className="text-xs">Returns</p>
              <h1 className="font-medium text-sm">& Orders</h1>
            </div>
            <Link
              href={"/cart"}
              className="cursor-pointer  hover:border border border-transparent hover:border-white p-1"
            >
              <p className="relative top-3 left-4">{cart.length}</p>
              <div className="flex">
                <div>
                  <FiShoppingCart size={"35px"} />
                </div>
                <h1 className="mt-4">cart</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#232F3E] w-full text-white p-2  flex justify-between items-center">
        <div className="flex items-center justify-between">
          {itemList.map((link, index) => {
            return (
              <Link
                key={index}
                href={`/${link}`}
                className="mx-2 text-[13px] hover:border border border-transparent hover:border-white p-1"
              >
                {link}
              </Link>
            );
          })}
        </div>
        <div className="mr-14">
          <h1
            onClick={async () => {
              const { error } = await supabase.auth.signOut();
              router.push("/signin")
            }}
            className="text-[#FEBD69] font-bold cursor-pointer  hover:underline"
          >
            Sign out
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
