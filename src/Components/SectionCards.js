
export default function () {
    return (
        <div>
            {/**Phone */}
            <div className="grid grid-cols-1 justify-between laptop:hidden px-phonePadding">
                <div>
                    <div className={"mt-2  w-phoneCards h-phoneCards rounded-2xl   bg-white text-black hover:bg-purple hover:text-white "}>
                        <div className={"absolute -z-10 drop-shadow-2xl w-phoneCards h-phoneCards  ml-1 -mt-1 rounded-2xl bg-beige "}>
                        </div>
                        <div className={" text-phoneNumberCards  px-10 pt-10 "}>
                            1.
                        </div>
                        <div className={" px-10"}>
                            <div className={"text-phoneTitleCards outline-2 font-semibold pt-5 "}>
                                This is the titel for <br />stap 1
                                <div className={"text-phoneTextCards font-normal pt-5"}>
                                    Lorem ipsum dolor <br />
                                    sit amet, adipiscing <br />
                                    elit, sed diam des. <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"mt-2  w-phoneCards h-phoneCards rounded-2xl   bg-white text-black hover:bg-purple hover:text-white "}>
                        <div className={"absolute -z-10 drop-shadow-2xl w-phoneCards h-phoneCards  ml-1 -mt-1 rounded-2xl bg-beige "}>
                        </div>
                        <div className={" text-phoneNumberCards  px-10 pt-10 "}>
                            2.
                        </div>
                        <div className={" px-10"}>
                            <div className={"text-phoneTitleCards outline-2 font-semibold pt-5 "}>
                                This is the titel for <br />stap 2
                                <div className={"text-phoneTextCards font-normal pt-5"}>
                                    Lorem ipsum dolor <br />
                                    sit amet, adipiscing <br />
                                    elit, sed diam des. <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"mt-2  w-phoneCards h-phoneCards rounded-2xl   bg-white text-black hover:bg-purple hover:text-white "}>
                        <div className={"absolute -z-10 drop-shadow-2xl w-phoneCards h-phoneCards  ml-1 -mt-1 rounded-2xl bg-beige "}>
                        </div>
                        <div className={" text-phoneNumberCards  px-10 pt-10 "}>
                            3.
                        </div>
                        <div className={" px-10"}>
                            <div className={"text-phoneTitleCards outline-2 font-semibold pt-5 "}>
                                This is the titel for <br /> stap 3
                                <div className={"text-phoneTextCards font-normal pt-5"}>
                                    Lorem ipsum dolor <br />
                                    sit amet, adipiscing <br />
                                    elit, sed diam des. <br />
                                </div>
                                <div className={"border-2 border-beige p-2 w-50  text-phoneTextCards text-center mt-5 font-semibold hover:bg-beige hover:text-white"}>
                                    See how it works
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/**Tablette */}
            <div className="">

            </div>

            {/**Laptop */}
            <div className="hidden laptop:flex justify-between space-x-10">
                <div>
                    <div className={"mt-2  w-laptopCards h-laptopCards rounded-2xl   bg-white text-black hover:bg-purple hover:text-white "}>
                        <div className={"absolute -z-10 drop-shadow-2xl w-laptopCards h-laptopCards  ml-1 -mt-1 rounded-2xl bg-beige "}>
                        </div>
                        <div className={"text-5xl text-laptopNumberCards  px-10 pt-10 "}>
                            1.
                        </div>
                        <div className={" px-10"}>
                            <div className={"text-laptopTitleCards outline-2 font-semibold pt-10 "}>
                                This is the titel for <br />stap 1
                                <div className={"text-laptopTextCards font-normal pt-5"}>
                                    Lorem ipsum dolor <br />
                                    sit amet, adipiscing <br />
                                    elit, sed diam des. <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"mt-2  w-laptopCards h-laptopCards rounded-2xl   bg-white text-black hover:bg-purple hover:text-white "}>
                        <div className={"absolute drop-shadow-2xl -z-10  w-laptopCards h-laptopCards  ml-1 -mt-1  rounded-2xl bg-beige "}>
                        </div>
                        <div className={"text-5xl text-laptopNumberCards  px-10 pt-10 "}>
                            2.
                        </div>
                        <div className={" px-10"}>
                            <div className={"text-laptopTitleCards outline-2 font-semibold pt-10 "}>
                                This is the titel for <br />stap 2
                                <div className={"text-laptopTextCards font-normal pt-5"}>
                                    Lorem ipsum dolor <br />
                                    sit amet, adipiscing <br />
                                    elit, sed diam des. <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"mt-2  w-laptopCards h-laptopCards rounded-2xl   bg-white text-black hover:bg-purple hover:text-white "}>
                        <div className={"absolute drop-shadow-2xl -z-10  w-laptopCards h-laptopCards  ml-1 -mt-1 rounded-2xl bg-beige "}>
                        </div>
                        <div className={"text-5xl text-laptopNumberCards  px-10 pt-10 "}>
                            3.
                        </div>
                        <div className={" px-10"}>
                            <div className={" outline-2 font-semibold pt-10 "}>
                                <div className="text-laptopTitleCards">
                                    This is the titel for <br /> stap 3
                                </div>
                                <div className={"text-laptopTextCards font-normal pt-5"}>
                                    Lorem ipsum dolor <br />
                                    sit amet, adipiscing <br />
                                    elit, sed diam des. <br />
                                </div>
                                <div className={"border-2 border-beige p-2 w-50 text-sm text-center mt-10 font-semibold hover:bg-beige hover:text-white "}>
                                    View in AR
                                </div>
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