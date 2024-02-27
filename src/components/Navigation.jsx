import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Logo from '/src/assets/img/logo1.webp'

export const Navigation = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className='relative z-20'>
            <nav className='container bg-black mx-auto p-6 flex justify-around items-center sm:h-20'>
                <div className='py-5 text-orange-400 font-bold text-3xl'>
                    <a href="#home">
                        <img src={Logo} />
                    </a>
                </div>
                <div>
                    <ul className='flex lg:hidden items-center space-x-6'>
                        <li><a href="#" className='text-xl text-white hover:text-orange-400 ease-in duration-200'>Home</a></li>
                        <li><a href="#" className='text-xl text-white hover:text-orange-400 ease-in duration-200'>Compañía</a></li>
                        <li><a href="#" className='text-xl text-white hover:text-orange-400 ease-in duration-200'>Soluciones digitales</a></li>
                        <li><a href="#" className='text-xl text-white hover:text-orange-400 ease-in duration-200'>Clientes</a></li>
                    </ul>
                </div>

                {/* Menu hamburguesa */}
                <div
                    className='hidden lg:block lg:z-50'
                    onClick={toggleMenu}
                >
                    {menuVisible ? (
                        <Icon icon="flowbite:close-outline" color='red'/>
                    ) : (
                        <Icon icon="majesticons:menu" color='red'/>
                    )}
                </div>

                <div id="menu" className={`hidden ${menuVisible ? 'lg:block' : ''} bg-orange-500 h-[100vh] absolute inset-0`}>
                <img src={Logo} className='m-auto'/>
                    <ul className='h-full grid place-items-center py-12'>
                        <li><a href="#" className='text-xl text-white hover:text-lime-500 ease-in duration-200'>Home</a></li>
                        <li><a href="#" className='text-xl text-white hover:text-lime-500 ease-in duration-200'>Compañía</a></li>
                        <li><a href="#" className='text-xl text-white hover:text-lime-500 ease-in duration-200'>Soluciones digitales</a></li>
                        <li><a href="#" className='text-xl text-white hover:text-lime-500 ease-in duration-200'>Clientes</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
