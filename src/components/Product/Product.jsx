
import { IoChevronDownOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import StarRating from "../StarRating";
import { GoHeart } from "react-icons/go";
import { NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { addProductToCartAction } from "../../Network/CartApi";
const Product = ({ product ,handleAddWishlist}) => {
  const dispatch = useDispatch()
  
  const addToCart = (e) => {
    e.preventDefault();
   

    dispatch(addProductToCartAction(product.id)).then(res=>{
      if(res.payload.status=="success"){
        toast.success("products Added to cart")
      }
      else if (res?.error?.message == "Rejected") {
          toast.error(res?.payload)
      }
    })
  };
 
 
  return (
    <NavLink to={`/productDetails/${product.id}`} className="card w-full bg-white border border-[#D9D9D9] border-[border: 1.08px solid] overflow-hidden relative group ">
      
        <button
        className="absolute top-32 right-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 rounded-full p-1"
        onClick={(e) => handleAddWishlist(e,product.id)}
      >
        <GoHeart className="w-6 h-6 hover:text-red-500" />
      </button>
     
      
      <figure className="p-2">
        <img
          src={product.imageCover}
          alt={product.title}
          loading="lazy"
          className="w-full h-48 object-contain"
        />
      </figure>
      <div className="card-body px-4 py-2">
        <h2 className="text-[16.18px] font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>
        <div className="flex items-center text-sm mt-1">
          <span className="flex items-center">
            <StarRating rating={product.ratingsAverage} />
  
            <IoChevronDownOutline />
          </span>
          <span className="text-[#1F8394] text-[16.65px] ml-2">
            {product.ratingsQuantity}
          </span>
        </div>
        <p className="text-[#1F8394] text-[12.94px]">
          {product.sold} in past month
        </p>
        <div className="flex flex-col items-baseline my-2 text-[#1F8394]  ">
          <span className="text-[21.57px] text-black font-[400]">
            {product.price} $
          
              <span className="text-[13.42px] font-[400] ml-2 text-[#1F8394]">
                20% off
              </span>
          
          </span>
          <p className=" text-[12.94px] ">Save extra with No Cost EMI</p>
        </div>
        <p className="text-[12.94px] font-[300]">
          Free delivery by{" "}
          <span className="font-[600]">Sun, 15 Sept, 7:00 am - 9:00 pm</span>
        </p>
        <div className="flex gap-4">
        <button
          onClick={(e) => addToCart(e)}
          className="w-[99px] h-[32px] bg-[#FFCC00] hover:bg-[#ebc400] text-[11.89px] font-[300] mt-2 mb-6 rounded-[19.81px] cursor-pointer "
        >
          Add to cart
        </button>

       

        </div>
      </div>
    </NavLink>
  );
};
export default Product;
