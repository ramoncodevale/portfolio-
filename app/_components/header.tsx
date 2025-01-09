import { FolderCode, MoonIcon } from "lucide-react"
import Link from "next/link"

const Header = () => {
  return (
    <>
      <div className="flex flex-col border-b-2 border-secondary">
        <div className="flex items-center justify-around p-8 px-10">
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-purple-800">RV</p>
            <FolderCode className="text-purple-800" />
          </div>

          <ul className="flex items-center gap-5">
            <li>
              <Link className="text- font-bold hover:text-purple-800" href="/">
                Início
              </Link>
            </li>
            <li>
              <Link className="text- font-bold hover:text-purple-800" href="/">
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link className="text- font-bold hover:text-purple-800" href="/">
                Habilidades
              </Link>
            </li>
            <li>
              <Link className="text- font-bold hover:text-purple-800" href="/">
                Projetos
              </Link>
            </li>
            <li>
              <Link className="text- font-bold hover:text-purple-800" href="/">
                Contatos
              </Link>
            </li>
          </ul>
          <MoonIcon className="text-purple-700" />
        </div>
      </div>
    </>
  )
}

export default Header
