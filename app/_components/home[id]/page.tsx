import Link from "next/link"
import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const Home = () => {
  return (
    <>
      <section id="home" className="flex items-center justify-evenly p-10">
        <div className="flex flex-col gap-8">
          <Link href="https://github.com/ramoncodevale" target="_blank">
            <FaGithub
              fontSize={30}
              className="text-purple-700 hover:text-purple-800"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ramonvalentim88"
            target="_blank"
          >
            <FaLinkedin
              fontSize={30}
              className="text-purple-700 hover:text-purple-800"
            />
          </Link>
          <Link href="https://wa.me/5511988872804" target="_blank">
            <FaWhatsappSquare
              fontSize={30}
              className="text-purple-700 hover:text-purple-800"
            />
          </Link>
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

        <Avatar className="h-[350px] w-[350px] border-4 border-purple-700">
          <AvatarImage src="https://github.com/ramoncodevale.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>
    </>
  )
}

export default Home
