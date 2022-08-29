import React from 'react';

const Footer = () => {
    return (  
        <footer className="p-4 rounded-lg shadow md:px-6 md:py-8 bg-gray-800">
            <div className="sm:flex sm:items-center sm:justify-between md:justify-evenly">
                <span className="flex items-center mb-4 sm:mb-0">
                    <img src="http://meabhy.lpdthemesdemo.com/wp-content/uploads/2020/08/logo-1.png" className="mr-3 h-8 bg-white" alt="Flowbite Logo"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MEABHY</span>
                </span>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <span className="mr-4 hover:underline md:mr-6  text-xl">About</span>
                    </li>
                    <li>
                        <span className="mr-4 hover:underline md:mr-6 text-xl">Privacy Policy</span>
                    </li>
                    <li>
                        <span className="hover:underline text-xl">Contact</span>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <span className="block text-gray-500 sm:text-center dark:text-gray-400 text-xl">© 2022 <span className="hover:underline text-xl">MEABHY</span>. All Rights Reserved.
            </span>
        </footer>
    );
};

export default Footer;