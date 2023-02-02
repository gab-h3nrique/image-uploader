/* components */

import Sidebar from "./Sidebar";

/* components */

export interface Props {
    page: string;
    children: React.ReactNode
}


const Layout = ({page, children}:Props) => {
    return (
        <section className="flex">
            <Sidebar selected={page || ''}/>
            <main className="bg-slate-100">
                {children}
            </main>
        </section>
    )
}
export default Layout;