import { useState } from "react";
import { supabase } from "../Products";

export const useSupabase = () => {
  const [products, setProducts] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);
  const [singleProduct, setSingleProduct] = useState<any>([]);
  const [mensProduct, setMensProduct] = useState<any>([]);
  const [womensProduct, setwomensProduct] = useState<any>([]);
  const getDataFromSupabase = async () => {
    let { data, error } = await supabase.from("product").select("*");
    if (data) {
      setProducts(data);
      // console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };
  const getFilteredData = async (query: string) => {
    let { data, error } = await supabase
      .from("product")
      .select("*")
      .or(
        `title.ilike.%${query}%, description.ilike.%${query}%, category.ilike.%${query}%`
      ); // cloth
    if (data) {
      setFilterData(data);
      // console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };
  const getSingleProduct = async (id: number) => {
    let { data, error } = await supabase
      .from("product")
      .select("*")
      .eq("id", id);
    if (data) {
      setSingleProduct(data);
    }
    if (error) {
      console.log(error);
    }
  };
  const getMensClothing = async () => {
    let { data, error } = await supabase
      .from("product")
      .select("*")
      .ilike("category", `men's clothing`);
    if (data) {
      setMensProduct(data);
    }
    if (error) {
      console.log(error);
    }
  };
  const getWomensClothing = async () => {
    let { data, error } = await supabase
      .from("product")
      .select("*")
      .ilike("category", `women's clothing`);
    if (data) {
      setwomensProduct(data);
    }
    if (error) {
      console.log(error);
    }
  };

  return {
    products,
    getFilteredData,
    filterData,
    getDataFromSupabase,
    getSingleProduct,
    singleProduct,
    getMensClothing,
    mensProduct,
    getWomensClothing,
    womensProduct,
  };
};
