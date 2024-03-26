import React from "react"

function Header(){
    return (
        <div>
            <div>
                <h1 className="mb-[15px] text-[40px]">Auction</h1>
                {/* get the user name fomr the api */}
                <p className="mb-[15px]">Singed in as (user name)</p>
            </div>
            <div className=" bg-[#DEE0E3] border-[3px] border-black ">

                <ul className="flex flex-row gap-[10px] ">
                    <li className=" transition delay-150 duration-300 ease-in-out  rounded-[10px] p-[10px] text-[#000]  hover:scale-110 hover:cursor-pointer">
                        <a href="activeListing">Active Listings</a>
                    </li>

                    <li className=" transition delay-150 duration-300 ease-in-out  rounded-[10px] p-[10px] text-[#000]  hover:scale-110 hover:cursor-pointer">
                        <a href="#">Categories</a>
                    </li>
                    <li className=" transition delay-150 duration-300 ease-in-out  rounded-[10px] p-[10px] text-[#000]  hover:scale-110 hover:cursor-pointer">
                        <a href="#">Watchlist</a>
                        {/* here we should display the number of lists that the use have add */}
                        <h3 className="ml-[5px] inline">3 </h3>
                    </li>
                    <li className=" transition delay-150 duration-300 ease-in-out  rounded-[10px] p-[10px] text-[#000]  hover:scale-110 hover:cursor-pointer">
                        <a href="creatListing">Creat Listing</a>
                    </li>
                    <li className=" transition delay-150 duration-300 ease-in-out  rounded-[10px] p-[10px] text-[#000]  hover:scale-110 hover:cursor-pointer">
                        <a href="#">Log Out</a>
                    </li> 
                </ul>

                {/* <div className="mt-[20px] w-[100%] h-[2px] bg-black"></div> */}
            </div>
        </div>
    )
}

export default Header
