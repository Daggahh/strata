import DisplayLayout from "@/components/layout"
import Link from "next/link";

import { FaCircleCheck } from "react-icons/fa6";

const PricingPage = () => {
    return (
        <DisplayLayout>
            <div>
                <div className="hero-section">
                    <div className="w-[98%] md:w-[60%] mx-auto pt-28 md:pt-40">
                        <h2 className="text-4xl md:text-5xl text-center font-bold mb-5 md:leading-tight">Find Your Perfect Plan.</h2>
                        <p className="text-sm md:text-base font-medium text-center w-full w-[98%] md:w-[70%] mx-auto z-20 mb-10 leading-relaxed">
                            Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                            tristique nulla quam sit.
                        </p>
                        <div className="flex gap-3 items-center justify-center mb-10 md:mb-0">
                            <button className="bg-main text-white font-600 py-3 border-main border-2 border-solid px-8 rounded-full text-sm flex items-center gap-2">Monthly</button>
                            <button className="font-600 text-sm text-main px-8 py-3 border-main border-2 border-solid rounded-full">Yearly</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-10 px-20 mt-14">
                        <div className="bg-white rounded-2xl p-5 shadow">
                            <div className="bg-background p-4 rounded-2xl">
                                <p className="text-sm mb-5">Starter Plan</p>
                                <h4 className="text-5xl font-bold mb-5">$19.99 <span className="text-sm font-normal">per month</span></h4>
                                <p className="text-sm w-full leading-relaxed tracking-tight">
                                    Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum.
                                </p>
                            </div>
                            <div>
                                <ul className="flex flex-col mt-5 gap-2">
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your credit score in real time
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your credit score in real time
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your credit score in real time
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your credit score in real time
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your credit score in real time
                                        </p>
                                    </li>
                                </ul>
                                <button className="bg-black py-5 mt-5 rounded-full w-full text-white text-sm">Select Plan</button>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-5 shadow">
                            <div className="bg-background p-4 rounded-2xl">
                                <p className="text-sm mb-5">Starter Plan</p>
                                <h4 className="text-5xl font-bold mb-5">$19.99 <span className="text-sm font-normal">per month</span></h4>
                                <p className="text-sm w-full leading-relaxed tracking-tight">
                                    Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum.
                                </p>
                            </div>
                            <div>
                                <ul className="flex flex-col mt-5 gap-2">
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your credit score in real time
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your credit score in real time
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your credit score in real time
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your credit score in real time
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your credit score in real time
                                        </p>
                                    </li>
                                </ul>
                                <button className="bg-black py-5 mt-5 rounded-full w-full text-white text-sm">Select Plan</button>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-5 shadow">
                            <div className="bg-background p-4 rounded-2xl">
                                <p className="text-sm mb-5">Starter Plan</p>
                                <h4 className="text-5xl font-bold mb-5">$19.99 <span className="text-sm font-normal">per month</span></h4>
                                <p className="text-sm w-full leading-relaxed tracking-tight">
                                    Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum.
                                </p>
                            </div>
                            <div>
                                <ul className="flex flex-col mt-5 gap-2">
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your credit score in real time
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your credit score in real time
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your credit score in real time
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your credit score in real time
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-base md:leading-loose w-full flex items-center gap-2 tracking-tighter">
                                            <FaCircleCheck className="text-xl text-main" />
                                            Track your credit score in real time
                                        </p>
                                    </li>
                                </ul>
                                <button className="bg-black py-5 mt-5 rounded-full w-full text-white text-sm">Select Plan</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-20 mt-32">
                    <div className="w-[50%] mx-auto">
                        <h2 className="text-3xl md:text-4xl w-[80%] mx-auto text-center font-bold mb-5 md:leading-tight">Highly rated on all of your favorite platforms.</h2>
                        <p className="text-sm font-medium text-center w-full mx-auto mb-10 leading-relaxed w-[80%] mx-auto">
                            Lorem ipsum dolor sit amet. Facilisi volutpat sed massa ipsum rutrum mi dui dictum. Vel morbi quis morbi risus
                            tristique nulla quam sit.
                        </p>
                    </div>
                </div>
            </div>
        </DisplayLayout>
    )
}

export default PricingPage;