import React from "react"

function CreatListing(){
    return(
        <form action="">
            <div className=" p-[20px] mt-[20px] border-[2px] border-[#000] w-[100%] h-[100%] ">
                <div className="flex flex-col mb-[20px]">
                    <label className="font-[600] " htmlFor="List_title">List Title</label>
                    <input className=" font-[600] w-[25%] border-[#000] outline-none border-[3px] px-[10px] italic "  placeholder="List Title" type="text" id="List_title" name="List_title" />
                </div>
                <div>
                    <label htmlFor="list_image">List image</label>
                    <input type="text" name="list_image" id="list_image" />
                </div>
                <div>
                   <div>
                        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span class="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input td-md bordype="text" name="price" id="price" class="block w-full roundeer-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00" />
                            <div class="absolute inset-y-0 right-0 flex items-center">
                            <label for="currency" class="sr-only">Currency</label>
                            <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                <option>USD</option>
                                <option>CAD</option>
                                <option>EUR</option>
                            </select>
                            </div>
                        </div>
                        </div>
                    {/* <label htmlFor="starting_bid">starting bid</label>
                    <input type="number" name="starting_bid" id="starting_bid" /> */}
                </div>
                <div>
                    <label htmlFor="description">description</label>
                    <input type="text" name="description" id="description" />
                </div>
                <button className="bg-[#DEE0E3] text-[#000] font-[700] px-[20px] py-[5px] rounded border-[3px] border-[#000]">submit</button>
            </div>
        </form>
    )
}


export default CreatListing