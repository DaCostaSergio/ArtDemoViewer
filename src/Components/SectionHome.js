import iphone from '../Assets/IphoneHome.png'
import homePicture from '../Assets/HomeImage.png'
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function () {

    return (
        <div>
            {/**Phone */}
            <div className="grid grid-cols-1 content-center laptop:hidden ">
                <div className="pt-40 px-phonePadding">
                    <h1 className="font-semibold text-phoneTitle ">
                        Take your webshop
                        to the next level with
                        Augmented Reality<br />
                    </h1>
                    <div className="text-subTitle mt-5">
                        Elevate your customer experience with AR. Simple Plug and play
                        installation for popular ecommerce platforms.
                    </div>
                    <div className="grid grid-cols-1 mt-5">
                        <button className="bg-green mx-10  py-2 rounded-xl font-semibold hover:text-white">
                            Try Now
                        </button>
                        <button className="bg-green mx-10 px-10 py-2  mt-5 rounded-xl font-semibold hover:text-white">
                            Sign up
                        </button>
                    </div>
                </div>
                <div className="place-self-end ">
                    <img src={iphone}></img>
                </div>
            </div>

            {/**Tablette */}


            {/**Laptop */}
            <div className=" ">
                <div className="z-20">
                    <Parallax pages={2}>
                        <ParallaxLayer
                            offset={0.9999}
                            speed={3}
                            factor={1}
                            sticky={{ start: 1, end: 2 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div className="w-96 ml-40">
                                <img src={iphone}></img>
                            </div>
                        </ParallaxLayer>
                    </Parallax>
                </div>
                <div className="z-30">
                    <div className="laptop:grid grid-cols-2 content-center pt-48 ">
                        <div>
                            <h1 className="font-semibold text-title pt-28">
                                Take your webshop 
                                to the next level with 
                                Augmented Reality
                            </h1>
                            <h2 className="text-subTitle">
                                Elevate your customer experience with AR. Simple Plug and play <br />
                                installation for popular ecommerce platforms.
                            </h2>
                            <div className="mt-5">
                                <button className="bg-green px-10 py-2 rounded-xl font-semibold hover:text-white">
                                    Try Now
                                </button>
                                <button className="bg-green mx-10 px-10 py-2 rounded-xl font-semibold hover:text-white">
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/**Desktop */}
            <div className="">

            </div>

        </div>
    )
}