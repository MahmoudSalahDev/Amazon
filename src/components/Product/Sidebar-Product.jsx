import { useEffect, useState } from "react";
import { FiStar } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProductsAction, GetCategoriesAction } from "../../Network/ProductsApi";

const Sidebar = ({ setProducts }) => {

  const dispatch = useDispatch()
  const {categoriesData,loading} = useSelector(state=>state.categories)
 

  useEffect(()=>{
    dispatch(GetCategoriesAction())
  },[])
  const handleFilterProducts = (e)=>{
    const filterName= e.target.name;
    const filterValue = e.target.value
    console.log(e.target.name);
    dispatch(GetAllProductsAction({[filterName]:filterValue}))
  
  }
  return (
    <div className="w-1/6 p-4 pt-0 bg-white ">
      <div className="mb-4">
        <h4 className="text-lg font-[600]">Delivery Day</h4>
        <label className="flex items-center space-x-2 mt-1">
          <input
            type="radio"
            name="delivery"
            className="radio radio-sm border-black"
          />
          <span>Get It in 2 Days</span>
        </label>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-[700]">Customer Reviews</h4>
        <div className="flex items-center mt-1 ">
          <GoStarFill className=" text-yellow-400" />
          <GoStarFill className=" text-yellow-400" />
          <GoStarFill className=" text-yellow-400" />
          <GoStarFill className=" text-yellow-400" />
          <FiStar className="text-yellow-400" />
          <span>& up</span>
        </div>
      </div>
      <div className="my-4">
        <h4 className="text-lg font-[600]">Categories</h4>
        {categoriesData?.map(
          (cat) => (
            <label key={cat._id} className="flex items-center space-x-2 mt-2">
              <input type="radio" name="category[in]" value={cat._id} className="radio radio-sm" onChange={handleFilterProducts} />
              <span>{cat.name}</span>
            </label>
          )
        )}
      </div>
      <div>
        <h4 className="text-lg font-[600]">Price</h4>
        {[
          "All",
          "₹5900 to ₹10,000",
          "₹10,000 to ₹20,000",
          "₹20,000 to ₹30,000",
          "₹30,000 to ₹45,000",
        ].map((price) => (
          <label key={price} className="flex items-center space-x-2 mt-1">
            <input type="radio" name="price" className="radio radio-sm" />
            <span>{price}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
