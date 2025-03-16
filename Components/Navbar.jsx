"use client"; 
import React from "react";
import { useRouter } from "next/navigation"; 

const Navbar = () => {
    const router = useRouter();

    const handleLoginClick = () => {
        router.push("/login");
    };

    const handleRegisterClick = () => {
        router.push("/register");
    };

    return (
        <div className="flex py-3 justify-between items-center px-6 bg-white shadow-md">
            <h1 className="text-lg font-semibold">Procare PMS</h1>
            <ul className="flex gap-8 text-m">
                <li className="cursor-pointer hover:text-blue-500">Home</li>
                <li className="cursor-pointer hover:text-blue-500">About</li>
                <li className="cursor-pointer hover:text-blue-500">Features</li>
                <li className="cursor-pointer hover:text-blue-500">Contact</li>
            </ul>
            <div className="flex gap-4">
                <button 
                    onClick={handleLoginClick} 
                    className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-100 transition">
                    Login
                </button>
                <button 
                    onClick={handleRegisterClick} 
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                    Register
                </button>
            </div>
        </div>
    );
};

export default Navbar;
