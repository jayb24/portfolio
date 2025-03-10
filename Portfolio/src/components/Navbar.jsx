import { useState } from 'react';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className="w-full flex justify-center">
            <nav className="w-full max-w-[1200px] mx-auto flex py-6 px-4 md:px-40 justify-between items-center">
                {/* Logo */}
                <img src={logo} alt="profile picture" className="w-[50px] h-[50px]" />
                
                {/* Desktop Navigation (Hidden on smaller screens) */}
                <ul className="list-none md:flex hidden justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-roboto font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button (Visible only on smaller screens) */}
                <div className="md:hidden flex flex-1 justify-end items-center">
                    <img 
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle((prev) => !prev)}
                    />

                    {/* Mobile Menu */}
                    <div
                        className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                    >
                        <ul className="list-none flex flex-col justify-end items-center flex-1">
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-roboto font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
