import Plant from '../Assets/Plantfoto.png'
export default function () {
    return (
        <div>
            {/**Phone */}
            <div className=" laptop:hidden px-phonePadding">
                <h1 className="font-semibold text-phoneTitle text-center pt-28">
                    What our customers say about us<span className="text-green">.</span>
                </h1>
                <h2 className="text-subTitle text-center">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.<br />
                </h2>
                <div className="grid grid-cols-1 place-items-center mt-5 ">
                    <div className=" bg-white  drop-shadow-2xl rounded-2xl">
                        <h1 className="text-phoneCommentTitle font-medium  pt-10 px-5 ">
                            Promote my work online
                        </h1>
                        <p className="text-phoneCommentText font-regular mt-10 px-5">
                            Lorem ipsum dolor sit amet, 
                            consectetuer adipiscing elit, 
                            sed diam nonummy nibh 
                            euismod tincidunt ut laoreet 
                            dolore magna.
                        </p>
                        <div className="flex space-x-10 mt-10 ">
                            <div className="bg-green w-10 h-10 rounded-full ml-5">

                            </div>
                            <div classsName="place-content-center mr-10">
                                Sandra Smith, artist
                            </div>
                        </div>
                        <div className="text-laptopCommentApostrophe text-green  text-center ">
                            “
                        </div>

                    </div>
                    <div className=" rounded-2xl py-2">
                        <img className="" src={Plant}></img>
                    </div>
                </div>
            </div>

            {/**Tablette */}
            <div className="">

            </div>

            {/**Laptop */}
            <div className="hidden laptop:block ">
                <h1 className="font-semibold text-title text-center pt-28">
                    What our customers say about us<span className="text-green">.</span>
                </h1>
                <h2 className="text-subTitle text-center pt-4">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.<br />
                </h2>
                <div className="grid grid-cols-2 place-items-center mt-20 ">
                    <div className="justify-self-end bg-white w-laptopAbout drop-shadow-2xl rounded-l-2xl">
                        <h1 className="text-laptopCommentTitle font-medium mt-20 pt-20 pl-20">
                            Promote my work online
                        </h1>
                        <p className="text-laptopCommentText font-regular mt-10 pl-20">
                            Lorem ipsum dolor sit amet, <br />
                            consectetuer adipiscing elit, <br />
                            sed diam nonummy nibh <br />
                            euismod tincidunt ut laoreet <br />
                            dolore magna.
                        </p>
                        <div className="flex space-x-10  mt-10">
                            <div className="bg-green w-10 h-10 rounded-full ml-20">

                            </div>
                            <div classsName="place-self-center font-semibold ">
                                Sandra Smith, artist
                            </div>
                        </div>
                        <div className="text-laptopCommentApostrophe text-green  text-right mr-10 ">
                            “
                        </div>

                    </div>
                    <div className="justify-self-start w-laptopAbout rounded-r-2xl py-2">
                        <img className="w-full " src={Plant}></img>
                    </div>
                </div>
            </div>


            {/**Desktop */}
            <div className="">

            </div>


        </div>
    )
}