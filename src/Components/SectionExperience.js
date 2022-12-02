
import Image1 from '../Assets/1.png'
import Image2 from '../Assets/2.png'
import Image3 from '../Assets/3.png'

export default function () {
    return (
        <div>
            {/**Phone */}
            <div className="block pb-20  px-phonePadding laptop:hidden ">
                <div>
                    <h1 className="font-semibold text-phoneTitle text-center pt-20">
                        See for yourself how it
                        works and what it looks like<span className="text-green">.</span>
                    </h1>
                    <h2 className="text-subTitle text-center ">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.<br />
                    </h2>
                </div>
                <div className="grid grid-cols-1  pt-10 font-semibold">
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
                <div className="laptop:grid grid-cols-1   content-center pt-10">
                    <div className={"mt-2 grid place-content-center w-full h-phoneCards  rounded-2xl hover:bg-indigo  bg-white text-black pt-5 "}>
                        <div className={"grid mx-auto place-content-center  w-24  h-24 bg-beige rounded-full"}>
                            <img className="mt-16 w-20 " src={Image1} alt="" />
                        </div>
                        <div className={"pt-20 text-center"}>
                            <h1 className={"font-semibold"}>
                                View this artwork
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className={"border-2 border-beige p-2 w-40 mx-auto text-sm text-center my-3 font-semibold hover:bg-beige hover:text-white mt-12 rounded-2xl"}>
                            View in AR
                        </div>
                    </div>
                    <div className={"mt-2 grid place-content-center w-full h-phoneCards  rounded-2xl hover:bg-indigo  bg-white text-black pt-5 "}>
                        <div className={"grid mx-auto place-content-center  w-24  h-24 bg-beige rounded-full"}>
                            <img className="mt-16 w-20 " src={Image2} alt="" />
                        </div>
                        <div className={"pt-20 text-center"}>
                            <h1 className={"font-semibold"}>
                                View this artwork
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className={"border-2 border-beige p-2 w-50 text-sm text-center my-3 font-semibold hover:bg-beige hover:text-white mt-12 w-40 mx-auto rounded-2xl"}>
                            View in AR
                        </div>
                    </div>
                    <div className={"mt-2 grid place-content-center w-full h-phoneCards  rounded-2xl hover:bg-indigo  bg-white text-black pt-5 "}>
                        <div className={"grid mx-auto place-content-center  w-24  h-24 bg-beige rounded-full"}>
                            <img className="mt-16 w-20 " src={Image3} alt="" />
                        </div>
                        <div className={"pt-20 text-center"}>
                            <h1 className={"font-semibold"}>
                                View this artwork
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className={"border-2 border-beige p-2 w-40 text-sm text-center my-3 rounded-xl font-semibold hover:bg-beige hover:text-white mt-12  mx-auto rounded-2xl"}>
                            View in AR
                        </div>
                    </div>
                </div>
            </div>

            {/**Tablette */}
            <div className="">

            </div>

            {/**Laptop */}
            <div className="hidden laptop:block screen15:hidden">
                <div>
                    <h1 className="font-semibold text-title text-center pt-28">
                        See for yourself how it <br />
                        works and what it looks like<span className="text-green">.</span>
                    </h1>
                    <h2 className="text-subTitle text-center pt-4">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.<br />
                    </h2>
                </div>
                <div className="grid grid-cols-6 pt-20 place-content-start w-1/2 font-semibold">
                    <div className=" text-grey hover:text-black">
                        <div>
                            Furniture
                        </div>

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
                <div className="laptop:flex justify-between pt-10">
                    <div className={"mt-2 grid place-content-center w-laptopCards h-laptopCards  rounded-2xl hover:bg-indigo  bg-white text-black "}>
                        <div className={"grid place-items-center  w-64  h-64 bg-beige rounded-full "}>
                            <img className="mt-10 w-40 lg:mt-32" src={Image1} alt="" />
                        </div>
                        <div className={"pt-10"}>
                            <h1 className="font-semibold">
                                View this artwork
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className={"border-2 border-beige p-2 w-50 text-sm rounded-xl text-center mt-3 font-semibold hover:bg-beige hover:text-white mt-12"}>
                            View in AR
                        </div>
                    </div>
                    <div className={"mt-2 grid place-content-center w-laptopCards h-laptopCards   rounded-2xl hover:bg-indigo  bg-white text-black "}>
                        <div className={"grid place-items-center  w-64  h-64 bg-beige rounded-full "}>
                            <img className="mt-10 w-40 lg:mt-32" src={Image2} alt="" />
                        </div>
                        <div className={"pt-10"}>
                            <h1 className="font-semibold">
                                View this artwork
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className={"border-2 border-beige p-2 w-50 text-sm text-center rounded-xl mt-3 font-semibold hover:bg-beige hover:text-white mt-12"}>
                            View in AR
                        </div>
                    </div>
                    <div className={"mt-2 grid place-content-center w-laptopCards h-laptopCards  rounded-2xl hover:bg-indigo  bg-white text-black "}>
                        <div className={"grid place-items-center  w-64  h-64 bg-beige rounded-full "}>
                            <img className="mt-10 w-40 lg:mt-32" src={Image3} alt="" />
                        </div>
                        <div className={"pt-10"}>
                            <h1 className="font-semibold">
                                View this artwork
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className={"border-2 border-beige p-2 w-50 text-sm text-center rounded-xl mt-3 font-semibold hover:bg-beige hover:text-white mt-12"}>
                            View in AR
                        </div>
                    </div>
                </div>
            </div>

            {/**screen15 */}
            <div className="hidden screen15:block desktop:hidden">
                <div>
                    <h1 className="font-semibold text-title text-center pt-28">
                        See for yourself how it <br />
                        works and what it looks like<span className="text-green">.</span>
                    </h1>
                    <h2 className="text-subTitle text-center pt-4">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.<br />
                    </h2>
                </div>
                <div className="grid grid-cols-6 pt-20 place-content-start w-1/2 font-semibold">
                    <div className=" text-grey hover:text-black">
                        <div>
                            Furniture
                        </div>

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
                <div className="laptop:flex justify-between pt-10">
                    <div className={"mt-2 grid place-content-center w-screen15Cards h-screen15Cards  rounded-2xl hover:bg-indigo  bg-white text-black "}>
                        <div className={"grid place-items-center  w-64  h-64 bg-beige rounded-full "}>
                            <img className="mt-10 w-40 lg:mt-32" src={Image1} alt="" />
                        </div>
                        <div className={"pt-10"}>
                            <h1 className="font-semibold">
                                View this artwork
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className={"border-2 border-beige p-2 w-50 text-sm rounded-xl text-center mt-3 font-semibold hover:bg-beige hover:text-white mt-12"}>
                            View in AR
                        </div>
                    </div>
                    <div className={"mt-2 grid place-content-center w-screen15Cards h-screen15Cards   rounded-2xl hover:bg-indigo  bg-white text-black "}>
                        <div className={"grid place-items-center  w-64  h-64 bg-beige rounded-full "}>
                            <img className="mt-10 w-40 lg:mt-32" src={Image2} alt="" />
                        </div>
                        <div className={"pt-10"}>
                            <h1 className="font-semibold">
                                View this artwork
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className={"border-2 border-beige p-2 w-50 text-sm text-center rounded-xl mt-3 font-semibold hover:bg-beige hover:text-white mt-12"}>
                            View in AR
                        </div>
                    </div>
                    <div className={"mt-2 grid place-content-center w-screen15Cards h-screen15Cards  rounded-2xl hover:bg-indigo  bg-white text-black "}>
                        <div className={"grid place-items-center  w-64  h-64 bg-beige rounded-full "}>
                            <img className="mt-10 w-40 lg:mt-32" src={Image3} alt="" />
                        </div>
                        <div className={"pt-10"}>
                            <h1 className="font-semibold">
                                View this artwork
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className={"border-2 border-beige p-2 w-50 text-sm text-center rounded-xl mt-3 font-semibold hover:bg-beige hover:text-white mt-12"}>
                            View in AR
                        </div>
                    </div>
                </div>
            </div>

            {/**Desktop */}
            <div className="hidden desktop:block ">
                <div>
                    <h1 className="font-semibold text-desktopTitle text-center pt-28">
                        See for yourself how it <br />
                        works and what it looks like<span className="text-green">.</span>
                    </h1>
                    <h2 className="text-desktopSubTitle text-center pt-4">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.<br />
                    </h2>
                </div>
                <div className="flex justify-between space-x-10 pt-20 place-content-start w-1/2 font-semibold">
                    <div className=" text-grey hover:text-black text-dektopTextCards">
                        <div>
                            Furniture
                        </div>

                    </div>
                    <div div className=" text-grey hover:text-black text-dektopTextCards">
                        Plants

                    </div>
                    <div div className=" text-grey hover:text-black text-dektopTextCards">
                        Poster

                    </div>
                    <div div className=" text-grey hover:text-black text-dektopTextCards">
                        Rugs

                    </div>
                    <div div className=" text-grey hover:text-black text-dektopTextCards">
                        Statues

                    </div>
                    <div div className=" text-grey hover:text-black text-dektopTextCards">
                        Well Start

                    </div>
                </div>
                <div className="laptop:flex justify-between pt-10">
                    <div className={"mt-2 grid place-content-center w-desktopCards h-desktopCards  rounded-2xl hover:bg-indigo  bg-white text-black "}>
                        <div className={"grid place-items-center  w-96  h-96 bg-beige rounded-full "}>
                            <img className="mt-32 w-56 lg:mt-32" src={Image1} alt="" />
                        </div>
                        <div className={"pt-10"}>
                            <h1 className="font-semibold text-dektopTextCards pt-10">
                                View this artwork
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className={"border-2 border-beige p-2 w-50 text-sm text-center rounded-xl mt-3 font-semibold hover:bg-beige hover:text-white mt-12"}>
                            View in AR
                        </div>
                    </div>
                    <div className={"mt-2 grid place-content-center w-desktopCards h-desktopCards   rounded-2xl hover:bg-indigo  bg-white text-black "}>
                        <div className={"grid place-items-center  w-96  h-96 bg-beige rounded-full "}>
                            <img className="mt-32 w-56 lg:mt-32" src={Image2} alt="" />
                        </div>
                        <div className={"pt-10"}>
                            <h1 className="font-semibold text-dektopTextCards pt-10">
                                View this artwork
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className={"border-2 border-beige p-2 w-50 text-sm text-center rounded-xl mt-3 font-semibold hover:bg-beige hover:text-white mt-12"}>
                            View in AR
                        </div>
                    </div>
                    <div className={"mt-2 grid place-content-center w-desktopCards h-desktopCards  rounded-2xl hover:bg-indigo  bg-white text-black "}>
                        <div className={"grid place-items-center  w-96  h-96 bg-beige rounded-full "}>
                            <img className="mt-32 w-56 lg:mt-32" src={Image3} alt="" />
                        </div>
                        <div className={"pt-10"}>
                            <h1 className="font-semibold text-dektopTextCards pt-10">
                                View this artwork
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className={"border-2 border-beige p-2 w-50 text-sm text-center mt-3 rounded-xl font-semibold hover:bg-beige hover:text-white mt-12"}>
                            View in AR
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}