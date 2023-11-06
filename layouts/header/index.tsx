"use client"
import Image from "next/image";
import BrandSvg from "../../assets/svg/brand.svg";

export default function Header() {
    return (
        <header className="bg-primary flex items-center justify-between gap-x-10 py-4 px-5 md:px-40">
            <div className="hidden md:flex">
                <Image src={BrandSvg} alt="Logo life sound" width={90} height={30} />
            </div>
            <nav className="flex items-center text-sm font-bold">
                <ul className=" gap-x-5 hidden md:flex">
                    <li className="w-44">
                        <a className="text-quarter transition duration-300 ease-in-out hover:text-secondary" href="#como-funciona">Como funciona</a>
                    </li>
                    <li className="w-44">
                        <a className="text-quarter transition duration-300 ease-in-out hover:text-secondary" href="#como-funciona">Como funciona</a>
                    </li>
                    <li className="w-44">
                        <a className="text-quarter transition duration-300 ease-in-out hover:text-secondary" href="#como-funciona">Como funciona</a>
                    </li>
                </ul>
                
                <div className="flex md:hidden items-center gap-56">
                    <Image src={BrandSvg} alt="Logo life sound" width={80} height={20} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer text-quarter transition duration-300 ease-in-out hover:text-secondary">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </nav>
        </header>
    );
}




