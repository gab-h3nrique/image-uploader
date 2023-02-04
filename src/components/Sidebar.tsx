/* components */

import { useState } from "react";

/* components */
import Router from 'next/router';
import SignOutIcon from "./icons/SignOutIcon";
import Api from "../lib/api";

const Sidebar = ({selected}:any) => {
    
    return (
        <aside className={`bg-slate-900 pb-5 pt-16 px-2 flex flex-col justify-start items-center gap-5 min-h-full w-16 hover:w-48 text-white duration-300`}>
            
            <section onClick={()=>Router.push('/app/')} className={`h-fit w-full p-2 flex justify-center rounded-lg  cursor-pointer duration-150 ${selected ==  'home' ? 'bg-slate-400' : 'hover:bg-slate-400'} group`}>
                <p className={`font-semibold duration-150 ${selected ==  'home' ? 'text-slate-900' : 'group-hover:text-slate-900'}`}>Home</p>
            </section>

            <section onClick={()=>Router.push('/app/upload')} className={`h-fit w-full p-2 flex justify-center rounded-lg  cursor-pointer duration-150 ${selected ==  'upload' ? 'bg-slate-400' : 'hover:bg-slate-400'} group`}>
                <p className={`font-semibold duration-150 ${selected ==  'upload' ? 'text-slate-900' : 'group-hover:text-slate-900'}`}>Upload</p>
            </section>

            <section className="px-2 mt-auto">
                
                <div onClick={()=> Api.signOut()} className="flex items-center justify-start gap-3 hover:scale-110 duration-300 cursor-pointer hover:bg-slate-400 rounded-2xl p-3 group">

                    <div className="">
                        <SignOutIcon className={`w-6 h-6 fill-white group-hover:fill-slate-900`} />
                    </div>
                   

                </div>

            </section>

        </aside>
    )
}
export default Sidebar;