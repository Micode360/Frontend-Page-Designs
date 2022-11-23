import { useState } from "react"
import Logo from "./assets/logo.png";
import FooterLogo from "./assets/footer_logo.svg";


const DesignI = () => {
    const [show, setShow] = useState<Boolean>(false);

    return(
        <main className="font-[Inter]">
            <header className="flex justify-between items-center px-[6.5vw] py-[2rem]">
                <div><img src={Logo} alt="dummy_logo"/></div>
                <div className={
                    show?
                    "flex flex-col lg:flex-row lg:justify-between w-[90%] md:w-[60%] lg:w-[auto] lg:items-center items:start bg-[#6B67F5] lg:bg-[#ffffff] text-white lg:text-black px-[1rem] py-[3rem] lg:p-[0rem] fixed top-0 left-0 bottom-0 lg:static max-[800px]:bg-red-500 min-[900px]:bg-blue-500 z-20"
                    :
                    "hidden lg:flex flex-col lg:flex-row lg:justify-between w-[90%] md:w-[60%] lg:w-[auto] lg:items-center items:start bg-[#6B67F5] lg:bg-[#ffffff] text-white lg:text-black px-[1rem] py-[3rem] lg:p-[0rem] fixed top-0 left-0 bottom-0 lg:static max-[800px]:bg-red-500 min-[900px]:bg-blue-500 z-20"
                }>
                    <div onClick={()=>setShow(false)} className="absolute right-8 top-4 lg:hidden cursor-pointer">x</div>
                    <a href="http://" className="flex items-center px-4 mb-6 lg:mb-0">
                        Hosting
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </a>

                    <a href="http://" className="flex items-center px-4 mb-6 lg:mb-0">
                        Dormain
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </a>

                    <a href="http://" className="px-4 mb-6 lg:mb-0">
                        Email
                    </a>

                    <a href="http://" className="px-4 mb-6 lg:mb-0">
                        Website Builder
                    </a>

                    <a href="http://" className="px-4 mb-6 lg:mb-0">
                        Pricing
                    </a>

                    <a href="http://" className="px-4 mb-6 lg:mb-0 block lg:hidden">
                        Login
                    </a>
                </div>

                <div className="flex items-center">
                <a href="http://" className="bg-[#6B67F5] px-6 py-2 text-white rounded hidden lg:block">
                        Login
                </a>

                <svg onClick={()=>setShow(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer ml-4 border-[1px] h-[2.4rem] w-[2.4rem] rounded lg:hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>

                </div>
            </header>

            <section className="animate-pulse lg:animate-none lg:bg-[#ffffff] bg-slate-700 py-[6.4rem] text-white lg:text-black lg:grid lg:grid-cols-2 flex items-center gap-4 px-[6.5%] lg:py-[2.5rem] mb-[5rem ]">
                <div>
                    <h1 className="font-[700] md:text-[4rem] text-[2.5rem] mb-[1.5rem]">
                        Reliable Web Hosting Platform for Your Website
                    </h1>

                    <p className="mb-[1.5rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                    </p>

                    <div className="flex flex-col md:flex-row">
                        <a href="http://" className="bg-[#6B67F5] mb-6 md:mb-0 px-6 py-[0.75rem] text-white rounded md:mr-[1rem] w-fit">
                            Try for 7 days free
                        </a> 

                          <a href="http://" className="bg-[#6B67F5] px-7 lg:px-6 py-[0.75rem] text-white rounded w-fit">
                            Choose your plan
                        </a>   
                    </div>
                </div>
                <div className="h-full  justify-end hidden lg:flex">
                    <div className="animate-pulse bg-slate-700 rounded h-[30vw] w-[80%]"></div>
                </div>
            </section>

            <section className="flex flex-col justify-center md:grid md:grid-cols-3 gap-4 px-[6.5%] mt-[5rem]">
                <div className="mb-6 md:mb-0">
                    <h3 className="text-[1.5rem] font-[700] mb-[0.5rem]">Unlimited Hosting</h3>
                    <p className="mb-[0.5rem]">
                        Lorem ipsum dolor sit amet, consecte tur adipiscing elit ut aliquam.
                    </p>
                    <a href="http://" className="flex items-center text-[#6B67F5]">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>
                </div>

                <div className="mb-6 md:mb-0">
                    <h3 className="text-[1.5rem] font-[700] mb-[0.5rem]">Unlimited Hosting</h3>
                    <p className="mb-[0.5rem]">
                        Lorem ipsum dolor sit amet, consecte tur adipiscing elit ut aliquam.
                    </p>
                    <a href="http://" className="flex items-center text-[#6B67F5]">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>
                </div>

                <div>
                    <h3 className="text-[1.5rem] font-[700] mb-[0.5rem]">Unlimited Hosting</h3>
                    <p className="mb-[0.5rem]">
                        Lorem ipsum dolor sit amet, consecte tur adipiscing elit ut aliquam.
                    </p>
                    <a href="http://" className="flex items-center text-[#6B67F5]">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>
                </div>
            </section>

            <section className="mx-[6.5%] py-[5rem] bg-[#6B67F5] text-white my-[15rem] rounded flex justify-center items-center">
                <div className="w-[80%] flex flex-col justify-center items-center">
                <h1 className="text-center font-[700] md:text-[4rem] text-[2.5rem]">Find the perfect domain name</h1>
                <p className="text-center lg:w-[80%] mb-[2.5rem]">Enter your select domain name and choose any extension name in the next step (choose between .com, .online, .tech, .site, .net, and more)</p>
                <label className="bg-white rounded w-[100%] lg:w-[60%] flex flex-col md:flex-row items-center py-1 px-2">
                    <input className="font-[Inter] w-full py-2 px-4 mb-3 md:mb-0" type="text" placeholder="Search your name"/>
                    <button className="px-4 py-2 text-[#808080] mx-4 w-full md:w-auto rounded flex justify-between md:justify-start mb-3 md:mb-0 border-slate-300 border-[2px] active:border-[2px] active:border-gray-700">
                        Com
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black ml-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <button className="bg-[#6B67F5] px-6 py-2 w-full md:w-auto text-white rounded">
                        Search
                    </button>
                </label>
                </div>
            </section>

            <section className="bg-[#F7FAFE] py-[5rem]">
                    <div className="px-[6.5%] flex flex-col items-center">
                        <h1 className="font-[700] md:text-[4rem] text-[2rem] text-center">Choose Your Hosting Package</h1>
                        <p className="w-[90%] md:w-[60%] text-[#808080] text-center mt-[1rem]">Enter your select domain name and choose any extension name in the next step (choose between .com, .online, .tech, .site, .net, and more)</p>
 
                        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-2 w-full mt-[2.5rem]">
                            <div className="mb-12 lg:mb-0 border-[1px] w-full md:w-[unset] border-[#605CEE] rounded flex flex-col justify-center items-center pt-6 pb-[2.5rem] px-6 md:mt-[3rem]">
                                <h3 className="text-[2rem] font-[700] text-center">Shared Hosting</h3>
                                <p className="text-[#808080] text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                                </p>
                                <p className="text-[2rem] lg:text-[4.2vw] font-[700]">$3.99 <sub>/mo</sub></p>
                                <button className="w-full border-[1px] border-black rounded mt-[3.25rem] mb-[2.25rem] py-[0.75rem]">Select</button>
                                <div>
                                    <div className="flex text-[#808080] mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                          1 Website
                                    </div>

                                    <div className="flex text-[#808080] mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                          30GB SSD Storage
                                    </div>


                                    <div className="flex text-[#808080] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                         Free SSL
                                    </div>

                                    <div className="flex text-[#808080] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                         Free Dormain
                                    </div>

                                    <div className="flex text-[#808080] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                         Google Ads
                                    </div>

                                    <div className="flex text-[#808080] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                         Managed Wordpress
                                    </div>

                                    <div className="flex text-[#808080] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                        30 Days Money Back Guarantee
                                    </div>

                                    <div className="flex text-[#808080]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                        1 Email Account
                                    </div>

                                </div>         
                            </div>


                            <div className="mb-12 lg:mb-0">
                            <div className="w-full bg-[#17D7B5] text-white rounded py-[0.75rem] text-center">Most Popular</div>
                            <div className="border-[1px] w-full md:w-[unset] bg-[#ffffff] rounded flex flex-col justify-center items-center pt-6 pb-[2.5rem] px-6">
                                <h3 className="text-[2rem] font-[700] text-center">Premium Hosting</h3>
                                <p className="text-[#808080] text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                                </p>
                                <p className="text-[2rem] lg:text-[4.2vw] font-[700]">$6.99 <sub>/mo</sub></p>
                                <button className="w-full bg-[#6B67F5] text-white rounded mt-[3.25rem] mb-[2.25rem] py-[0.75rem]">Select</button>
                                <div>
                                    <div className="flex text-[#808080] mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                          10 Website
                                    </div>

                                    <div className="flex text-[#808080] mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                          100GB SSD Storage
                                    </div>


                                    <div className="flex text-[#808080] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                         Free SSL
                                    </div>

                                    <div className="flex text-[#808080] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                         Free Dormain
                                    </div>

                                    <div className="flex text-[#808080] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                         Google Ads
                                    </div>

                                    <div className="flex text-[#808080] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                         Managed Wordpress
                                    </div>

                                    <div className="flex text-[#808080] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                        30 Days Money Back Guarantee
                                    </div>

                                    <div className="flex text-[#808080]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                        5 Email Account
                                    </div>

                                </div> 
  
                            </div>
                            </div>
                            

                            <div className="border-[1px] w-full md:mt-[3rem] md:w-[unset] border-[#605CEE] rounded flex flex-col justify-center items-center pt-6 pb-[2.5rem] px-6">
                                <h3 className="text-[2rem] font-[700] text-center">Premium Hosting</h3>
                                <p className="text-[#808080] text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                                </p>
                                <p className="text-[2rem] lg:text-[4.2vw] font-[700]">$9.99 <sub>/mo</sub></p>
                                <button className="w-full border-[1px] border-black rounded mt-[3.25rem] mb-[2.25rem] py-[0.75rem]">Select</button>
                                <div>
                                    <div className="flex text-[#808080] mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                          30 Website
                                    </div>

                                    <div className="flex text-[#808080] mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                          500GB SSD Storage
                                    </div>


                                    <div className="flex text-[#808080] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                         Free SSL
                                    </div>

                                    <div className="flex text-[#808080] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                         Free Dormain
                                    </div>

                                    <div className="flex text-[#808080] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                         Google Ads
                                    </div>

                                    <div className="flex text-[#808080] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                         Managed Wordpress
                                    </div>

                                    <div className="flex text-[#808080] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                        30 Days Money Back Guarantee
                                    </div>

                                    <div className="flex text-[#808080]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[1.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                        10 Email Account
                                    </div>

                                </div>         
                            </div>
                        </div>
                    </div>
            </section>



            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-[6.5%] py-[7.5rem]">
                <div className="mb-12 lg:mb-0 text-center lg:text-start">
                    <h1 className="md:text-[4rem] text-[2.5rem] font-[700] mb-[1.5rem]">Extra Website Security</h1>
                    <p className="mb-[2.5rem] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit viverra turpis eu. Pellentesque scelerisque nec enim tempus netus mi proin viverra eu. Auctor neque, amet, eget elit. Libero nascetur porttitor mattis urna et consectetur. Placerat vulputate eget nam habitasse. Faucibus tristique nisl, libero quis cursus eu faucibus vel. Lobortis est, vel rutrum dictumst sagittis, rhoncus egestas quis orci. Ultricies scelerisque donec sagittis ante tristique cursus elementum.</p>
                    <button className="px-[2.625rem] py-[0.75rem] border-[1px] rounded">Learn More</button>
                </div>

                <div className="h-full w-full md:items-center lg:items-start flex justify-center lg:justify-end">
                    <div className="animate-pulse bg-slate-700 rounded h-[30vw] w-[80%]"></div>
                </div>
            </section>

            <section className="px-[6.5%] py-[7.5rem] -skew-y-2 bg-[#F7FAFE]"> 
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 skew-y-2">
                    <div className="h-full flex justify-center lg:justify-start"> 
                        <div className="animate-pulse bg-slate-700 rounded h-[30vw] w-[80%]"></div>
                    </div>

                    <div className="mt-12 lg:mt-0 text-center lg:text-start">
                        <h1 className="md:text-[4rem] text-[2.5rem] font-[700] mb-[1.5rem]">Simply and fast website</h1>
                        <p className="mb-[2.5rem] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit viverra turpis eu. Pellentesque scelerisque nec enim tempus netus mi proin viverra eu. Auctor neque, amet, eget elit. Libero nascetur porttitor mattis urna et consectetur. Placerat vulputate eget nam habitasse. Faucibus tristique nisl, libero quis cursus eu faucibus vel. Lobortis est, vel rutrum dictumst sagittis, rhoncus egestas quis orci. Ultricies scelerisque donec sagittis ante tristique cursus elementum.</p>
                        <button className="px-[2.625rem] py-[0.75rem] border-[1px] rounded">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-[6.5%] py-[7.5rem]">
                <div className="mb-12 lg:mb-0 text-center lg:text-start">
                    <h1 className="md:text-[4rem] text-[2.5rem] font-[700] mb-[1.5rem]">24/7 Customer Support</h1>
                    <p className="mb-[2.5rem] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque sit viverra turpis eu. Pellentesque scelerisque nec enim tempus netus mi proin viverra eu. Auctor neque, amet, eget elit. Libero nascetur porttitor mattis urna et consectetur. Placerat vulputate eget nam habitasse. Faucibus tristique nisl, libero quis cursus eu faucibus vel. Lobortis est, vel rutrum dictumst sagittis, rhoncus egestas quis orci. Ultricies scelerisque donec sagittis ante tristique cursus elementum.</p>
                    <button className="px-[2.625rem] py-[0.75rem] border-[1px] rounded">Learn More</button>
                </div>

                <div className="h-full flex justify-center lg:justify-end">
                    <div className="animate-pulse bg-slate-700 rounded h-[30vw] w-[80%]"></div>
                </div>
            </section>

            <section className="bg-[#F7FAFE] py-[5rem] px-[6.5%] mx-[6.5%] my-[5rem] text-center rounded">
                <h1 className="md:text-[4rem] text-[2rem] font-[700]">Start the success of your website with us</h1>
                <div className="mt-[2.5rem]">
                    <a href="http://" className="bg-[#6B67F5] px-6 py-4 text-white rounded">
                        Get Started
                    </a>
                </div>
            </section>


            <footer className="bg-[#090660] text-white py-[5rem] px-[6.5%]">
                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
                    <div className="col-span-2">
                        <img className="mb-6" src={FooterLogo} alt="footer logo"/>
                        <p className="w-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                    </div>
                    
                    <div>
                        <h3 className="mb-6 font-[700]">Service</h3>
                        <ul>
                            <li className="mb-6">Dormain</li>
                            <li className="mb-6">Shared Hosting</li>
                            <li className="mb-6">Cloud Hosting</li>
                            <li className="mb-6">Private Hosting</li>
                            <li className="mb-6">Sports</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 font-[700]">Hosting</h3>
                        <ul>
                            <li className="mb-6">Cheap Hosting</li>
                            <li className="mb-6">Hosting Wordpress</li>
                            <li className="mb-6">Email Hosting</li>
                            <li className="mb-6">Hosting Unlimited</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 font-[700]">Company</h3>
                        <ul>
                            <li className="mb-6">About</li>
                            <li className="mb-6">Career</li>
                            <li className="mb-6">Contact Us</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 font-[700]">Help</h3>
                        <ul>
                            <li className="mb-6">FAQ</li>
                            <li className="mb-6">Help Support</li>
                        </ul>
                    </div>
                    

                </div>
                <div className="mt-[1.5rem]">
                    Miracle King Hesed. UI Design By TanahAir Studio. Copyright 2020
                </div>
            </footer>
        </main>
    );
}

export default DesignI;