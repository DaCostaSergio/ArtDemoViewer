import facebook from '../Assets/Combined Shape.svg';
import twitter from '../Assets/Combined Shape-1.svg'
import Linkedin from '../Assets/Combined Shape-2.svg'
export default function () {
    return (
        <div>
            {/**Phone */}
            <div className="px-phonePadding  laptop:hidden pt-20">
                <div>
                    <h1 className="text-phoneCommentTitle font-semilbold">
                        Art<span className="text-green">. demo</span>
                    </h1>
                    <div className="text-phoneCommentText  mt-2">
                        Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit, sed.

                        Gaet dolor sit amet, consectetuer 
                        adipiscing elit, sed diam nonummy 
                        nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat.
                    </div>
                </div>
                <div>
                    <h1 className="text-phoneCommentTitle font-semilbold pt-5 ">
                        Contact<span className="text-green">.</span>
                    </h1>
                    <hr></hr>
                    <div className="text-phoneCommentText  mt-5">
                        Phone: +31 6 23 29 24 31 <br />

                        Email: hello@ocdlab.co
                    </div>
                </div>
                <div>
                    <h1 className="text-phoneCommentTitle font-semilbold pt-5">
                        Company
                    </h1>
                    <hr></hr>
                    <div className="text-phoneCommentText mt-5">
                        About us <br />

                        Why Art Demo<br />

                        Pricing<br />

                        Contact us<br />
                    </div>
                </div>
                <div className="grid grid-cols-3 content-center pt-5"> 
                    <div>
                        <img src={facebook}></img>
                    </div>
                    <div>
                        <img src={twitter}></img>
                    </div>
                    <div>
                        <img src={Linkedin}></img>
                    </div>
                </div>
            </div>


            {/**Tablette */}
            <div className="">

            </div>

            {/**Laptop */}
            <div className="hidden laptop:flex justify-between">
                <div>
                    <h1 className="text-laptopCommentTitle font-semilbold">
                        Art<span className="text-green">. demo</span>
                    </h1>
                    <div className="text-laptopTextCards  mt-5">
                        Lorem ipsum dolor sit amet, <br />
                        consectetuer adipiscing elit, sed.<br /><br />

                        Gaet dolor sit amet, consectetuer <br />
                        adipiscing elit, sed diam nonummy <br />
                        nibh euismod tincidunt ut laoreet <br />
                        dolore magna aliquam erat.
                    </div>
                </div>
                <div>
                    <h1 className="text-laptopCommentTitle font-semilbold ">
                        Contact<span className="text-green">.</span>
                    </h1>
                    <hr></hr>
                    <div className="text-laptopTextCards  mt-5">
                        Phone: +31 6 23 29 24 31 <br /><br />

                        Email: hello@ocdlab.co
                    </div>
                </div>
                <div>
                    <h1 className="text-laptopCommentTitle font-semilbold">
                        Company
                    </h1>
                    <hr></hr>
                    <div className="text-laptopTextCards mt-5">
                        About us <br /><br />

                        Why Art Demo<br /><br />

                        Pricing<br /><br />

                        Contact us<br /><br />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-8 content-center"> 
                    <div>
                        <img src={facebook}></img>
                    </div>
                    <div>
                        <img src={twitter}></img>
                    </div>
                    <div>
                        <img src={Linkedin}></img>
                    </div>
                </div>
            </div>


            {/**Desktop */}
            <div className="">

            </div>


        </div>
    )
}