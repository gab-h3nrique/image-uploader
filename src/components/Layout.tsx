/* components */

import Sidebar from "./Sidebar";

/* components */

export interface Props {
    page: string;
    children: React.ReactNode
}


const Layout = ({page, children}:Props) => {
    return (
        <section className="flex w-screen h-screen">
            <Sidebar selected={page || ''}/>
            <main className="bg-slate-100 flex w-full h-full p-3">
                {children}
            </main>
        </section>
    )
}
export default Layout;