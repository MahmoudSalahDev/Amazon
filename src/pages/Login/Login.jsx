import devider from "../../assets/images/devider.png"
import devider2 from "../../assets/images/devider 2.png"
import amazon from "../../assets/images/Group 1.png"

import { useFormik } from "formik"
import { object, ref, string } from "yup"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { LoginAction } from "../../Network/AuthApi"
import toast from "react-hot-toast"



export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    async function sendDataToLogin(values){

        dispatch(LoginAction(values)).then(res => {
            // console.log(res);
            if (res?.payload?.message == "success") {
                // localStorage.setItem("userToken", res?.payload?.token)
                toast.success("Loged in successfully")
                navigate('/products')
            }
            else if (res?.error?.message == "Rejected") {
                toast.error(res?.payload)
            }
        })

    }

    const password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    const validationSchema = object({
        email: string().required("Email is required").email("Enter a valid email"),
        password: string().required("password is required").matches(password, "password should be Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
    })

    const formik = useFormik({
        initialValues: {
            "email": "",
            "password": "",
        },
        validationSchema,
        onSubmit: sendDataToLogin
    })

    return (
        <>
            <section className="py-[50px]">
                <div className="container px-[20px] sm:px-[0px] flex flex-col items-center">
                    <img src={amazon} className="mb-[30px] w-[150px]" alt="" />
                    <div className="card max-w-[587px] w-full py-[51px] px-[37px] border-[.2px] border-solid border-[#d5d9d9] rounded-[8px] font-ibm ">
                        <h3 className='font-[500] text-[28px] '>Sign in</h3>
                        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-2'>

                            <div className='flex flex-col'>
                                <label htmlFor="email" className='font-[600] text-[14px] mb-2'>Your email</label>
                                <input type="email" value={formik.values.email} name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} id='email' className='w-full border-[1px] border-solid border-[#888c8c] px-[7px] py-[3px] rounded-[8px]' />
                                {formik.errors.email && formik.touched.email ? (<p className="text-red-500 text-sm mt-1">*{formik.errors.email}</p>) : ""}
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="password" className='font-[600] text-[14px] mb-2'>Password</label>
                                <input type="password" value={formik.values.password} name='password' onBlur={formik.handleBlur} onChange={formik.handleChange} id='password' className='w-full border-[1px] border-solid border-[#888c8c] px-[7px] py-[3px] rounded-[8px]' />
                                {formik.errors.password && formik.touched.password ? (<p className="text-red-500 text-sm mt-1">*{formik.errors.password}</p>) : ""}
                            </div>

                            <button type="submit" className="w-full bg-[#FFD814] hover:bg-[#ebc400] py-[9px] mt-3 rounded-[10px]">Continue</button>
                        </form>
                        <p className="mt-[30px]">By creating an account or logging in , you agree to Amazon’s <span className="underline text-blueLinks cursor-pointer">Conditions of Use</span> and <span className="underline text-blueLinks cursor-pointer">Privacy Notice.</span></p>
                        <span className="text-blueLinks cursor-pointer block my-[30px]"><i className="fa-solid fa-caret-right text-[#656565] me-2"></i> Need help?</span>
                        <div className="w-full h-[1px] bg-[#D9D9D9] mt-3"></div>
                        <div className="pt-[30px]">
                            <h5 className="font-[600] text-[24px]">Buying for work?</h5>
                            <span className="font-inika text-[#2A8FD7] cursor-pointer hover:underline">Shop on Amazon Business</span>
                        </div>
                    </div>
                    <div className="mt-[30px] mb-[20px] max-w-[587px] w-full relative">
                        <span className=" text-[#717171] bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-[10px]">New to Amazon?</span> 
                        <div className="w-full h-[1px] bg-[#d9d9d9]"></div>
                    </div>
                    <button className="rounded-[10px] py-[7px] max-w-[587px] hover:bg-[#f1f1f1] w-full border border-solid border-black" onClick={()=>{
                        navigate("/register")
                    }}>Create your Amazon account</button>
                </div>
                <img src={devider2} className="w-full my-[50px]" alt="devider image" />
                <div className="container flex flex-col items-center px-[20px] sm:px-[0px]">
                    <div className="flex justify-center gap-[20px]">
                        <span className="text-blueLinks font-inika cursor-pointer hover:underline">Conditions of Use</span>
                        <span className="text-blueLinks font-inika cursor-pointer hover:underline">Privacy Notice</span>
                        <span className="text-blueLinks font-inika cursor-pointer hover:underline">Help</span>
                    </div>
                    <p className="font-[300]">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
                </div>
            </section>
        </>
    )
}
