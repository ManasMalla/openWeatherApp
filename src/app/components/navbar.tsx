"use client";
import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className="text-white mx-8 lg:mx-20 flex justify-between py-8 md:py-10">
        <a
          className="hover:scale-105 transition duration-300"
          href="mailto:philkhanasidharth14@gmail.com"
        >
          <div className="flex gap-4 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
        </a>
        <div className="gap-14 hidden lg:flex text-white">
          <a className="" href="/">
            Home
          </a>
          <a className=" hover:text-blue-700" href="/about">
            About{" "}
          </a>
          <a
            className=" bg-blue-700 px-9 py-3 rounded-full hover:bg-blue-600 transition duration-300 -translate-y-3"
            href="https://psidh.vercel.app"
            target="_blank"
          >
            Visit My Page
          </a>
        </div>
        <svg
          onClick={toggleNav} // Add onClick event to toggle navigation
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex lg:hidden w-5 h-5 cursor-pointer" // Add cursor-pointer to indicate it's clickable
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </div>

      {isNavOpen && ( // Render the navigation links if isNavOpen is true
        <div className="flex flex-col lg:hidden text-white">
          <a className="m-6" href="/">
            Home
          </a>
          <a className="hover:text-blue-200 m-6" href="/about">
            About{" "}
          </a>
          <a
            className=" hover:text-blue-700"
            href="https://psidh.vercel.app"
            target="_blank"
          >
            Visit My Page
          </a>
        </div>
      )}
    </div>
  );
}
