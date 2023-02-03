/* components */

import { useState } from "react";

/* components */
import Router from 'next/router';

const Sidebar = ({selected}:any) => {
    
    return (
        <aside className={`bg-slate-900 py-5 px-2 flex flex-col justify-start items-center gap-5 min-h-full w-16 hover:w-48 text-white duration-300`}>
            
            <section onClick={()=>Router.push('/app/')} className={`h-fit w-full p-2 flex justify-center rounded-lg  cursor-pointer duration-150 ${selected ==  'home' ? 'bg-slate-400' : 'hover:bg-slate-400'} group`}>
                <p className={`font-semibold duration-150 ${selected ==  'home' ? 'text-slate-900' : 'group-hover:text-slate-900'}`}>Home</p>
            </section>

            <section onClick={()=>Router.push('/app/upload')} className={`h-fit w-full p-2 flex justify-center rounded-lg  cursor-pointer duration-150 ${selected ==  'upload' ? 'bg-slate-400' : 'hover:bg-slate-400'} group`}>
                <p className={`font-semibold duration-150 ${selected ==  'upload' ? 'text-slate-900' : 'group-hover:text-slate-900'}`}>Upload</p>
            </section>

            <section onClick={()=>Router.push('/app/usuario')} className={`h-fit w-full p-2 flex justify-center rounded-lg  cursor-pointer duration-150 ${selected ==  'usuario' ? 'bg-slate-400' : 'hover:bg-slate-400'} group`}>
                <p className={`font-semibold duration-150 ${selected ==  'usuario' ? 'text-slate-900' : 'group-hover:text-slate-900'}`}>Usuário</p>
            </section>

        </aside>
    )
}
export default Sidebar;