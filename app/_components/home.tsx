import { GithubIcon, LinkedinIcon } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa6"
import Link from "next/link"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const Home = () => {
  return (
    <>
      <section className="flex items-center justify-evenly p-5">
        <div className="flex flex-col gap-8">
          <Link href="https://github.com/ramoncodevale" target="_blank">
            <GithubIcon
              fontSize={30}
              className="text-purple-700 hover:text-purple-800"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ramonvalentim88"
            target="_blank"
          >
            <LinkedinIcon
              fontSize={30}
              className="text-purple-700 hover:text-purple-800"
            />
          </Link>
          <Link href="https://wa.me/5511988872804" target="_blank">
            <FaWhatsapp
              fontSize={30}
              className="text-purple-700 hover:text-purple-800"
            />
          </Link>

          <Separator className="text-purple-700" />
        </div>

        <div className="flex flex-col">
          <p className="text-2xl font-bold">
            <span>👋</span> Olá Meu Nome é,
          </p>
          <h1 className="text-4xl font-bold">Ramon Valentim</h1>
          <h2 className="text-4xl font-bold text-purple-700">
            Desenvolvedor <br /> Front-End
          </h2>
          <Button className="mt-5 h-10 w-full rounded-md bg-purple-700 font-bold text-white hover:bg-purple-800 hover:text-white">
            <Link
              href="/CV-RAMON-VALENTIM-FRONT-END.pdf"
              download="CV-RAMON-VALENTIM-FRONT-END.pdf"
              target="_blank"
            >
              Baixar CV
            </Link>
          </Button>
        </div>

        <Avatar className="h-33 w-33 border-4 border-purple-700">
          <AvatarImage src="https://github.com/ramoncodevale.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>
    </>
  )
}

export default Home
