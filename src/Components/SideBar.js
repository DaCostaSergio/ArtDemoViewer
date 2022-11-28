import { useState } from "react";
import { Link } from 'react-scroll';

export default function () {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {showSidebar ? (
                <button
                    className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
            ) : (
                <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="fixed  z-20 flex items-center cursor-pointer right-5 top-4"
                    fill=""
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                >
                    <rect width="100" height="5"></rect>
                    <rect y="20" width="100" height="5"></rect>
                    <rect y="40" width="100" height="5"></rect>
                </svg>
            )}

            <div
                className={`top-0 right-0 w-1/2 bg-white  p-5   text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <ul className="text-black space-y-5 ">
                    <li className="hover:text-green pt-1">
                        <Link to="home" spy={true} smooth={true} offset={-100} onClick={() => setShowSidebar(!showSidebar)}>
                            Home
                        </Link>
                    </li>
                    <li className="hover:text-green pt-1">
                        <Link to="why" spy={true} smooth={true} offset={-90} onClick={() => setShowSidebar(!showSidebar)}>
                            Why ART
                        </Link>
                    </li>
                    <li className="hover:text-green pt-1">
                        <Link to="howItWorks" spy={true} smooth={true} offset={-100} onClick={() => setShowSidebar(!showSidebar)}>
                            How it Works
                        </Link>
                    </li>
                    <li className="hover:text-green pt-1">
                        <Link to="pricing" spy={true} smooth={true} offset={-100} onClick={() => setShowSidebar(!showSidebar)}>
                            Pricing
                        </Link>
                    </li>
                    <button className="bg-green px-4 h-10 rounded-xl hover:text-white ">
                        <li>
                            <Link to="contact" spy={true} smooth={true} offset={-100} onClick={() => setShowSidebar(!showSidebar)}>
                                Contact us
                            </Link>
                        </li>
                    </button>
                </ul>
            </div>
        </>
    );
};
