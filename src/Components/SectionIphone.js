import iphone from '../Assets/iPhone.png'
export default function () {
    return (
        <div>
            {/**Phone */}
            <div className="grid grid-cols-1 laptop:hidden px-phonePadding pt-20">
                <div className=" ">
                    <h1 className="font-semibold text-phoneTitle ">
                        Everything you <br />
                        need to stay ahead <br />
                        of the competition<span className="text-green">.</span>
                    </h1>
                    <h2 className="text-subTitle">
                        Lorem ipsum dolor sit amet, consectetuer 
                        adipiscing elit, sed diam nonummy nibh 
                        euismod tincidunt ut laoreet dolore magna.
                    </h2>
                </div>
                <button className="bg-green mt-5 mx-10 px-5 py-2 rounded-xl font-semibold hover:text-white">
                    Install now
                </button>
                <div className=" place-self-center">
                    <img className="w-laptopCards"src={iphone}></img>
                </div>
            </div>

            {/**Tablette */}
            <div className="">

            </div>

            {/**Laptop */}
            <div className="hidden laptop:grid grid-cols-2  ">
                <div className="pt-40">
                    <h1 className="font-semibold text-title pt-28">
                        Everything you <br />
                        need to stay ahead <br />
                        of the competition<span className="text-green">.</span>
                    </h1>
                    <h2 className="text-subTitle">
                        Lorem ipsum dolor sit amet, consectetuer <br />
                        adipiscing elit, sed diam nonummy nibh <br />
                        euismod tincidunt ut laoreet dolore magna.<br />
                    </h2>
                    <button className="bg-green mt-5 px-10 py-2 rounded-xl font-semibold hover:text-white">
                        Install now
                    </button>
                </div>
                <div className="pt-10 place-self-end">
                    <img src={iphone}></img>
                </div>
            </div>


            {/**Desktop */}
            <div className="">

            </div>


        </div>
    )
}