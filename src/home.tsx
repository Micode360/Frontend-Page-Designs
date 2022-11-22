import React from "react";
import img from "./template/assets/IMG_20220813_185059.jpg"
import desingi from "./template/assets/designi.jpg"
import { Link } from "react-router-dom"


const Home = () => {

    return (
    <>
        <header className="shadow-md flex px-[6.5vw] py-[1.5rem]">
            <div className="flex items-center"><div className="w-[2.5rem] h-[2.5rem] flex items-center mr-2 justify-center rounded-full bg-green-500">MD</div>Midesign</div>
        </header>

            <section style={{backgroundImage:`url(${img})`}} className="animate-pulse  bg-slate-700 py-[6.4rem] text-white lg:text-black lg:grid lg:grid-cols-2 flex items-center gap-4 px-[6.5%] lg:py-[2.5rem] mb-[5rem ]">
                <div>
                    <h1 className="font-[700] text-indigo-900 md:text-[4rem] text-[2.5rem] mb-[1.5rem]">
                        React UI Page Designs with Tailwind CSS.
                    </h1>

                    <p className="mb-[1.5rem] text-black">
                        Personal Project:  Created UI designs using tailwind css.
                    </p>
                </div>
            </section>

            <section className="grid grid-cols-1 justify-center md:grid-cols-4 px-[6.5%] py-[3.4rem]">
                <div>
                    <div style={{backgroundImage:`url(${desingi})`}} className="bg-cover bg-center border-[1px] w-[100%] mb-4 h-[12rem] rounded">
                    </div>
                    <h3 className="font-[700] mb-4">Web Hosting Platform Page</h3>
                    <Link to="/designi" className=" underline decoration-1">View</Link>
                </div>
            </section>

            <footer className="px-[6.5vw]">
                Miracle King Hesed
            </footer>
    </>
    );
}

export default Home;