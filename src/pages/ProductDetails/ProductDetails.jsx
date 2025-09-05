import loc from "../../assets/images/location.png"
import visa from "../../assets/images/visa.png"
import box from "../../assets/images/box.png"
import lock from "../../assets/images/lock.png"
import pro1 from "../../assets/images/pro1.png"
import pro2 from "../../assets/images/pro2.png"
import pro3 from "../../assets/images/pro3.png"
import pro4 from "../../assets/images/pro4.png"
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetProductDetailsAction } from "../../Network/ProductsApi"
import StarRating from "../../components/StarRating"
import { addProductToWishListAction } from "../../Network/WishListApi"
import { toast } from "react-hot-toast"
import { addProductToCartAction } from "../../Network/CartApi"

export default function ProductDetails() {
    const {productDetailsData,loading} = useSelector(state=> state.productDetails)
    const {id} = useParams()
    const [coverImg,setCoverImg] = useState()
    const [activeIndex, setActiveIndex] = useState(0);
    const dispatch = useDispatch()
  
   
    useEffect(()=>{
        console.log(id);
        dispatch(GetProductDetailsAction(id)).then(res=>{
            console.log(res);
            console.log(productDetailsData);
            setCoverImg(res?.payload?.data.imageCover)
        })
      
    },[id])
    const handleClickSubImages= (img,index)=>{
            setCoverImg(img);
            setActiveIndex(index);
    }

    const handleAddToWishlist = ()=>{
        dispatch(addProductToWishListAction(id)).then(res=>{
            if(res.payload.status=="success"){
                toast.success("products Added successfully")
            }
            else if (res?.error?.message == "Rejected") {
                toast.error(res?.payload)
            }
        })
    }
    const addToCart = (e) => {
        e.preventDefault();
        dispatch(addProductToCartAction(id)).then(res=>{
            if(res.payload.status=="success"){
                toast.success("products Added to cart")
              }
              else if (res?.error?.message == "Rejected") {
                  toast.error(res?.payload)
              }
        })
      };
    return (
        <>
        {
            productDetailsData&&
            
            <section className="font-ibm">
            <div className="container px-[20px] sm:px-0">
                <div className="text-[#787878] my-1">
                    <p>{productDetailsData?.category.name} &gt; {productDetailsData?.subcategory[0].name}  </p>
                </div>
                <div id="item" className="flex justify-between flex-col lg:flex-row gap-2">
                    <div className="main-sub-images flex gap-2 lg:w-[50%] w-full mb-[20px] ">
                        <div className="grid grid-cols-1 w-[40px] h-[40px] gap-3 mt-4">
                            {
                                productDetailsData.images.map((img,index)=>(
                                    <div onClick={()=>handleClickSubImages(img,index)} className={`card hover:cursor-pointer  ${activeIndex ==index ?' border-[2px] border-solid border-[#1F8394] rounded-[3.9px]':""} `} key={index} >
                                        <img src={img} alt="" className="w-full object-contain" />
                                    </div>
                                ))
                            }
                            
                        </div>
                        <div className="md:max-h-[620px] md:w-full">
                            <img src={coverImg} alt="coverImg" className="w-full h-full object-fill" />
                        </div>
                        
                    </div>
                    <div className="flex lg:w-[70%] w-full flex-col sm:flex-row gap-[31px]">
                        <div className="flex flex-col ">
                            <div className="flex flex-col gap-[7.4px]">
                                <span className="text-cyan font-inika">Brand: {productDetailsData.brand.name}</span>
                                <h3 className="text-[25px] text-[#5C5C5C]">{productDetailsData.title}</h3>
                                <p className="text-sm">{productDetailsData.description}</p>
                                <div className="flex justify-between w-full max-w-[385px] lg:flex-col xl:flex-row flex-col sm:flex-row">
                                    <div className="flex items-center gap-1">{productDetailsData.ratingsAverage}
                                        <StarRating rating={productDetailsData.ratingsAverage} />
                                        <i className="fa-solid fa-chevron-down "></i>
                                     </div>
                                    <div className="flex gap-[16.4px] items-center"><span className="text-cyan">{productDetailsData.quantity} ratings</span>|<span className="text-cyan">Search this page</span></div>
                                </div>
                            </div>
                            <div className="border-t-[1px] border-solid border-[#D9D9D9] mt-2 pt-2 gap-[13.7px] flex flex-col">
                                <span className="text-[31.3px]"><sup className="text-[14.8px] top-[-15px]">SAR</sup>{productDetailsData.priceAfterDiscount? productDetailsData.priceAfterDiscount: productDetailsData.price}<sup className="text-[14.8px] top-[-15px]">14</sup></span>
                                <p className="font-[300]">All price include VAT.</p>
                                <div className="flex gap-1 items-center">
                                    <span className="font-[300] text-[10px] xl:text-[14px] text-[#5C5C5C]">Sign in to redeem.</span>
                                    <span className="px-[7.54px] bg-[#71ED58] text-[12.2px] xl:text-[17.2px]">Extra 20%</span>
                                    <span className="text-[12.2px] xl:text-[17.2px]">off  with meem credit cards.</span>
                                </div>
                                <p className="text-[17.2px] ">Enter code MEEM20 at checkout. Discount by Amazon.</p>
                                <div className="flex gap-[30px] text-center">
                                    <div className="card flex flex-col items-center gap-[8.3px]">
                                        <img src={visa} alt="visa icon" className="w-[38.3px]" />
                                        <p className="text-cyan text-[15.6px]">Electronic <br /> payment Only</p>
                                    </div>
                                    <div className="card flex flex-col items-center gap-[8.3px]">
                                        <img src={box} alt="visa icon" className="w-[38.3px]" />
                                        <p className="text-cyan text-[15.6px]">30 days <br />
                                            Returnable</p>
                                    </div>
                                    <div className="card flex flex-col items-center gap-[8.3px]">
                                        <img src={lock} alt="visa icon" className="w-[38.3px]" />
                                        <p className="text-cyan text-[15.6px]">Secure <br />
                                            transaction</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t-[1px] border-solid border-[#D9D9D9] mt-2 pt-2">
                                <h5 className="font-[700] text-[17px]">About this item</h5>
                                <ul className="list-disc ms-5">
                                    <li>Feature: square neck, cutout, puff sleeve, ruffle hem, tie back aline dress</li>
                                    <li>Fabric has some stretch,and it's soft and comfortable</li>
                                    <li>Suitable for daily wear, holidays, dating, vacation, weekend casual</li>
                                    <li>Care Instructions: Machine wash or professional dry clean</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-[14.3px] h-fit flex-col border border-solid border-[black] rounded-[4.48px] max-w-[254px] lg:min-w-[254px] w-full px-[17px] py-[13px]">
                            <span><sup>SAR</sup>203<sup>14</sup></span>
                            <span>SAR96 delivery <span className="font-[600]">6-9 October.</span></span>
                            <span className="text-cyan">Details</span>
                            <div className="flex gap-1">
                                <img src={loc} alt="location icon" className="h-[22px] relative top-1" />
                                <p className="text-cyan">Delivery to Riyadh - Update Location</p>
                            </div>
                            <p className="text-[#B12704] font-[700]">Usually ships within 4 to 5 <br /> days</p>
                            <button className="flex justify-between items-center w-full py-[6.6px] px-[10.3px] border border-solid border-[#C6C6C6] rounded-[4.7px] bg-[#e9e9e9]">
                                <span>Quantity: 1</span>
                                <i className="fa-solid fa-chevron-down text-[#787878]"></i>
                            </button>
                            <button onClick={addToCart} className="py-[6.4px] w-full bg-mainYellow hover:bg-[#ebc400] rounded-[18.3px]">Add to Cart</button>
                            <button className="py-[6.4px] w-full bg-[#FFA41C] hover:bg-[#ec8e00] rounded-[18.3px]">Buy Now</button>
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-[8px]">
                                    <span className="text-[15px] text-[#717171]">Ships from</span>
                                    <span className="text-[15px] text-[#717171]">Sold by</span>
                                    <span className="text-[15px] text-[#717171]">Payment</span>
                                </div>
                                <div className="flex flex-col gap-[8px]">
                                    <span className="text-[15px] text-[#717171]">Monatik LLC</span>
                                    <span className="text-[15px] text-cyan">Monatik LLC</span>
                                    <span className="text-[15px] text-cyan">Secure transaction</span>
                                </div>
                            </div>
                            <div className="w-full h-[1.38px] bg-[#D9D9D9]"></div>
                            <button onClick={handleAddToWishlist} className="rounded-[9px] border border-solid border-black text-start py-[6.3px] px-[9.85px]">Add to Wish List</button>
                        </div>
                    </div>
                </div>
                <div id="comments" className="flex gap-[72px] flex-col lg:flex-row border-t-[1px] border-solid border-[#D9D9D9] mt-3 py-[26px]">
                    <div id="rating" className="flex flex-col gap-[13px] w-full max-w-[395px] lg:min-w-[395px]">
                        <h6 className="text-[21px] font-[700]">Customer Reviews</h6>
                        <div className="flex items-center">
                            <IoIosStar className="text-[#FFCC00]" />
                            <IoIosStar className="text-[#FFCC00]" />
                            <IoIosStar className="text-[#FFCC00]" />
                            <IoIosStar className="text-[#FFCC00]" />
                            <IoIosStarOutline className="text-[#FFCC00]" />
                            <span className="text-[20px] font-hind">4.1 out of 5</span>
                        </div>
                        <span className="text-[#5C5C5C] font-hind">1 global rating</span>
                        <div className="flex gap-[12px]">
                            <div className="flex flex-col gap-[12px] font-cabin whitespace-nowrap">
                                <span className="text-[18.8px]">5 star</span>
                                <span className="text-[18.8px] text-cyan">4 star</span>
                                <span className="text-[18.8px] text-cyan">3 star</span>
                                <span className="text-[18.8px] text-cyan">2 star</span>
                                <span className="text-[18.8px] text-cyan">1 star</span>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div className="h-[26px] w-[180px] sm:w-[236px] border border-solid border-black rounded-[3.5px]"></div>
                                <div className="h-[26px] w-[180px] sm:w-[236px] relative before:absolute before:top-0 before:left-0 before:w-[71%] before:h-[100%] before:rounded-[3.5px] before:bg-[#DE7921] border border-solid border-black rounded-[3.5px]"></div>
                                <div className="h-[26px] w-[180px] sm:w-[236px] border border-solid border-black rounded-[3.5px]"></div>
                                <div className="h-[26px] w-[180px] sm:w-[236px] relative before:absolute before:top-0 before:left-0 before:w-[50%] before:h-[100%] before:rounded-[3.5px] before:bg-[#DE7921] border border-solid border-black rounded-[3.5px]"></div>
                                <div className="h-[26px] w-[180px] sm:w-[236px] border border-solid border-black rounded-[3.5px]"></div>
                            </div>
                            <div className="flex flex-col gap-[12px] font-cabin">
                                <span className="text-[18.8px]">0%</span>
                                <span className="text-[18.8px] text-cyan">71%</span>
                                <span className="text-[18.8px] text-cyan">0%</span>
                                <span className="text-[18.8px] text-cyan">50%</span>
                                <span className="text-[18.8px] text-cyan">0%</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col font-inter gap-[34.6px]">
                        <div className="comment flex-col flex gap-[17.3px]">
                            <div className="flex-col flex gap-[8.65px]">
                                <div className="flex items-center gap-2">
                                    <img src={pro1} alt="profile image" className="w-[44px] h-[44px] rounded-full" />
                                    <span className="font-hind text-[18px]">Brooke</span>
                                </div>
                                <div className="flex items-center gap-[16px]">
                                    <div className="flex">
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                        <IoIosStarOutline className="text-[20px] text-[#fc0]" />
                                    </div>
                                    <span className="font-hind font-[700] text-[22.14px]">Favorite dress</span>
                                </div>
                                <p className="font-[300]">Reviewed in the United States on 6 August 2024</p>
                                <div className="flex gap-[13px] items-center text-[#DDDDDD]">
                                    <span className="text-[#565959] text-[16.52px]">Size: 40</span>
                                    |
                                    <span className="text-[#565959] text-[16.52px]">Color: Black</span>
                                    |
                                    <span className="text-[#DE7921] text-[16.52px] font-[600]">Verified Purchase</span>
                                </div>
                                <p className="text-[16.52px]">I initially purchased this dress on sale. It turned out to be my favorite dress of this summer. It is extremely versatile and unexpectedly flattering. When I accidentally tore it, I was really upset. My husband told me to buy it again, which I typically wouldn't do. It wasn't on sale and I am so frugal. The dress washes very well and I always get compliments when I wear it.</p>
                            </div>
                            <a href="" className="font-hind text-[18px] text-[#5C5C5C]">Report</a>
                        </div>
                        <div className="comment flex-col flex gap-[17.3px]">
                            <div className="flex-col flex gap-[8.65px]">
                                <div className="flex items-center gap-2">
                                    <img src={pro2} alt="profile image" className="w-[44px] h-[44px] rounded-full" />
                                    <span className="font-hind text-[18px]">Elva S. D.</span>
                                </div>
                                <div className="flex items-center gap-[16px]">
                                    <div className="flex">
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                    </div>
                                    <span className="font-hind font-[700] text-[22.14px]">Lindo!!</span>
                                </div>
                                <p className="font-[300]">Reviewed in the Mexico on 11 August 2023</p>
                                <div className="flex gap-[13px] items-center text-[#DDDDDD]">
                                    <span className="text-[#DE7921] text-[16.52px] font-[600]">Verified Purchase</span>
                                </div>
                                <p className="text-[16.52px]">Bien hecho, bonita tela y bonita caída, fresco y casual. <br />La marca lo dice!!</p>
                            </div>
                            <a href="" className="font-hind text-[18px] text-[#5C5C5C]">Report</a>
                        </div>
                        <div className="comment flex-col flex gap-[17.3px]">
                            <div className="flex-col flex gap-[8.65px]">
                                <div className="flex items-center gap-2">
                                    <img src={pro3} alt="profile image" className="w-[44px] h-[44px] rounded-full" />
                                    <span className="font-hind text-[18px]">Ana Patricia Rodriguez</span>
                                </div>
                                <div className="flex items-center gap-[16px]">
                                    <div className="flex">
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                        <IoIosStarOutline className="text-[20px] text-[#fc0]" />
                                        <IoIosStarOutline className="text-[20px] text-[#fc0]" />
                                    </div>
                                    <span className="font-hind font-[700] text-[22.14px]">COMODIDAD</span>
                                </div>
                                <p className="font-[300]">Reviewed in the United State on 29 June 2023</p>
                                <div className="flex gap-[13px] items-center text-[#DDDDDD]">
                                    <span className="text-[#DE7921] text-[16.52px] font-[600]">Verified Purchase</span>
                                </div>
                                <p className="text-[16.52px]">ES LINDO COMODO Y LIGERO PARA CLIMA CALIDO, ES LA TELA ADECUADA</p>
                            </div>
                            <a href="" className="font-hind text-[18px] text-[#5C5C5C]">Report</a>
                        </div>
                        <div className="comment flex-col flex gap-[17.3px]">
                            <div className="flex-col flex gap-[8.65px]">
                                <div className="flex items-center gap-2">
                                    <img src={pro4} alt="profile image" className="w-[44px] h-[44px] rounded-full" />
                                    <span className="font-hind text-[18px]">Ivelisse</span>
                                </div>
                                <div className="flex items-center gap-[16px]">
                                    <div className="flex">
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                        <IoIosStar className="text-[20px] text-[#fc0]" />
                                        <IoIosStarOutline className="text-[20px] text-[#fc0]" />
                                    </div>
                                    <span className="font-hind font-[700] text-[22.14px]">Excellent dress</span>
                                </div>
                                <p className="font-[300]">Reviewed in the United State on 3 April 2019</p>
                                <div className="flex gap-[13px] items-center text-[#DDDDDD]">
                                    <span className="text-[#DE7921] text-[16.52px] font-[600]">Verified Purchase</span>
                                </div>
                                <p className="text-[16.52px]">Lovely dress... I'm 5'1" with pear form body (149 pounds mostly in hips and booty) and it fits perfect.</p>
                            </div>
                            <a href="" className="font-hind text-[18px] text-[#5C5C5C]">Report</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        }
          
        </>
    )
}
