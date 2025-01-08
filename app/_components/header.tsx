import { FolderCode } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <>
      <div className="flex flex-col border-b-2 border-secondary">
        <div className="flex items-center justify-between p-8 px-10">
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-purple-800">RV</p>
            <FolderCode className="text-purple-800" />
          </div>

          <ul className="flex items-center gap-5">
            <li>
              <Link
                className="text-base font-bold hover:text-purple-800"
                href="/"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-bold hover:text-purple-800"
                href="/"
              >
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-bold hover:text-purple-800"
                href="/"
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-bold hover:text-purple-800"
                href="/"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-bold hover:text-purple-800"
                href="/"
              >
                Contatos
              </Link>
            </li>
            <Button className="h-10 w-40 rounded-md bg-purple-800 text-white hover:bg-purple-800 hover:text-white">
              <Link
                href="/CV-RAMON-VALENTIM-FRONT-END.pdf"
                download="CV-RAMON-VALENTIM-FRONT-END.pdf"
                target="_blank"
              >
                Baixar CV
              </Link>
            </Button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
