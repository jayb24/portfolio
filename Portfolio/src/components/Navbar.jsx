import { useState, useEffect } from 'react';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    // Update the active link based on the current hash
    useEffect(() => {
        const handleHashChange = () => {
            setActiveLink(window.location.hash);
        };

        // Set the initial active link
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div className="w-full flex justify-center px-6 sm:px-6 md:px-0">
            <nav className="w-full mx-auto flex py-3 md:px-6 justify-between items-center">
                {/* Logo */}
                <img src={logo} alt="logo" className="w-[50px] h-[50px]" />
                
                {/* Desktop Navigation (Hidden on smaller screens) */}
                <ul className="list-none md:flex hidden justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-roboto font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
                        >
                            <a 
                                href={`#${nav.id}`}
                                style={{ 
                                    borderBottom: activeLink === `#${nav.id}` ? '4px solid #0099FF' : 'none',
                                    paddingBottom: '3px'
                                }}
                            >
                                {nav.title}
                            </a>
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
                        className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                    >
                        <ul className="list-none flex flex-col justify-end items-center flex-1">
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-roboto font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
                                >
                                    <a 
                                        href={`#${nav.id}`}
                                        style={{ 
                                            borderBottom: activeLink === `#${nav.id}` ? '4px solid #0099FF' : 'none',
                                            paddingBottom: '3px'
                                        }}
                                    >
                                        {nav.title}
                                    </a>
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