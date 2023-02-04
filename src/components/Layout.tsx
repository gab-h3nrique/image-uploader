/* components */

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

/* components */

export interface Props {
    page: string;
    user: any;
    children: React.ReactNode
}


const Layout = ({page, user, children}:Props) => {
    return (
        <div className="flex flex-col w-screen h-screen bg-slate-200">
            <Navbar user={user}/>
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