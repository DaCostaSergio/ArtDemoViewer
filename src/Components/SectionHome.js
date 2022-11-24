import iphone from '../Assets/IphoneHome.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

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
            <div className="hidden laptop:block ">
                <div className="z-30 ">
                    <Parallax pages={2} style={{ top: '0', left: '0' }}>
                        
                        <ParallaxLayer
                            sticky={{ start: 2, end: 1}}
                            offset={1}
                            speed={1}
                            style={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}>
                            <div className=" px-laptopPadding">
                                <img src={iphone}></img>
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer
                            sticky={{ start: 0, end: 2 }}
                            offset={0}
                            speed={2.5}
                            style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
                            <div className="px-laptopPadding">
                                <h1 className="font-semibold text-title pt-48 ">
                                    Take your webshop <br></br>
                                    to the next level with<br></br>
                                    Augmented Reality<br />
                                </h1>
                                <h2 className="text-subTitle pt-4">
                                    Elevate your customer experience with AR. Simple Plug and play <br></br>
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
                        </ParallaxLayer>




                    </Parallax>
                </div>

            </div>


            {/**Desktop */}
            <div className="">

            </div>

        </div>
    )
}