
export default function () {
    return (
        <div>
            {/**Phone */}
            <div className=" grid place-content-center mx-phonePadding laptop:hidden ">
                <div className=" w-phoneTrial bg-transparent rounded-3xl shadow-2xl">
                    <div className="text-phoneTitle p-10 font-semibold ">
                        Start your business 
                        journey with Art<span className="text-green">.</span>
                    </div>
                    <div className="flex flex-col  px-5">
                        <div>
                            ✓ 14 days free trial
                        </div>
                        <div>
                            ✓ Quick onboarding
                        </div>
                        <div>
                            ✓ Create AR in 3 east staps
                        </div>
                        <div>
                            ✓ No credit card required
                        </div>
                    </div>
                    <div className="relative h-10 mx-10  my-10">
                        <span className="absolute inset-0 w-32 h-full bg-white border-2 border-green translate-x-1 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0 group-hover:bg-black"></span>
                        <span className="absolute inset-0 w-32 h-full transition duration-200 ease-out transform  bg-green "></span>
                        <span className="relative text-black px-2  py-1 group-hover:text-white">Start feree trial</span>
                    </div>
                </div>

            </div>

            {/**Tablette */}
            <div className="">

            </div>

            {/**Laptop */}
            <div className="hidden laptop:grid place-content-center ">
                <div className=" w-laptopTrial bg-transparent rounded-3xl shadow-2xl">
                    <div className="text-laptopTrialTitle p-10 font-semibold ">
                        Start your business <br />
                        journey with Art<span className="text-green">.</span>
                    </div>
                    <div className="flex space-x-10 px-10">
                        <div>
                            ✓ 14 days free trial
                        </div>
                        <div>
                            ✓ Quick onboarding
                        </div>
                        <div>
                            ✓ Create AR in 3 east staps
                        </div>
                        <div>
                            ✓ No credit card required
                        </div>
                    </div>
                    <div className="relative inline-block h-10  mx-10 my-10">
                        <span className="absolute inset-0 w-36 h-10 bg-transparent border-2 border-green translate-x-1 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0 group-hover:bg-black"></span>
                        <span className="absolute inset-0 w-36 h-10 transition duration-200 ease-out transform  bg-green  px-4 py-2  hover:text-white"> Start free trial</span>
                        <span className="relative text-black px-2  hover:text-white"> </span>
                    </div>
                </div>

            </div>


            {/**Desktop */}
            <div className="">

            </div>


        </div>
    )
}