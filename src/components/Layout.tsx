/* components */

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

/* components */

export interface Props {
    page: string;
    children: React.ReactNode
}


const Layout = ({page, children}:Props) => {
    return (
        <div className="flex flex-col w-screen h-screen bg-slate-100">
            <Navbar/>
            <div className="flex h-full w-full">
                <Sidebar selected={page || ''}/>
                <main className="flex w-full p-3">
                    {children}
                </main>
            </div>
        </div>
    )
}
export default Layout;