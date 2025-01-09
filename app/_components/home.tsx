import { GithubIcon, LinkedinIcon } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa6"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

const Home = () => {
  return (
    <>
      <section className="mt-5 flex items-center justify-evenly p-5">
        <div className="flex flex-col gap-8">
          <Link href="https://github.com/ramoncodevale" target="_blank">
            <GithubIcon className="text-purple-700" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ramonvalentim88"
            target="_blank"
          >
            <LinkedinIcon className="text-purple-700" />
          </Link>
          <Link href="https://wa.me/5511988872804" target="_blank">
            <FaWhatsapp fontSize={25} className="text-purple-700" />
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

        <Image
          src="programming.svg"
          alt="Image Programming"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
        />
      </section>
    </>
  )
}

export default Home
