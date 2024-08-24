import React from "react";
import Image from "next/image";
import amazonLogo from "../public/amazon-logo-2.webp";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="px-2 py-1 bg-[#485768] mt-8">
        <h1 className="text-center my-2 text-white cursor-pointer">
          Back to top
        </h1>
      </div>
      <div className="w-full h-fit bg-[#222F3E] flex justify-between text-white p-16">
        <div className="">
          <h1 className="font-bold py-4">
            Get to Know <br /> Us
          </h1>
          <div className="text-sm text-[#DDDDDD] leading-loose cursor-pointer">
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Science</p>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold py-4">
            Connect with <br /> Us
          </h1>
          <div className="text-sm text-[#DDDDDD] leading-loose cursor-pointer">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold py-4">Make Money with Us</h1>
          <div className="text-sm text-[#DDDDDD] leading-loose cursor-pointer">
            <p>Sell on Amazon</p>
            <p>Sell under Amazon Accelerator</p>
            <p>Protect and Build Your Brand</p>
            <p>Amazon Global Selling</p>
            <p>Supply to Amazon</p>
            <p>Become an Affiliate</p>
            <p>Fulfilment by Amazon</p>
            <p>Advertise Your Products</p>
            <p>Amazon Pay on Merchants</p>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold py-4">Let Us Help You</h1>
          <div className="text-sm text-[#DDDDDD] leading-loose cursor-pointer">
            <p>Your Account Help</p>
            <p>Returns Centre</p>
            <p>Recalls and Product Safety Alerts</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="flex items-center px-[30%] w-full bg-[#222F3E] py-10 pt-6">
          <Link href={"/"} className="w-[20%] mt-2">
            <Image src={amazonLogo} alt={"logo"} width={150} height={150} />
          </Link>
          <div className="ml-16">
            <button className="text-white border border-gray-200 px-4 py-1 rounded-sm mx-3">
              English
            </button>
            <button className="text-white border border-gray-200 px-8  py-1 rounded-sm mx-3">
              🇮🇳 India
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#131A22] text-white grid grid-cols-4 text-center p-24 text-xs">
        <div className="cursor-pointer  hover:underline">
          <h1 className="text-sm">AbeBooks</h1>
          <p className="text-gray-400">
            Books, arts <br />& collectibles
          </p>
        </div>
        <div className="cursor-pointer  hover:underline">
          <h1 className="text-sm">Amazon Web Services</h1>
          <p className="text-gray-400">
            Scable Cloud <br />
            Computing Services
          </p>
        </div>
        <div className="cursor-pointer  hover:underline">
          <h1 className="text-sm">Audible</h1>
          <p className="text-gray-400">
            Dwonnload <br />
            Audio Book
          </p>
        </div>
        <div className="cursor-pointer  hover:underline">
          <h1 className="text-sm">IMDb</h1>
          <p className="text-gray-400">
            Movies, TV <br />& Celebrities
          </p>
        </div>
        <div className="my-3 cursor-pointer  hover:underline">
          <h1 className="text-sm">Shopbop</h1>
          <p className="text-gray-400">
            Designer <br />
            Fashion Brands{" "}
          </p>
        </div>
        <div className="my-3 cursor-pointer  hover:underline">
          <h1 className="text-sm">Amazon Business</h1>
          <p className="text-gray-400">
            Everything For <br />
            Your Business
          </p>
        </div>
        <div className="my-3 cursor-pointer  hover:underline">
          <h1 className="text-sm">Prime Now</h1>
          <p className="text-gray-400">
            2-Hours Delivery <br />
            on Everyday Items
          </p>
        </div>
        <div className="my-3 cursor-pointer  hover:underline">
          <h1 className="text-sm">Amazon Prime Music</h1>
          <p className="text-gray-400">
            100 million songs, ad-free <br /> Over 15 million podcast episodes
          </p>
        </div>
      </div>
      <div className=" bg-[#131A22] text-white text-center ">
        <h3 className="text-gray-200 text-xs">
          <span className="cursor-pointer  hover:underline">
            Conditions of Use & Sale
          </span>{" "}
          <span className="cursor-pointer  hover:underline">
            Privacy Notice
          </span>{" "}
          <span className="cursor-pointer  hover:underline">
            Interest-Based Ads
          </span>{" "}
          <br /> © 1996-2024, Amazon.com, Inc. or its affiliates
        </h3>
      </div>
    </div>
  );
};

export default Footer;
