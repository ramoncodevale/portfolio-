"use client"

import { MenuIcon, X } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { useState } from "react"

const Header = () => {
  const [menu, setMenu] = useState(false)

  function handleOpenMenu() {
    setMenu(true)
  }

  function handleCloseMenu() {
    setMenu(false)
  }

  function handleLinkClick() {
    setMenu(false)
  }

  return (
    <div className="flex flex-col border-b-2 border-secondary">
      <div className="flex h-20 items-center justify-between px-10 lg:px-28">
        <div className="flex w-full items-center justify-between gap-2">
          <p className="text-xl font-bold text-purple-700">RV</p>
          {menu ? (
            <Button
              className="bg-purple-700 text-white hover:bg-purple-800 lg:hidden"
              onClick={handleCloseMenu}
            >
              <X fontSize={30} />
            </Button>
          ) : (
            <Button
              className="bg-purple-700 text-white hover:bg-purple-800 lg:hidden"
              onClick={handleOpenMenu}
            >
              <MenuIcon fontSize={30} />
            </Button>
          )}
        </div>

        <ul className="hidden items-center gap-5 lg:flex">
          <li>
            <Link href="#home" onClick={handleLinkClick}>
              <span className="font-bold text-white hover:text-purple-700">
                Início
              </span>
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={handleLinkClick}>
              <span className="font-bold text-white hover:text-purple-800">
                Sobre
              </span>
            </Link>
          </li>
          <li>
            <Link href="#skills" onClick={handleLinkClick}>
              <span className="font-bold text-white hover:text-purple-700">
                Habilidades
              </span>
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={handleLinkClick}>
              <span className="font-bold text-white hover:text-purple-700">
                Projetos
              </span>
            </Link>
          </li>
          <li>
            <Link href="#contacts" onClick={handleLinkClick}>
              <span className="font-bold text-white hover:text-purple-700">
                Contatos
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {menu && (
        <div className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-secondary lg:hidden">
          <Button
            className="absolute right-5 top-5 bg-purple-700 text-white hover:bg-purple-800"
            onClick={handleCloseMenu}
          >
            <X fontSize={30} />
          </Button>

          <ul className="flex w-80 flex-col items-center gap-5 rounded-lg bg-card p-6 shadow-md">
            <li>
              <Link href="#home" onClick={handleLinkClick}>
                <span className="font-bold text-white hover:text-purple-700">
                  Início
                </span>
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={handleLinkClick}>
                <span className="font-bold text-white hover:text-purple-800">
                  Sobre
                </span>
              </Link>
            </li>
            <li>
              <Link href="#skills" onClick={handleLinkClick}>
                <span className="font-bold text-white hover:text-purple-700">
                  Habilidades
                </span>
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={handleLinkClick}>
                <span className="font-bold text-white hover:text-purple-700">
                  Projetos
                </span>
              </Link>
            </li>
            <li>
              <Link href="#contacts" onClick={handleLinkClick}>
                <span className="font-bold text-white hover:text-purple-700">
                  Contatos
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header
