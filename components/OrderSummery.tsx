import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { supabase } from "@/lib/supabase/Products";
import { getCart } from "@/redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);

const OrderSummery = () => {
  const cart = useAppSelector(getCart);
  const createStripeSession = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const stripe = await stripePromise;
    //
    const checkoutSession = await axios.post("/api/checkout-sessions", {
      items: cart,
      email: user?.email,
    });

    // redirect to checkout session
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result?.error) {
      console.log(result.error.message);
    }
  };

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
        <button
          onClick={createStripeSession}
          className="bg-[#FFD814] w-full rounded-md px-4 py-1 text-md"
        >
          Place Your Order Now
        </button>
      </div>
    </div>
  );
};

export default OrderSummery;
