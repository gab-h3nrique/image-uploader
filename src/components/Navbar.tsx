/* components */

import SpinnerIcon from "./icons/SpinnerIcon";

/* components */

export interface Props {
    user: any;
}


const Navbar = ({user}:any) => {

    return (
        <nav className={`min-w-full h-fit flex bg-slate-900 p-3 text-white duration-150`}>
            
            {
                user ? <div className="ml-auto">{user?.name}</div>
                :  <SpinnerIcon className="h-5 w-5 ml-auto text-slate-400 fill-white"/>
            }
        </nav>
    )
}
export default Navbar;