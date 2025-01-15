import Link from "next/link"
import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const Home = () => {
  return (
    <>
      <section
        id="about-me"
        className="flex flex-col items-center p-5 lg:flex-row lg:items-center lg:justify-evenly"
      >
        <div className="hidden lg:flex lg:flex-col lg:gap-8">
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

        <div className="flex flex-col items-center justify-center lg:flex lg:flex-row lg:justify-evenly">
          <div className="lg:flex lg:flex-col">
            <p className="text-2xl font-bold">
              <span>👋</span> Olá Meu Nome é,
            </p>
            <h1 className="text-4xl font-bold">Ramon Valentim</h1>
            <h2 className="text-4xl font-bold text-purple-700">
              Desenvolvedor <br /> Front-End
            </h2>
            <Button className="mt-5 h-10 w-full rounded-md bg-purple-700 font-bold text-white hover:bg-purple-800 hover:text-white lg:w-full">
              <Link
                href="/CV-RAMON-VALENTIM-FRONT-END.pdf"
                download="CV-RAMON-VALENTIM-FRONT-END.pdf"
                target="_blank"
              >
                Baixar CV
              </Link>
            </Button>
          </div>
        </div>
        <Avatar className="mt-5 h-[300px] w-[300px] border-4 border-purple-700 lg:h-[350px] lg:w-[350px]">
          <AvatarImage src="https://github.com/ramoncodevale.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="mt-5 flex flex-row items-center justify-center gap-8 lg:hidden lg:items-start lg:justify-start">
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
      </section>
    </>
  )
}

export default Home
