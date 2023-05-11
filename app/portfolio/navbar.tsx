
















"use client"
import React, { useState, useEffect } from "react";
import {RxCross2}  from "react-icons/rx"
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let iconStyles = { fontSize: "1.5em" };

  return (
    <nav
      className={`${
        scrollPosition > 1 ? "bg-gray-900" : "bg-transparent"
      } fixed top-0 z-50 w-full`}
    >
      <div className="mx-5 py-4">
        <div className="flex justify-between relative">
          <div className="flex items-center">
            <p
              className={`${
                scrollPosition > 1 ? "text-white" : "text-gray-800"
              } text-2xl font-bold`}
            >
              <a href="/">Muhammad Irtaza</a>
            </p>
          </div>


          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className={`${
              isOpen ? "hidden" : " "
            } `} >
              
              < FaBars className={`${
                scrollPosition > 1 ? "text-white" : "text-gray-800"
              } text-2xl font-bold`}  />
            </button>
          </div>
          <div className="flex items-center absolute right-0 md:hidden">
            <button onClick={toggleMenu} className={`${
              isOpen ? "" : " hidden"
            } `} >
              
              < RxCross2 className={`${
                scrollPosition > 1 ? "text-white" : "text-gray-800"
              } text-2xl font-bold`}  />
            </button>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:justify-end `}
          >
            <a href="#home">
              <a
                className={`${
                  scrollPosition > 1 ? "text-white" : "text-gray-800"
                } block lg:inline-block lg:mt-0 mt-3 mr-4`}
                onClick={toggleMenu}
              >
                Home
              </a>
            </a>



            <a href="#about">
              <a
                className={`${
                  scrollPosition > 1 ? "text-white" : "text-gray-800"
                } block lg:inline-block lg:mt-0 mt-3 mr-4`}
                onClick={toggleMenu}
              >
                About
              </a>
            </a>

            <a href="#services">
              <a
                className={`${
                  scrollPosition > 1 ? "text-white" : "text-gray-800"
                } block lg:inline-block lg:mt-0 mt-3 mr-4`}
                onClick={toggleMenu}
              >
                What I Do
              </a>
            </a>

            <a href="#summary">
              <a
                className={`${
                  scrollPosition > 1 ? "text-white" : "text-gray-800"
                } block lg:inline-block lg:mt-0 mt-3 mr-4`}
                onClick={toggleMenu}
              >
                Resume
              </a>
            </a>
            <a href="#grid" className="">
              <a
                className={`${
                  scrollPosition > 1 ? "text-white" : "text-gray-800"
                } block lg:inline-block lg:mt-0 mt-3 mr-4`}
                onClick={toggleMenu}
              >
                Portfolio
              </a>
            </a>
            <a href="#test" className="">
              <a
                className={`${
                  scrollPosition > 1 ? "text-white" : "text-gray-800"
                } block lg:inline-block lg:mt-0 mt-3 mr-4`}
                onClick={toggleMenu}
              >
                Client
              </a>
            </a>
            <a href="#foot" >
              <a
                className={`${
                  scrollPosition > 1 ? "text-white" : "text-gray-800"
                } block lg:inline-block lg:mt-0 mt-3`}
                onClick={toggleMenu}
              >
                Contact
              </a>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
