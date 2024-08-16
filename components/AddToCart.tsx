import prime from "../public/prime-logo.png";
import Image from "next/image";
import { useAppDispatch } from "@/lib/supabase/hooks/redux";
import { addToCart } from "@/redux/cartSlice";
import { useRouter } from 'next/navigation';

const AddToCart = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className="border border-gray-300 rounded-md h-fit text-sm w-[90%]">
      <div className="p-4">
        <Image src={prime} width={40} height={40} alt={"prime"} />
      </div>
      <div className="p-4">
        <h1 className="text-sm">
          <span className="text-[#147C8F]">FREE delivery</span> as soon as
          Friday, 16 August,<span className="text-[#147C8F]">Details</span>
        </h1>
        <h1 className="mt-2 text-sm">
          Or fastest delivery Tomorrow, 16 August. Order within 15 hrs 53 min.
          Details
        </h1>
        <p className="mt-2 text-sm">Deliver to Anand - bhopal 462010</p>
        <button
          onClick={() => {
            dispatch(addToCart(product));
            router.push("/cart");
          }}
          className="bg-[#FFD814] w-full  rounded-full py-2 my-2"
        >
          Add to Cart
        </button>
        <button className="bg-[#FA8900] w-full  rounded-full py-2 my-1">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
