"use client";
import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "@/lib/supabase/Products";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Signin = () => {
  return (
    <div className="bg-white py-24 absolute top-0 w-full">
      <div className="w-[25%] mx-auto my-4">
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </div>
    </div>
  );
};

export default Signin;
