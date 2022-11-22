
import html from '../Assets/html.svg';
import shopify from '../Assets/shopify.svg';
import weebly from '../Assets/weebly.svg';
import wordpress from '../Assets/wordpress.svg';

export default function () {
    return (
        <div>
            {/**Phone */}
            <div className="grid grid-cols-1 place-content-between content-center px-phonePadding laptop:hidden pt-10">
                <div>
                    <h1 className="font-semibold text-phoneTitle ">
                        Art. is trusted
                        by the website
                        platforms you use <span className="text-green">.</span>
                    </h1>
                    <h2 className="text-subTitle">
                        Elevate your customer experience with AR. Simple Plug and play 
                        installation for popular ecommerce platforms.
                    </h2>
                </div>
                <div className="grid grid-cols-1  ">
                    <div className=" ">
                        <div className="grid grid-cols-1 pt-10 ">
                            <div className="place-self-center">
                                <img src={wordpress}></img>
                            </div>
                            <div>
                                <h1 className="font-semibold text-center pt-2">
                                    Wordpress
                                </h1>
                                <p className="text-center">
                                    Lorem ipsum dolor
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 pt-10 ">
                            <div className="place-self-center ">
                                <img src={shopify}></img>
                            </div>
                            <div>
                                <h1 className="font-semibold text-center  pt-2">
                                    Shopify
                                </h1>
                                <p className="text-center">
                                    Lorem ipsum dolor
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" ">
                        <div className="grid grid-cols-1 pt-10">
                            <div className="place-self-center">
                                <img src={weebly}></img>
                            </div>
                            <div className="text-center">
                                <h1 className="font-semibold text-center  pt-2">
                                    Weebly
                                </h1>
                                <p className="text-center">
                                    Lorem ipsum dolor
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 py-10">
                            <div className="place-self-center ">
                                <img src={html}></img>
                            </div>
                            <div className="texte-center">
                                <h1 className="font-semibold text-center  pt-2">
                                    Html
                                </h1>
                                <p className="text-center">
                                    Lorem ipsum dolor
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/**Tablette */}
            <div className="">

            </div>

            {/**Laptop */}
            <div className="hidden laptop:grid grid-cols-2 place-content-between content-center ">
                <div>
                    <h1 className="font-semibold text-title pt-28">
                        Art. is trusted<br />
                        by the website <br />
                        platforms you use <span className="text-green">.</span>
                    </h1>
                    <h2 className="text-subTitle">
                        Elevate your customer experience with AR. Simple Plug and play <br />
                        installation for popular ecommerce platforms.
                    </h2>
                </div>
                <div className="grid grid-cols-2 pt-48 ">
                    <div className=" ">
                        <div className="grid grid-cols-2 mr-10">
                            <div className="place-self-end mr-10">
                                <img src={wordpress}></img>
                            </div>
                            <div>
                                <h1 className="font-semibold">
                                    Wordpress
                                </h1>
                                <p>
                                    Lorem ipsum dolor
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 pt-10 mr-10">
                            <div className="place-self-end mr-10">
                                <img src={shopify}></img>
                            </div>
                            <div>
                                <h1 className="font-semibold">
                                    Shopify
                                </h1>
                                <p>
                                    Lorem ipsum dolor
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" ">
                        <div className="grid grid-cols-2 ">
                            <div className="place-self-end mr-10">
                                <img src={weebly}></img>
                            </div>
                            <div className="place-self-end mr-10">
                                <h1 className="font-semibold">
                                    Weebly
                                </h1>
                                <p>
                                    Lorem ipsum dolor
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 pt-10">
                            <div className="place-self-end mr-10">
                                <img src={html}></img>
                            </div>
                            <div>
                                <h1 className="font-semibold">
                                    Html
                                </h1>
                                <p>
                                    Lorem ipsum dolor
                                </p>
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