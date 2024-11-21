"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActivePath(window.location.pathname);
    }
  }, []);

  return (
    <nav className="w-full bg-[#f0f4f8] text-gray-800 absolute top-10 h-28">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
        
        {/* Logo or Brand */}
        <div className="text-3xl font-bold tracking-wide hover:scale-110 transition duration-300 ease-in-out">
          <Link href="/">Alex Chavez</Link>
        </div>
        
        {/* Navigation Links */}
        <div className="space-x-8 flex">
          <Link href="/" className="relative group">
            <span
              className={`text-gray-800 transition duration-300 ease-in-out ${
                activePath === '/' ? 'text-teal-500' : 'group-hover:text-teal-500'
              }`}
            >
              Home
            </span>
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-teal-500 transition-transform duration-300 origin-left ${
                activePath === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}
            ></span>
          </Link>

          <Link href="/about" className="relative group">
            <span
              className={`text-gray-800 transition duration-300 ease-in-out ${
                activePath === '/about' ? 'text-teal-500' : 'group-hover:text-teal-500'
              }`}
            >
              About
            </span>
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-teal-500 transition-transform duration-300 origin-left ${
                activePath === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}
            ></span>
          </Link>

          <Link href="/projects" className="relative group">
            <span
              className={`text-gray-800 transition duration-300 ease-in-out ${
                activePath === '/projects' ? 'text-teal-500' : 'group-hover:text-teal-500'
              }`}
            >
              Projects
            </span>
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-teal-500 transition-transform duration-300 origin-left ${
                activePath === '/projects' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}
            ></span>
          </Link>

          <Link href="/contact" className="relative group">
            <span
              className={`text-gray-800 transition duration-300 ease-in-out ${
                activePath === '/contact' ? 'text-teal-500' : 'group-hover:text-teal-500'
              }`}
            >
              Contact
            </span>
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-teal-500 transition-transform duration-300 origin-left ${
                activePath === '/contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}
            ></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
