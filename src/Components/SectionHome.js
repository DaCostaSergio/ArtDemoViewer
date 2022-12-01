import iphone from '../Assets/IphoneHome.png';
import iphonePNG from '../Assets/IphonePNG.png';
import tableau from '../Assets/Tableau.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {useState, useEffect} from 'react'


export default function () {

  
    return (
        <div>
            {/**Phone */}
            <div className="grid grid-cols-1 content-center laptop:hidden ">
                <div className="pt-32 ">
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
                <div className="place-self-end py-20 ">
                    <img src={iphone}></img>
                </div>
            </div>

            {/**Tablette */}


            {/**Laptop */}
            <div className="hidden laptop:block desktop:hidden ">
                <div className="z-30 ">
                    <Parallax pages={1} style={{ top: '0', right: '0' }}>
                        <ParallaxLayer
                            sticky={{ start: 2, end: 1 }}
                            offset={0}
                            speed={1}

                            style={{ display: 'flex', justifyContent: 'end', alignItems: 'start',}}
                            >
                            <div className=" px-laptopPadding mr-72">
                                <div className="pt-72 transition-opacity duration-200 ">
                                    <img className="w-60" src={tableau}></img>
                                </div>
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer
                            sticky={{ start: 1, end: 2 }}
                            offset={1}
                            speed={5}
                            style={{ display: 'flex', justifyContent: 'end', alignItems: 'start' }}>
                            <div className=" px-laptopPadding  pt-44">
                                <img className="w-laptopIphone" src={iphonePNG}></img>
                            </div>
                    </ParallaxLayer>
                    <ParallaxLayer
                        sticky={{ start: 0, end: 2 }}
                        offset={0}
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

            {/**Desktop */ }
    <div className="hidden desktop:block ">
        <div className="z-30 ">
            <Parallax pages={3} style={{ top: '0', left: '0' }}>
                <ParallaxLayer
                    sticky={{ start: 1, end: 3 }}
                    offset={3}
                    speed={1}
                    style={{ display: 'flex', justifyContent: 'end' }}>
                    <div className=" px-desktopPadding mt-48">
                        <img className="h-laptopHomeHeight mr-48 " src={iphone}></img>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    sticky={{ start: 0, end: 3 }}
                    offset={0}
                    speed={2.5}
                    style={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
                    <div className="px-desktopPadding">
                        <h1 className="font-semibold text-desktopTitle pt-96 ">
                            Take your webshop <br></br>
                            to the next level with<br></br>
                            Augmented Reality<br />
                        </h1>
                        <h2 className="text-desktopSubTitle pt-4">
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

        </div >
    )
}