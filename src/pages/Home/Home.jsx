import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import HomeProducts from "../../components/HomeProducts";
import Slider from "../../components/slider";
import { GetAllProductsAction } from "../../Network/ProductsApi";
import Trends from "../../components/trends";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProductsAction());
  }, []);
  const { productsData } = useSelector((state) => state.products);
  console.log("productsData", productsData);
  console.log("Hello");
  return (
    <>
      <Slider
        products={productsData?.data}
        height="350px"
        navigationStyle={false}
      />
      <div style={{ backgroundColor: "#575757" }}>
        <HomeProducts productsData={productsData} paginationStyle={false} />
        <div className="container py-[25px] px-[25px]">
          <div className="bg-white">
            <h2 className="font-bold text-[22px] text-black pt-3 px-4">
              Best Sellers in Clothing & Accessories
            </h2>
            <Slider
              products={productsData?.data?.slice(6, 12)}
              height="200px"
              navigationStyle={true}
            />
          </div>
        </div>
        <Trends />
        <div className="container px-[25px]">
          <div className="bg-white">
            <h2 className="font-bold text-[22px] text-black pt-3 px-4">
              Min. 50% off | Unique kitchen finds | Amazon Brands & more{" "}
            </h2>
            <Slider
              products={productsData?.data?.slice(12, 18)}
              height="200px"
              navigationStyle={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
