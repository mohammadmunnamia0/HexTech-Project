import icon1 from "../../../assets/icon/icon1.jpg"
import icon2 from "../../../assets/icon/icon2.jpg"
import icon3 from "../../../assets/icon/icon3.jpg"
import icon4 from "../../../assets/icon/icon4.jpg"
import icon5 from "../../../assets/icon/icon5.jpg"
import icon6 from "../../../assets/icon/icon6.jpg"
import { MdOutlineChevronRight } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image"

const ClientReview = () => {
    return (
        <div className="p-5">
            <div className="w-full">
                <div className="flex flex-col justify-center text-center ">
                    <p className="text-2xl font-semibold" data-aos="fade-up"
                        data-aos-duration="2000">Popular Services</p>
                    <h1 className="text-3xl font-semibold md:text-5xl mb-10" data-aos="fade-up"
                        data-aos-duration="2000">Services We Provide</h1>
                </div>
                <div className="w-full">
                    <div className="flex justify-center w-full px-4" data-aos="fade-up"
                        data-aos-duration="2000">
                        <div>
                            <div className="md:flex">
                                {/* Card 1 */}
                                <div className="relative md:w-[420px]  h-[300px] p-8  md:border-r-2 border-b-2 border-[#2222226c] bg-[#ffffff] group overflow-hidden">
                                    {/* The normal card */}
                                    <div className="relative z-10 flex items-center justify-between mt-5 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:pointer-events-none">
                                        <div>
                                            <p className="text-lg font-semibold text-black">01</p>
                                            <p className="text-2xl font-semibold">Web Development</p>
                                            <Image className="mt-10" src={icon3} alt="Icon" />
                                        </div>

                                        <p className="flex items-center px-4 h-[150px] text-2xl rounded-3xl bg-[#f6f2ed] group-hover:bg-white transition-all duration-500 ease-in-out">
                                            <FiArrowUpRight className="transition-colors duration-500 ease-in-out group-hover:text-blue-600" />
                                        </p>
                                    </div>
                                    {/* The bigger card (hidden by default, shown on hover) */}
                                    <div className="absolute inset-0 z-20 w-[110%] h-[110%] bg-gray-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                                        <div className="px-6 text-white mt-12">
                                            <div className="flex items-center gap-5">
                                                <p className="text-2xl font-semibold w-[60%]">Web Development</p>
                                                <p className="flex text-7xl font-extrabold text-white tracking-normal">
                                                    <span className=" text-stroke-white relative animate-stroke">0</span>
                                                    <span className=" text-stroke-white relative animate-stroke">1</span>
                                                </p>
                                            </div>
                                            <p className="mt-5 w-96">
                                                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium.
                                            </p>
                                            <button className="relative flex items-center mt-8 font-bold text-white transition-all duration-300 cursor-pointer hover:translate-x-3 hover:text-gray-300">
                                                Read More <MdOutlineChevronRight className="mt-1 text-xl transition-transform duration-300 ease-in-out" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 2*/}
                                <div className="relative md:w-[420px] h-[300px] p-8 border-b-2 border-[#2222226c] bg-[#ffffff] group overflow-hidden">
                                    {/* The normal card */}
                                    <div className="relative z-10 flex items-center justify-between mt-5 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:pointer-events-none">
                                        <div>
                                            <p className="text-lg font-semibold">02</p>
                                            <p className="text-2xl font-semibold">App Development</p>
                                            <Image className="mt-10" src={icon5} alt="Icon" />
                                        </div>

                                        <p className="flex items-center px-4 h-[150px] text-2xl rounded-3xl bg-[#f6f2ed] group-hover:bg-white transition-all duration-500 ease-in-out">
                                            <FiArrowUpRight className="transition-colors duration-500 ease-in-out group-hover:text-blue-600" />
                                        </p>
                                    </div>
                                    {/* The bigger card (hidden by default, shown on hover) */}
                                    <div className="absolute inset-0 z-20 w-[110%] h-[110%] bg-gray-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                                        <div className="px-6 text-white mt-12">
                                            <div className="flex items-center gap-5">
                                                <p className="text-2xl font-semibold w-[60%]">App Development</p>
                                                <p className="flex text-7xl font-extrabold text-white tracking-normal">
                                                    <span className=" text-stroke-white relative animate-stroke">0</span>
                                                    <span className=" text-stroke-white relative animate-stroke">2</span>
                                                </p>
                                            </div>
                                            <p className="mt-5 w-96">
                                                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium.
                                            </p>
                                            <button className="relative flex items-center mt-8 font-bold text-white transition-all duration-300 cursor-pointer hover:translate-x-3 hover:text-gray-300">
                                                Read More <MdOutlineChevronRight className="mt-1 text-xl transition-transform duration-300 ease-in-out" />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                <div className="relative md:w-[420px]  h-[300px] p-8  md:border-l-2 border-b-2 border-[#2222226c] bg-[#ffffff] group overflow-hidden">
                                    {/* The normal card */}
                                    <div className="relative z-10 flex items-center justify-between mt-5 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:pointer-events-none">
                                        <div>
                                            <p className="text-lg font-semibold">03</p>
                                            <p className="text-2xl font-semibold">Custom Software Development</p>
                                            <Image className="mt-10" src={icon4} alt="Icon" />
                                        </div>

                                        <p className="flex items-center px-4 h-[150px] text-2xl rounded-3xl bg-[#f6f2ed] group-hover:bg-white transition-all duration-500 ease-in-out">
                                            <FiArrowUpRight className="transition-colors duration-500 ease-in-out group-hover:text-blue-600" />
                                        </p>
                                    </div>

                                    {/* The bigger card (hidden by default, shown on hover) */}
                                    <div className="absolute inset-0 z-20 w-[110%] h-[110%] bg-gray-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                                        <div className="px-6 text-white mt-12">
                                            <div className="flex items-center gap-5">
                                                <p className="text-2xl font-semibold w-[60%]">Custom Software Development</p>
                                                <p className="flex text-7xl font-extrabold text-white tracking-normal">
                                                    <span className=" text-stroke-white relative animate-stroke">0</span>
                                                    <span className=" text-stroke-white relative animate-stroke">3</span>
                                                </p>
                                            </div>

                                            <p className="mt-5 w-96">
                                                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium.
                                            </p>
                                            <button className="relative flex items-center mt-8 font-bold text-white transition-all duration-300 cursor-pointer hover:translate-x-3 hover:text-gray-300">
                                                Read More <MdOutlineChevronRight className="mt-1 text-xl transition-transform duration-300 ease-in-out" />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex">
                                {/* Card 4 */}
                                <div className="relative md:w-[420px]  h-[300px] p-8 md:border-b-0 border-b-2 md:border-r-2 border-[#2222226c] bg-[#ffffff] group overflow-hidden">
                                    {/* The normal card */}
                                    <div className="relative z-10 flex items-center justify-between mt-5 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:pointer-events-none">
                                        <div>
                                            <p className="text-lg font-semibold">04</p>
                                            <p className="text-2xl font-semibold">Wordpress Development</p>
                                            <Image className="mt-10" src={icon6} alt="Icon" />
                                        </div>

                                        <p className="flex items-center px-4 h-[150px] text-2xl rounded-3xl bg-[#f6f2ed] group-hover:bg-white transition-all duration-500 ease-in-out">
                                            <FiArrowUpRight className="transition-colors duration-500 ease-in-out group-hover:text-blue-600" />
                                        </p>
                                    </div>

                                    {/* The bigger card (hidden by default, shown on hover) */}
                                    <div className="absolute inset-0 z-20 w-[110%] h-[110%] bg-gray-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                                        <div className="px-6 text-white mt-12">
                                            <div className="flex items-center gap-5">
                                                <p className="text-2xl font-semibold w-[60%]">Wordpress Development</p>
                                                <p className="flex text-7xl font-extrabold text-white tracking-normal">
                                                    <span className=" text-stroke-white relative animate-stroke">0</span>
                                                    <span className=" text-stroke-white relative animate-stroke">4</span>
                                                </p>
                                            </div>

                                            <p className="mt-5 w-96">
                                                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium.
                                            </p>
                                            <button className="relative flex items-center mt-8 font-bold text-white transition-all duration-300 cursor-pointer hover:translate-x-3 hover:text-gray-300">
                                                Read More <MdOutlineChevronRight className="mt-1 text-xl transition-transform duration-300 ease-in-out" />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                {/* Card 5 */}
                                <div className="relative md:w-[420px]  h-[300px] p-8 md:border-b-0 border-b-2 border-[#2222226c] bg-[#ffffff] group overflow-hidden">
                                    {/* The normal card */}
                                    <div className="relative z-10 flex items-center justify-between mt-5 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:pointer-events-none">
                                        <div>
                                            <p className="text-lg font-semibold ">05</p>
                                            <p className="text-2xl font-semibold">SQA Management</p>
                                            <Image className="mt-10" src={icon1} alt="Icon" />
                                        </div>

                                        <p className="flex items-center px-4 h-[150px] text-2xl rounded-3xl bg-[#f6f2ed] group-hover:bg-white transition-all duration-500 ease-in-out">
                                            <FiArrowUpRight className="transition-colors duration-500 ease-in-out group-hover:text-blue-600" />
                                        </p>
                                    </div>

                                    {/* The bigger card (hidden by default, shown on hover) */}
                                    <div className="absolute inset-0 z-20 w-[110%] h-[110%] bg-gray-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                                        <div className="px-6 text-white mt-12">
                                            <div className="flex items-center gap-5">
                                                <p className="text-2xl font-semibold w-[60%]">SQA Management</p>
                                                <p className="flex text-7xl font-extrabold text-white tracking-normal">
                                                    <span className=" text-stroke-white relative animate-stroke">0</span>
                                                    <span className=" text-stroke-white relative animate-stroke">5</span>
                                                </p>
                                            </div>

                                            <p className="mt-5 w-96">
                                                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium.
                                            </p>
                                            <button className="relative flex items-center mt-8 font-bold text-white transition-all duration-300 cursor-pointer hover:translate-x-3 hover:text-gray-300">
                                                Read More <MdOutlineChevronRight className="mt-1 text-xl transition-transform duration-300 ease-in-out" />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                {/* Card 6 */}
                                <div className="relative md:w-[420px]  h-[300px] p-8  md:border-l-2 border-[#2222226c] bg-[#ffffff] group overflow-hidden">
                                    {/* The normal card */}
                                    <div className="relative z-10 flex items-center justify-between mt-5 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:pointer-events-none">
                                        <div>
                                            <p className="text-lg font-semibold">06</p>
                                            <p className="text-2xl font-semibold">Software Consultancy</p>
                                            <Image className="mt-10" src={icon2} alt="Icon" />
                                        </div>

                                        <p className="flex items-center px-4 h-[150px] text-2xl rounded-3xl bg-[#f6f2ed] group-hover:bg-white transition-all duration-500 ease-in-out">
                                            <FiArrowUpRight className="transition-colors duration-500 ease-in-out group-hover:text-blue-600" />
                                        </p>
                                    </div>

                                    {/* The bigger card (hidden by default, shown on hover) */}
                                    <div className="absolute inset-0 z-20 w-[110%] h-[110%] bg-gray-600 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                                        <div className="px-6 text-white mt-12">
                                            <div className="flex items-center gap-5">
                                                <p className="text-2xl font-semibold w-[60%]">Software Consultancy</p>
                                                <p className="flex text-7xl font-extrabold text-white tracking-normal">
                                                    <span className=" text-stroke-white relative animate-stroke">0</span>
                                                    <span className=" text-stroke-white relative animate-stroke">6</span>
                                                </p>
                                            </div>

                                            <p className="mt-5 w-96">
                                                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium.
                                            </p>
                                            <button className="relative flex items-center mt-8 font-bold text-white transition-all duration-300 cursor-pointer hover:translate-x-3 hover:text-gray-300">
                                                Read More <MdOutlineChevronRight className="mt-1 text-xl transition-transform duration-300 ease-in-out" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;