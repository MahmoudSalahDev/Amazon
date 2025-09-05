import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserWishListAction, removeFromWishListAction } from '../../Network/WishListApi';
import { toast } from 'react-hot-toast';
import WishListCard from '../../components/WishListCard/WishListCard';


export default function WishList() {
    const dispatch = useDispatch()
    const {wishlistData, loading} = useSelector(state=>state.wishlist)
    useEffect(()=>{
        dispatch(getUserWishListAction()).then(res=>{
            console.log(res.payload.data);
        })
        
    },[])
    const handleRemoveFromWishList = (e,productId)=>{
        console.log(productId);
        e.preventDefault()
        dispatch(removeFromWishListAction(productId)).then(res=>{
            if(res.payload.status=="success"){
                toast.success("products removed successfully")
            }
            else if (res?.error?.message == "Rejected") {
                toast.error(res?.payload)
            }
        })
      }
    return (
        <div className="px-4 md:px-0 md:container py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {wishlistData?.data.map((product) => (
                <WishListCard key={product.id} product={product} handleRemoveFromWishList={handleRemoveFromWishList} />
            ))}
      
            </div>
        </div>
    )
}
