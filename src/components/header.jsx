import React from "react"


function Header(){
    return (
        <div className="p-[20px]">
            <div>
                <h1 className="mb-[15px] text-[40px]">Auction</h1>
                {/* get the user name fomr the api */}
                <p className="mb-[15px]">Singed in as (user name)</p>
            </div>
            <div className="">

                <ul className="flex flex-row gap-[10px]">
                    <div className="w-[150px] h-[50px] text-center flex items-center justify-center">
                    <li className="bg-[#8c846d] transition delay-150 duration-300 ease-in-out w-[90%] h-[90%] rounded-[10px] p-[10px] text-[white] hover:bg-[#9f9987] hover:scale-110 hover:cursor-pointer">
                        <a href="#">Active Listings</a>
                    </li>
                    </div>
                    <div className="w-[150px] h-[50px] text-center flex items-center justify-center">
                    <li className="bg-[#8c846d] transition delay-150 duration-300 ease-in-out w-[90%] h-[90%] rounded-[10px] p-[10px] text-[white] hover:bg-[#9f9987] hover:scale-110 hover:cursor-pointer">
                        <a href="#">Active Listings</a>
                    </li>
                    </div>
                    <div className="w-[150px] h-[50px] text-center flex items-center justify-center">
                    <li className="bg-[#8c846d] transition delay-150 duration-300 ease-in-out w-[90%] h-[90%] rounded-[10px] p-[10px] text-[white] hover:bg-[#9f9987] hover:scale-110 hover:cursor-pointer">
                        <a href="#">Active Listings</a>
                    </li>
                    </div>
                    <div className="w-[150px] h-[50px] text-center flex items-center justify-center">
                    <li className="bg-[#8c846d] transition delay-150 duration-300 ease-in-out w-[90%] h-[90%] rounded-[10px] p-[10px] text-[white] hover:bg-[#9f9987] hover:scale-110 hover:cursor-pointer">
                        <a href="#">Active Listings</a>
                    </li>
                    </div>
                    <div className="w-[150px] h-[50px] text-center flex items-center justify-center">
                    <li className="bg-[#8c846d] transition delay-150 duration-300 ease-in-out w-[90%] h-[90%] rounded-[10px] p-[10px] text-[white] hover:bg-[#9f9987] hover:scale-110 hover:cursor-pointer">
                        <a href="#">Active Listings</a>
                    </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Header
