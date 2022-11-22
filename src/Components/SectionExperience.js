
import Image1 from '../Assets/1.png'
import Image2 from '../Assets/2.png'
import Image3 from '../Assets/3.png'

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
            <div className="laptop:block">
                <div>
                    <h1 className="font-semibold text-title text-center pt-28">
                        See for yourself how it <br/>
                        works and what it looks like<span className="text-green">.</span>
                    </h1>
                    <h2 className="text-subTitle text-center">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.<br />
                    </h2>
                </div>
                <div className="grid grid-cols-6 pt-20 place-content-start w-1/2 font-semibold">
                    <div className=" text-grey hover:text-black">
                        Furniture
                    </div>
                    <div div className=" text-grey hover:text-black">
                        Plants
                    </div>
                    <div div className=" text-grey hover:text-black">
                        Poster
                    </div>
                    <div div className=" text-grey hover:text-black">
                        Rugs
                    </div>
                    <div div className=" text-grey hover:text-black">
                        Statues
                    </div>
                    <div div className=" text-grey hover:text-black">
                        Well Start
                    </div>
                </div>
                <div className="laptop:grid grid-cols-3 place-content-between  content-center pt-10">
                    <div className={"mt-2 grid place-content-center w-laptopCards h-laptopCards  rounded-2xl hover:bg-indigo  bg-white text-black "}>
                        <div className={"grid place-items-center  w-64  h-64 bg-beige rounded-full "}>
                            <img className="mt-10 w-40 lg:mt-32" src={Image1} alt="" />
                        </div>
                        <div className={"pt-10"}>
                            <h1>
                                View this artwork
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className={"border-2 border-beige p-2 w-50 text-sm text-center mt-3 font-semibold hover:bg-beige hover:text-white mt-12"}>
                            View in AR
                        </div>
                    </div>
                    <div className={"mt-2 grid place-content-center w-laptopCards h-laptopCards   rounded-2xl hover:bg-indigo  bg-white text-black "}>
                        <div className={"grid place-items-center  w-64  h-64 bg-beige rounded-full "}>
                            <img className="mt-10 w-40 lg:mt-32" src={Image2} alt="" />
                        </div>
                        <div className={"pt-10"}>
                            <h1>
                                View this artwork
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className={"border-2 border-beige p-2 w-50 text-sm text-center mt-3 font-semibold hover:bg-beige hover:text-white mt-12"}>
                            View in AR
                        </div>
                    </div>
                    <div className={"mt-2 grid place-content-center w-laptopCards h-laptopCards  rounded-2xl hover:bg-indigo  bg-white text-black "}>
                        <div className={"grid place-items-center  w-64  h-64 bg-beige rounded-full "}>
                            <img className="mt-10 w-40 lg:mt-32" src={Image3} alt="" />
                        </div>
                        <div className={"pt-10"}>
                            <h1>
                                View this artwork
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className={"border-2 border-beige p-2 w-50 text-sm text-center mt-3 font-semibold hover:bg-beige hover:text-white mt-12"}>
                            View in AR
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