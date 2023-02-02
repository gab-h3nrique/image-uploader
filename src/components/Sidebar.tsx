/* components */

import { useState } from "react";

/* components */


const Sidebar = ({selected}:any) => {
    
    return (
        <aside className={`bg-slate-900 py-5 px-2 flex flex-col justify-start items-center gap-5 min-h-screen w-16 hover:w-48 text-white duration-300`}>
            
            <section className="h-fit w-full p-2 flex justify-center rounded-lg hover:bg-slate-500 cursor-pointer duration-150 group">
                <p className={`font-semibold duration-150 group-hover:text-black`}>Home</p>
            </section>

            <section className="h-fit w-full p-2 flex justify-center rounded-lg hover:bg-slate-500 cursor-pointer duration-150 group">
                <p className={`font-semibold duration-150 group-hover:text-black`}>Upload de imagens</p>
            </section>

            <section className="h-fit w-full p-2 flex justify-center rounded-lg hover:bg-slate-500 cursor-pointer duration-150 group">
                <p className={`font-semibold duration-150 group-hover:text-black`}>usuários</p>
            </section>

        </aside>
    )
}
export default Sidebar;