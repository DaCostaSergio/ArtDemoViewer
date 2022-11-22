import { Link } from 'react-scroll';

export default function () {
    return (
        <div>
            {/**Phone */}
            <div className="">

            </div>

            {/**Tablette */}
            <div className="">

            </div>

            {/**Laptop */}
            <div className="laptop:grid grid-cols-2 place-content-between content-center font-semibold ">
                <div className="text-logoLaptop">
                    <ul>
                        <li>
                            <Link to="home" spy={true} smooth={true} offset={-100}>
                                <span className="text-green">AR</span> Viewer
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className=" text-laptopMenu">
                    <ul className="grid grid-cols-5 gap-4 place-content-between place-items-center  ">
                        <li className="hover:text-green">
                            <Link to="home" spy={true} smooth={true} offset={-100}>
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-green">
                            <Link to="why" spy={true} smooth={true} offset={-100}>
                                Why ART
                            </Link>
                        </li>
                        <li className="hover:text-green">
                            <Link to="howItWorks" spy={true} smooth={true} offset={-100}>
                                How it Works
                            </Link>
                        </li>
                        <li className="hover:text-green">
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


            {/**Desktop */}
            <div className="">

            </div>
        </div>
    )
}