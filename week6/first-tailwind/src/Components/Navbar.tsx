import React from "react";
import { useState } from "react";

const Navbar : React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
            <div className="px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold text-red-800">MyWebsite</div>
                <div className="hidden md:flex space-x-6 ">
                <a href="#" className="text-gray-800 hover:text-blue-500 px-3 py-2 text-md font-medium text-black">Home</a>
                <a href="#" className="text-gray-800 hover:text-blue-500 px-3 py-2 text-md font-medium text-black">About</a>
                <a href="#" className="text-gray-800 hover:text-blue-500 px-3 py-2 text-md font-medium text-black">Services</a>
                <a href="#" className="text-gray-800 hover:text-blue-500 px-3 py-2 text-md font-medium text-black">Contact</a>
                </div>
                <div className="md:hidden ">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="focus:outline-none text-gray-800 hover:text-blue-500 px-3 py-2 text-md font-medium text-black"
                >
                    ☰
                </button>
                </div>
                {isOpen && (
                <div className="md:hidden bg-white px-4 py-2 space-y-2 shadow-md  absolute right-4 top-16">
                    <a href="#" className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-md font-medium text-black">Home</a>
                    <a href="#" className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-md font-medium text-black">About</a>
                    <a href="#" className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-md font-medium text-black">Services</a>
                    <a href="#" className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-md font-medium text-black">Contact</a>
                </div>
                )}
            </div>
        </nav>
    )
};
export default Navbar;
