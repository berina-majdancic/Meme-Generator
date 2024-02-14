import React from "react";
export default function Form(props){
   return(<form className="">
                    <div className="">   
                    </div>
                    <div className="flex gap-5 mt-4 mx-10 max-w-[100%] flex-wrap sm:flex-nowrap">
                        <div className="sm:basis-1/2 flex flex-col gap-[5] grow">
                            <h2 className=" text-[15px] font-[600] row">Enter top text</h2>
                            <input 
                                type="text" name="topText" onChange={props.setMemeState}
                                className="rounded-sm border-[0px] focus:outline-pink-300 border-[rgb(255,255,255)] h-9 "></input> 
                        </div>
                        <div className="max-w-[100%] m-0 sm:basis-1/2 flex flex-col  grow">
                            <h2 className="text-[15px] font-[600]">Enter bottom text</h2>
                            <input type="text" name="bottomText" onChange={props.setMemeState}
                            className="rounded-sm border-[0px] focus:outline-pink-300 h-9"></input>
                        </div>
                    </div>
                    
                </form>)
}