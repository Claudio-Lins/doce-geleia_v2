"use client";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "phosphor-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [lgNeg, setLgNeg] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
        setLgNeg(true);
      } else {
        setColor("transparent");
        setTextColor("white");
        setLgNeg(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  function toggleMenu() {
    setNav(!nav);
  }

  return (
    <header
      style={{
        backgroundColor: color,
      }}
      className="fixed left-0 -top-1 w-full z-10 ease-in duration-300 shadow-sm"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
        <Link href="/">
          <Image
            src={lgNeg ? "/logo/lg-site.svg" : "/logo/lg-site-neg.svg"}
            alt="Doce Geleia logo"
            width={65}
            height={56}
            className={`border-[1px] border-${textColor} p-1`}
          />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <a href="/#home">Home</a>
          </li>
          <li className="p-4">
            <a href="/#sabores">Sabores</a>
          </li>
          <li className="p-4">
            <a href="/#sobre">Sobre</a>
          </li>
          <li className="p-4">
            <a href="/#contact">Contacto</a>
          </li>
        </ul>
        <div
          onClick={toggleMenu}
          className="block sm:hidden z-10 cursor-pointer"
        >
          {nav ? (
            <X size={24} color="white" />
          ) : (
            <List size={24} style={{ color: `${textColor}` }} />
          )}
        </div>
        <div
          className={`
        ${
          nav
            ? "sm:hidden absolute inset-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white"
            : "sm:hidden absolute top-0 -left-[100%] flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white"
        }
        `}
        >
          <ul>
            <li onClick={toggleMenu} className="p-4 text-4xl hover:text-gray-400">
              <Link href="/">Home</Link>
            </li>
            <li onClick={toggleMenu} className="p-4 text-4xl hover:text-gray-400">
              <a href="/#sabores">Sabores</a>
            </li>
            <li onClick={toggleMenu} className="p-4 text-4xl hover:text-gray-400">
              <Link href="/sobre">Sobre</Link>
            </li>
            <li onClick={toggleMenu} className="p-4 text-4xl hover:text-gray-400">
              <a href="/#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
