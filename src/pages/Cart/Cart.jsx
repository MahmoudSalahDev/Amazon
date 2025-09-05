import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCartAction,
  getUserCartAction,
  removeFromCartAction,
} from "../../Network/CartApi";
import { toast } from "react-hot-toast";
import EmptyCart from "../../../src/assets/images/empty-cart.png";
export default function Cart() {
  const dispatch = useDispatch();
  const { cartData, loading } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getUserCartAction()).then((res) => {
      console.log(res);
    });
  }, []);

  function deleteProduct(id) {
    dispatch(removeFromCartAction(id)).then((res) => {
      if (res.payload.status == "success") {
        toast.success("products removed from cart");
      } else if (res?.error?.message == "Rejected") {
        toast.error(res?.payload);
      }
    });
  }

  const clearCart = () => {
    dispatch(clearCartAction()).then((res) => {
      if (res.payload.message == "success") {
        toast.success("products removed from cart");
      } else if (res?.error?.message == "Rejected") {
        toast.error(res?.payload);
      }
    });
  };

  return (
    <div className="bg-gray-100 px-1 flex flex-col md:flex-row gap-3">
      <div className="bg-white p-5 md:w-3/4 w-full flex flex-col items-start ">
        <div className="text-2xl font-bold">Shopping Cart</div>
        {cartData?.numOfCartItems > 0 && (
          <>
            <button
              onClick={clearCart}
              className="cursor-pointer capitalize btn btn-soft btn-error text-white my-2"
            >
              clear cart
            </button>
            <div className="text-right px-[20px] text-[20px] font-semibold w-full">
              Price
            </div>
          </>
        )}
        {cartData?.numOfCartItems > 0 ? (
          <div className="flex flex-col w-full">
            {cartData?.data?.products?.map((product, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between p-5 border-t border-gray-200"
                >
                  <div className="flex flex-col items-center sm:flex-row w-4/5">
                    <div className="md:w-1/5 w-full max-w-[200px] flex-shrink-0">
                      <img
                        src={product?.product?.imageCover}
                        alt="product image"
                        className="w-full"
                      />
                    </div>

                    <div className="flex flex-col p-3 gap-2">
                      <h4 className="text-lg">{product?.product?.title}</h4>
                      <div className="text-green-700 text-sm">In Stock</div>
                      <div className="text-gray-600 text-sm">
                        Eligible for FREE Shipping
                      </div>
                      <div className="w-16">
                        <img
                          src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                          alt="fulfillment"
                          className="w-full"
                        />
                      </div>
                      <button
                        onClick={() => {
                          deleteProduct(product?.product?._id);
                        }}
                        className="bg-yellow-400 hover:bg-[#e4b600] px-2 py-1 text-sm w-fit rounded-md cursor-pointer font-medium"
                      >
                        Remove From Cart
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <span className="text-lg font-semibold text-end">
                      {product?.price} E.G
                    </span>
                    <div className="flex flex-col items-center">
                      <h6 className="text-[20px] font-semibold">Quantity:</h6>
                      <span>{product?.count}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <img src={EmptyCart} alt="empty-cart" className="mx-auto" />
        )}
      </div>

      {cartData?.numOfCartItems > 0 && (
        <div className="bg-white p-5 md:w-1/4 w-full  flex flex-col h-fit">
          <div className="text-lg font-medium">
            Subtotal ({cartData?.numOfCartItems} items):{" "}
            <span className="font-bold">
              {cartData?.data?.totalCartPrice} E.G
            </span>
          </div>
          <div className="flex items-center mt-3">
            <input type="checkbox" className="mr-2" />
            <div>This Order Contains a gift</div>
          </div>
          <div className="bg-yellow-400 text-sm px-4 py-2 mt-3 flex justify-center items-center cursor-pointer rounded-lg font-medium">
            Proceed To Buy
          </div>
        </div>
      )}
    </div>
  );
}
