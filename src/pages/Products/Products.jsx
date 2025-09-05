import { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import Sidebar from "../../components/Product/Sidebar-Product";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProductsAction } from "../../Network/ProductsApi";
import { addProductToWishListAction } from "../../Network/WishListApi";
import { toast } from "react-hot-toast";

function Products() {
    const dispatch = useDispatch()
    const { productsData, loading } = useSelector(state => state.products)
    useEffect(() => {
        dispatch(GetAllProductsAction()).then(res => {
            // console.log(res.payload.data);
        })

    }, [])

    const handleAddWishlist = (e, productId) => {
        e.preventDefault();
        dispatch(addProductToWishListAction(productId)).then(res => {
            if (res.payload.status == "success") {
                toast.success("product added successfully")
            }
            else if (res?.error?.message == "Rejected") {
                toast.error(res?.payload)
            }
        })
    }

    
    return (
        <div className="flex flex-col md:flex-row p-4 relative">
            <Sidebar className="w-full md:w-1/6" />
            <div className="w-full md:w-5/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[19px]">
                {productsData?.data.map((product) => (
                    <Product key={product.id} product={product} handleAddWishlist={handleAddWishlist} />
                ))}
            </div>
        </div>
    );
}

export default Products;
