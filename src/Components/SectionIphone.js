import iphone from '../Assets/iPhone.png'
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
            <div className="laptop:grid grid-cols-2  ">
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