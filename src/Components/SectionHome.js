import iphone from '../Assets/IphoneHome.png'
export default function () {
    return (
        <div>
            {/**Phone */}
            <div className="grid grid-cols-1 content-center laptop:hidden ">
                <div className="pt-40 px-phonePadding">
                    <h1 className="font-semibold text-phoneTitle ">
                        Take your webshop 
                        to the next level with
                        Augmented Reality<br/>
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
            <div className="">

            </div>

            {/**Laptop */}
            <div className="hidden laptop:grid grid-cols-2 content-center pt-48 ">
                <div>
                    <h1 className="font-semibold text-title pt-28">
                        Take your webshop <br/>
                        to the next level with <br/>
                        Augmented Reality<br/>
                    </h1>
                    <h2 className="text-subTitle">
                        Elevate your customer experience with AR. Simple Plug and play <br/>
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
                <div className="place-self-end ">
                    <img src={iphone}></img>
                </div>
            </div>


            {/**Desktop */}
            <div className="">

            </div>

        </div>
    )
}