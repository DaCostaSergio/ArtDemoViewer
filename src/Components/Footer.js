import facebook from '../Assets/Combined Shape.svg';
import twitter from '../Assets/Combined Shape-1.svg'
import Linkedin from '../Assets/Combined Shape-2.svg'
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
            <div className="laptop:flex justify-between">
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