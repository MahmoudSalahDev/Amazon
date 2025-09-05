import amazonLogo from "../../assets/images/Amazon.png";
import loc from "../../assets/images/loc.png";
import Egypt from "../../assets/images/Flag_of_Egypt.svg.webp";
import cart from "../../assets/images/cart.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="font-lato ">
        <div id="mainHeading" className="bg-navBgColor px-[20px]">
          <div className="container flex items-center justify-between gap-5 text-white py-[5px]">
            <NavLink to={"/"}>
              <img src={amazonLogo} className="w-[97px]" alt="amazon logo" />
            </NavLink>
            <div className=" hidden lg:flex">
              <img
                src={loc}
                alt="location icon"
                className="h-[22px] self-end me-1"
              />
              <div className="text-[14px] xl:text-[16px]">
                <p className="text-[#C0CCCC] ">Delivering to Surat 394210</p>
                <span className="font-[500]">Update location</span>
              </div>
            </div>
            <div
              id="search"
              className="flex rounded max-w-[400px] overflow-hidden w-full lg:max-w-[300px]  xl:max-w-[400px] 2xl:max-w-[600px]"
            >
              <button className="bg-[#D9D9D9] text-[#676767] p-[14px] flex gap-1">
                All <i className="fa-solid fa-sort-down"></i>
              </button>
              <input
                type="text"
                className="py-[10px] w-full bg-white text-[#696969] px-[15px] focus:outline-none"
                placeholder="Search Amazon.in"
              />
              <button className="bg-mainYellow px-[15px]">
                <i className="fa-solid fa-magnifying-glass text-black"></i>
              </button>
            </div>
            <div className=" gap-3 hidden lg:flex">
              <img
                src={Egypt}
                className="w-[20px] h-[20px]"
                alt="Egyptian flag"
              />
              <span className="cursor-pointer flex gap-1">
                Eg <i className="fa-solid fa-sort-down text-[#C0CCCC]"></i>
              </span>
            </div>
            <NavLink
              className=" items-center gap-1 group cursor-pointer hidden lg:flex"
              to={"/login"}
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              <span className="">Log Out</span>
              <i className="fa-solid fa-arrow-right-from-bracket group-hover:translate-x-[7px] transition-transform"></i>
            </NavLink>
            <NavLink to={"/wishlist"} className="cursor-pointer hidden lg:flex">
              <span className="font-[400]">Wish List</span>
            </NavLink>
            <NavLink className="gap-1 hidden lg:flex" to={"/Cart"}>
              <img src={cart} alt="cart icon" />
              <span className="self-end">Cart</span>
            </NavLink>
            <div className="dropdown dropdown-end lg:hidden">
              <div tabIndex={0} role="button" className="text-[25px] px-[10px]">
                <i className="fa-solid fa-bars"></i>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-navBgColor rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <NavLink to={"/wishlist"} className="cursor-pointer flex">
                    <span className="font-[400]">Wish List</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="gap-1 flex" to={"/Cart"}>
                    <span className="self-end">Cart</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=" items-center gap-1 group cursor-pointer flex"
                    to={"/login"}
                    onClick={() => {
                      localStorage.removeItem("token");
                    }}
                  >
                    <span className="">Log Out</span>
                    <i className="fa-solid fa-arrow-right-from-bracket group-hover:translate-x-[7px] transition-transform"></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-navBgSecColor px-[20px] overflow-clip whitespace-nowrap">
          <div className="container flex gap-[10px] text-white py-[10px] text-[14px] xl:text-[16px]">
            <NavLink to={"/products"} href="#">
              <i className="fa-solid fa-bars"></i> All
            </NavLink>
            <NavLink to={"/products"} href="#">
              Amazon mini TV
            </NavLink>
            <NavLink to={"/products"} href="#">
              Sell
            </NavLink>
            <NavLink to={"/products"} href="#">
              Best Sellers
            </NavLink>
            <NavLink to={"/products"} href="#">
              Today’s Deals
            </NavLink>
            <NavLink to={"/products"} href="#">
              Mobiles
            </NavLink>
            <NavLink to={"/products"} href="#">
              Customer Service
            </NavLink>
            <NavLink to={"/products"} href="#" className="flex gap-1">
              Prime <i className="fa-solid fa-sort-down translate-y-[2px]"></i>
            </NavLink>
            <NavLink to={"/products"} href="#">
              Electronics
            </NavLink>
            <NavLink to={"/products"} href="#">
              Fashion
            </NavLink>
            <NavLink to={"/products"} href="#">
              New Releases
            </NavLink>
            <NavLink to={"/products"} href="#">
              Home & Kitchen
            </NavLink>
            <NavLink to={"/products"} href="#">
              Amazon Pay
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}
