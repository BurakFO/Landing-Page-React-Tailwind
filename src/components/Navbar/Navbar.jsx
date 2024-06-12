import React, { useState } from "react";
import Logo from "../../assets/website/logo.jpg";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Partners",
        link: "/#services",
    },
];

const DropdownLinks = [
    {
        name: "Empty",
        link: "/#",
    },
    {
        name: "Empty",
        link: "/#",
    },
    {
        name: "Empty",
        link: "/#",
    },
];

const LogoComponent = () => {
    return (
        <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 hover:scale-105 duration-300  lg:my-0,5">
            <img src={Logo} alt="Logo" className="w-12" />
            <span className="flex items-center">InnoTech</span>
        </a>
    );
};


const DropdownSection = () => {
    return (
        <li className="group relative cursor-pointer">
            <a href="/#" className="flex h-[72px] items-center gap-[2px]">
                <span className="group-hover:text-secondary">Quick Links</span>
                <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                </span>
            </a>
            {/* Dropdown Links Section */}
            <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px]">
                <ul>
                    {DropdownLinks.map((data, index) => (
                        <li key={index}>
                            <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20 hover:text-secondary">
                                {data.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
};

const MenuComponent = () => {
    return (
        <ul className="items-center gap-4 sm:flex hidden">
            {Menu.map((menu) => (
                <li key={menu.id}>
                    <a href={menu.link} className="inline-block py-4 px-4 hover:text-secondary duration-300">
                        {menu.name}
                    </a>
                </li>
            ))}
            <DropdownSection />

        </ul>
    );
};

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="shadow-lg bg-white">
            {/* asagidaki class'a container vermedim. onun yerine mx-8 ifadesi var */}
            <div className="mx-8 py-3 lg:py-3 sm:py-0 flex justify-between items-center">
                <LogoComponent />
                <div className="flex items-center sm:hidden">
                    <button onClick={toggleMenu} className="text-2xl">
                        {showMenu ? <FaTimes /> : <FaBars />}
                    </button>
                    
                </div>
                <div className="hidden sm:flex items-center">
                    <MenuComponent />
                </div>
            </div>
            {showMenu && (
                <div className="sm:hidden mt-3">
                    <ul className="flex flex-col items-center gap-4">
                        {Menu.map((menu) => (
                            <li key={menu.id}>
                                <a href={menu.link} className="inline-block py-4 px-4 hover:text-secondary duration-300">
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                        <DropdownSection />


                    </ul>
                </div>
            )}
            
        </div>
    );
};

export default Navbar;