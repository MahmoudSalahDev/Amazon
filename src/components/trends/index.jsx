import bestSellerToys from "../../assets/images/best-seller/1.png";
import bestSellerToys2 from "../../assets/images/best-seller/2.png";
import bestSellerToys3 from "../../assets/images/best-seller/3.png";
import bestSellerToys4 from "../../assets/images/best-seller/4.png";

import customerMostLovedProducts1 from "../../assets/images/customer-most-loved-products/1.png";
import customerMostLovedProducts2 from "../../assets/images/customer-most-loved-products/2.png";
import customerMostLovedProducts3 from "../../assets/images/customer-most-loved-products/3.png";
import customerMostLovedProducts4 from "../../assets/images/customer-most-loved-products/4.png";

import bestSellerBeauty1 from "../../assets/images/best-seller-beauty/1.png";
import bestSellerBeauty2 from "../../assets/images/best-seller-beauty/2.png";
import bestSellerBeauty3 from "../../assets/images/best-seller-beauty/3.png";
import bestSellerBeauty4 from "../../assets/images/best-seller-beauty/4.png";

import latestStyles1 from "../../assets/images/latest-styles/1.png";
import latestStyles2 from "../../assets/images/latest-styles/2.png";
import latestStyles3 from "../../assets/images/latest-styles/3.png";
import latestStyles4 from "../../assets/images/latest-styles/4.png";

function Trends() {
  return (
    <div className="container px-[25px] mb-6">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {" "}
        <div className="card p-[15px] bg-white shadow-lg rounded-none">
          {" "}
          <h2 className="font-bold text-[22px]">Best Seller in Toys & Games</h2>
          <div>
            <img className="w-full h-[185px]" src={bestSellerToys} />
          </div>
          <p
            className="font-[11.58] mt-2"
            style={{ fontFamily: "Noto Serif Gujarati" }}
          >
            Storio Rechargeable Toys Talking Cactus Baby Toys for Kids Dancing
            Cactus Toys…
          </p>
          <div className="grid grid-cols-4 gap-[10px] mt-[15px] mb-[15px]">
            <div
              style={{
                borderRadius: "5px",
                border: "2px solid #1F8394",
                padding: "10px",
              }}
            >
              <img
                src={bestSellerToys}
                alt="best-seller-toys-1"
                className="h-full w-full"
              />
            </div>
            <div
              style={{
                borderRadius: "5px",
                border: "2px solid #1F8394",
                padding: "10px",
              }}
            >
              {" "}
              <img
                src={bestSellerToys2}
                alt="best-seller-toys-2"
                className="h-full w-full"
              />
            </div>
            <div
              style={{
                borderRadius: "5px",
                border: "2px solid #1F8394",
                padding: "10px",
              }}
            >
              {" "}
              <img
                src={bestSellerToys3}
                alt="best-seller-toys-3"
                className="h-full w-full"
              />
            </div>
            <div
              style={{
                borderRadius: "5px",
                border: "2px solid #1F8394",
                padding: "10px",
              }}
            >
              {" "}
              <img
                src={bestSellerToys4}
                alt="best-seller-toys-4"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
        <div className="card p-[15px] bg-white shadow-lg rounded-none">
          {" "}
          <h2 className="font-bold text-[22px]">
            Customers’ Most-Loved Products{" "}
          </h2>
          <div className="grid grid-cols-2 gap-[10px] mt-[15px] mb-[15px]">
            <div
              style={{
                padding: "10px",
              }}
            >
              <img
                src={customerMostLovedProducts1}
                alt="customer-most-loved-product1"
                className="w-full h-[116px]"
              />
            </div>
            <div
              style={{
                padding: "10px",
              }}
            >
              {" "}
              <img
                src={customerMostLovedProducts2}
                alt="customer-most-loved-product2"
                className="w-full h-[116px]"
              />{" "}
            </div>
            <div
              style={{
                padding: "10px",
              }}
            >
              {" "}
              <img
                src={customerMostLovedProducts3}
                alt="customer-most-loved-product3"
                className="w-full h-[116px]"
              />{" "}
            </div>
            <div
              style={{
                padding: "10px",
              }}
            >
              {" "}
              <img
                src={customerMostLovedProducts4}
                alt="customer-most-loved-product4"
                className="w-full h-[116px]"
              />{" "}
            </div>
          </div>
          <a href="" className="font-medium text-[15px] text-[#1F8394]">
            Explore more
          </a>
        </div>
        <div className="card p-[15px] bg-white shadow-lg rounded-none">
          {" "}
          <h2 className="font-bold text-[22px]">Best Sellers in Beauty </h2>
          <div className="grid grid-cols-2 gap-[10px] mt-[15px] mb-[15px]">
            <div
              style={{
                padding: "10px",
              }}
            >
              <img
                src={bestSellerBeauty1}
                alt="best-seller-beatuty-1"
                className="w-full h-[162px]"
              />
            </div>
            <div
              style={{
                padding: "10px",
              }}
            >
              {" "}
              <img
                src={bestSellerBeauty2}
                alt="best-seller-beatuty-2"
                className="w-full h-[162px]"
              />{" "}
            </div>
            <div
              style={{
                padding: "10px",
              }}
            >
              {" "}
              <img
                src={bestSellerBeauty3}
                alt="best-seller-beatuty-3"
                className="w-full h-[162px]"
              />{" "}
            </div>
            <div
              style={{
                padding: "10px",
              }}
            >
              {" "}
              <img
                src={bestSellerBeauty4}
                alt="best-seller-beatuty-4"
                className="w-full h-[162px]"
              />{" "}
            </div>
          </div>
        </div>
        <div className="card p-[15px] bg-white shadow-lg rounded-none">
          {" "}
          <h2 className="font-bold text-[22px]">
            Latest styles | Dresses, kurta & more | 50% -...{" "}
          </h2>
          <div className="grid grid-cols-2 gap-[10px] mt-[15px] mb-[15px]">
            <div
              style={{
                padding: "10px",
              }}
            >
              <img
                src={latestStyles1}
                alt="latest-styles-1"
                className="w-full h-[116px]"
              />
              <div className="font-[15px]">Kurta & sets</div>
            </div>
            <div
              style={{
                padding: "10px",
              }}
            >
              {" "}
              <img
                src={latestStyles2}
                alt="latest-styles-2"
                className="w-full h-[116px]"
              />{" "}
              <div className="font-[15px]">Tops</div>
            </div>
            <div
              style={{
                padding: "10px",
              }}
            >
              {" "}
              <img
                src={latestStyles3}
                alt="latest-styles-3"
                className="w-full h-[116px]"
              />{" "}
              <div className="font-[15px]">Dresses</div>
            </div>
            <div
              style={{
                padding: "10px",
              }}
            >
              {" "}
              <img
                src={latestStyles4}
                alt="latest-styles-4"
                className="w-full h-[116px]"
              />{" "}
              <div className="font-[15px]">Sarees</div>
            </div>
          </div>
          <a href="" className="font-medium text-[15px] text-[#1F8394]">
            See more{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Trends;
