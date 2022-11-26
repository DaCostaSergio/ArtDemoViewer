import { Link } from 'react-scroll';
import React, { useState } from "react";

export default function () {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className="z-40">
            {/**Phone */}
           

            {/**Tablette */}
            <div className="">

            </div>

            {/**Laptop */}
            <div className="hidden laptop:flex justify-between items-center font-semibold desktop:hidden ">
                <div className="text-logoLaptop s">
                    <ul>
                        <li>
                            <Link to="home" spy={true} smooth={true} offset={-100}>
                                <span className="text-green">AR</span> Viewer
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className=" text-laptopMenu">
                    <ul className="flex justify-between space-x-12  ">
                        <li className="hover:text-green pt-1">
                            <Link to="home" spy={true} smooth={true} offset={-100}>
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-green pt-1">
                            <Link to="why" spy={true} smooth={true} offset={-90}>
                                Why ART
                            </Link>
                        </li>
                        <li className="hover:text-green pt-1">
                            <Link to="howItWorks" spy={true} smooth={true} offset={-100}>
                                How it Works
                            </Link>
                        </li>
                        <li className="hover:text-green pt-1">
                            <Link to="pricing" spy={true} smooth={true} offset={-100}>
                                Pricing
                            </Link>
                        </li>
                        <button className="bg-green px-4 h-10 rounded-xl hover:text-white ">
                            <li>
                                <Link to="contact" spy={true} smooth={true} offset={-100}>
                                    Contact us
                                </Link>
                            </li>
                        </button>
                    </ul>
                </div>
            </div>


            {/**Desktop */}
            <div className="hidden desktop:flex justify-between items-center font-semibold ">
                <div className="text-logoDesktop ">
                    <ul>
                        <li>
                            <Link to="home" spy={true} smooth={true} offset={-100}>
                                <span className="text-green">AR</span> Viewer
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className=" text-desktopMenu">
                    <ul className="flex justify-between space-x-12 ">
                        <li className="hover:text-green">
                            <Link to="home" spy={true} smooth={true} offset={-100}>
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-green pt-1">
                            <Link to="why" spy={true} smooth={true} offset={-90}>
                                Why ART
                            </Link>
                        </li>
                        <li className="hover:text-green pt-1">
                            <Link to="howItWorks" spy={true} smooth={true} offset={-100}>
                                How it Works
                            </Link>
                        </li>
                        <li className="hover:text-green pt-1">
                            <Link to="pricing" spy={true} smooth={true} offset={-100}>
                                Pricing
                            </Link>
                        </li>
                        <button className="bg-green px-4 h-10 rounded-full hover:text-white ">
                            <li>
                                <Link to="contact" spy={true} smooth={true} offset={-100}>
                                    Contact us
                                </Link>
                            </li>
                        </button>
                    </ul>
                </div>
            </div>
        </div >
    )
}