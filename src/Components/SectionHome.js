import iphone from '../Assets/IphoneHome.png';
import { Parallax, Background } from 'react-parallax';

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

                </div>
                <div className="z-30">
                    <div className="laptop:grid grid-cols-2 content-center pt-20 ">
                        <div>
                            <h1 className="font-semibold text-title pt-48">
                                Take your webshop
                                to the next level with
                                Augmented Reality<br />
                            </h1>
                            <h2 className="text-subTitle pt-4">
                                Elevate your customer experience with AR. Simple Plug and play 
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
                        <div className="w-1/2">
                            

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