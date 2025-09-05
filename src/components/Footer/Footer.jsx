import amazon from "../../assets/images/Amazon.png";
import Egypt from "../../assets/images/Flag_of_Egypt.svg.webp";

export default function Footer() {
  return (
    <>
      <footer className="text-white ">
        <div id="toTop" className="bg-[#37475A] ">
          <div className="container py-[17px] flex justify-center">
            <span className="cursor-pointer">Back to Top</span>
          </div>
        </div>
        <div className="bg-navBgSecColor">
          <div className="container px-[20px] sm:px-[0px] py-[17px] flex flex-col">
            <div className="grid grid-cols-1 gap-y-[30px] sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col ">
                <h5 className="font-[600]">Get to know Us</h5>
                <ul className="flex flex-col gap-[4.5px]">
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Press Releases
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Amazon Science
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col ">
                <h5 className="font-[600]">Connect with Us</h5>
                <ul className="flex flex-col gap-[4.5px]">
                  <li>
                    <a
                      href="www.facebook.com"
                      target="_blank"
                      className="font-[300] hover:underline"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="www.x.com"
                      target="_blank"
                      className="font-[300] hover:underline"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="www.instagram.com"
                      target="_blank"
                      className="font-[300] hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col ">
                <h5 className="font-[600]">Make Money with Us</h5>
                <ul className="flex flex-col gap-[4.5px]">
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Sell on Amazon
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Sell under Amazon Accelerator
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Protect and Build Your Brand
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Amazon Global Selling
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Supply to Amazon
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Become an Affiliate
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Fulfilment by Amazon
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Advertise Your Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Amazon Pay on Merchants
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col ">
                <h5 className="font-[600]">Let Us Help You</h5>
                <ul className="flex flex-col gap-[4.5px]">
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Your Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Returns Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Recalls and Products Safety Alerts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      100% Purchase Protection
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Amazon App Download
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-[300] hover:underline">
                      Help
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#4C4C4C] mt-[40px] mb-[20px]"></div>
          <div className="container grid grid-cols-1 sm:grid-cols-2 pb-[50px] gap-y-3">
            <img
              src={amazon}
              alt="amazon logo"
              className="translate-x-[0px] sm:translate-x-[-40px] justify-self-center sm:justify-self-end"
            />
            <div className="flex gap-3 justify-self-center sm:justify-self-start">
              <div className="flex items-center border border-solid border-[#B4B4B4] text-[#B4B4B4] rounded-[3px] p-[10px] gap-[10px] w-fit">
                <i className="fa-solid fa-globe"></i>
                <select name="" id="" className="bg-transparent cursor-pointer">
                  <option value="" className="text-black">
                    {" "}
                    English
                  </option>
                  <option value="" className="text-black">
                    {" "}
                    Aribic
                  </option>
                  <option value="" className="text-black">
                    {" "}
                    German
                  </option>
                </select>
              </div>
              <div className="flex items-center border border-solid border-[#B4B4B4] rounded-[3px] p-[10px] gap-[10px] w-fit">
                <img
                  src={Egypt}
                  className="w-[20px] h-[20px]"
                  alt="Egyptian flag"
                />
                <span className="text-[#B4B4B4]">Eg</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-navBgColor py-[30px]">
          <div className="container">
            <div className="grid grid-cols-1 gap-y-[30px] sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col gap-[20px]">
                <div>
                  <h5 className="font-[500]">AbeBooks</h5>
                  <p className="text-[#999999] font-[300] ">
                    Books, art <br /> & collectibles
                  </p>
                </div>
                <div>
                  <h5 className="font-[500]">Shop bop</h5>
                  <p className="text-[#999999] font-[300] ">
                    Designer
                    <br />
                    Fashion Brands
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div>
                  <h5 className="font-[500]">Amazon web Services</h5>
                  <p className="text-[#999999] font-[300] ">
                    Scalable Cloud <br />
                    Computing Services
                  </p>
                </div>
                <div>
                  <h5 className="font-[500]">Amazon Business</h5>
                  <p className="text-[#999999] font-[300] ">
                    Everything For <br />
                    Your Business
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div>
                  <h5 className="font-[500]">Audible</h5>
                  <p className="text-[#999999] font-[300] ">
                    Download <br />
                    Audio Books
                  </p>
                </div>
                <div>
                  <h5 className="font-[500]">Prime Now</h5>
                  <p className="text-[#999999] font-[300] ">
                    2-Hour Delivery <br />
                    on Everyday Items
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div>
                  <h5 className="font-[500]">IMDb</h5>
                  <p className="text-[#999999] font-[300] ">
                    Movies, TV <br />& Celebrities
                  </p>
                </div>
                <div>
                  <h5 className="font-[500]">Amazon Prime Music</h5>
                  <p className="text-[#999999] font-[300] ">
                    100 million sings, ad-free <br />
                    Over 15 million podcast episodes
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-[15px] mt-7">
              <span className="hover:underline">Conditons of Use & Sale</span>
              <span className="hover:underline">Conditons of Use & Sale</span>
              <span className="hover:underline">Conditons of Use & Sale</span>
            </div>
            <p className="text-center">
              1996-2024, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
