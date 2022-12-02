import sofa from '../Assets/sofa.png'
export default function () {
    return (
        <div>
            {/**Phone */}
            <div className="grid grid-cols-1 content-center px-phonePadding  laptop:hidden">
                <div className=" pt-0">
                    <h1 className="font-semibold text-phoneTitle text-white ">
                        The best experiences <br />
                        for your business,<br />
                        starts with Art <span className="text-green">.</span>
                    </h1>
                    <h2 className="text-subTitle text-white">
                        Lorem ipsum dolor sit amet, consectetuer <br />
                        adipiscing elit, sed diam nonummy nibh <br />
                        euismod tincidunt ut laoreet dolore magna.<br />
                    </h2>
                    <div className="grid grid-cols-1">
                        <button className="hover:bg-green place-self-center text-green border-2 mt-5 px-10 py-2 rounded-xl font-semibold hover:text-purple">
                            Start Using
                        </button>
                        <button className="hover:bg-green place-self-center text-green border-2 mt-5 px-10 py-2 rounded-xl font-semibold hover:text-purple">
                            Prices
                        </button>
                    </div>
                </div>
                <div className="place-self-center py-10">
                    <img src={sofa} className="h-phonePictureSofa"></img>
                </div>
            </div>

            {/**Tablette */}
            <div className="">
            </div>

            {/**Laptop */}
            <div className="hidden laptop:grid grid-cols-2 content-center desktop:hidden">
                <div className=" pt-40">
                    <h1 className="font-semibold text-title text-white ">
                        The best experiences <br />
                        for your business,<br />
                        starts with Art <span className="text-green">.</span>
                    </h1>
                    <h2 className="text-subTitle text-white pt-4">
                        Lorem ipsum dolor sit amet, consectetuer <br />
                        adipiscing elit, sed diam nonummy nibh <br />
                        euismod tincidunt ut laoreet dolore magna.<br />
                    </h2>
                    <button className="hover:bg-green text-green border-2 mt-5 px-10 py-2 rounded-xl font-semibold hover:text-purple mr-5">
                        Start Using
                    </button>
                    <button className="hover:bg-green text-green border-2 mt-5 px-10 py-2 rounded-xl font-semibold hover:text-purple">
                        Prices
                    </button>
                </div>
                <div className="place-self-end ">
                    <img src={sofa} className="h-laptopPictureSofa"></img>
                </div>
            </div>

            {/**Desktop */}
            <div className="hidden desktop:grid grid-cols-2 content-center">
                <div className=" pt-40">
                    <h1 className="font-semibold text-desktopTitle text-white ">
                        The best experiences <br />
                        for your business,<br />
                        starts with Art <span className="text-green">.</span>
                    </h1>
                    <h2 className="text-desktopSubTitle text-white pt-4">
                        Lorem ipsum dolor sit amet, consectetuer <br />
                        adipiscing elit, sed diam nonummy nibh <br />
                        euismod tincidunt ut laoreet dolore magna.<br />
                    </h2>
                    <button className="hover:bg-green text-green border-2 mt-5 px-10 py-2 rounded-xl font-semibold hover:text-purple mr-5">
                        Start Using
                    </button>
                    <button className="hover:bg-green text-green border-2 mt-5 px-10 py-2 rounded-xl font-semibold hover:text-purple">
                        Prices
                    </button>
                </div>
                <div className="place-self-end pt-36 ">
                    <img src={sofa} className="h-desktopPictureSofa"></img>
                </div>
            </div>

        </div>
    )
}