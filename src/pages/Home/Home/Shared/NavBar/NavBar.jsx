import { Link } from "react-router-dom";


const NavBar = () => {


    const navOptions = <>
        <li className="uppercase  text-orange-300 font-extrabold"><Link to="/">Home</Link></li>
        <li className="uppercase  text-orange-300 font-extrabold"><Link to='/menu'>Our Menu</Link></li>
        <li className="uppercase  text-orange-300 font-extrabold"><Link to='/order/salad'>Order Food</Link></li>
        <li className="uppercase  text-orange-300 font-extrabold"><Link to='/contact'>CONTACT us</Link></li>

    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="cinzel uppercase text-3xl">Bistro Boss</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;