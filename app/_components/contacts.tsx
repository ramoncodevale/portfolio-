import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si"
import { BsWhatsapp } from "react-icons/bs"
import Link from "next/link"

const Contacts = () => {
  return (
    <section className="flex flex-col items-center p-5">
      <h1 className="mb-2 text-3xl font-bold text-purple-700">Contatos</h1>
      <h2 className="mb-6 text-lg font-semibold text-white">
        Entre em contato comigo!
      </h2>

      <div className="w-full max-w-md rounded-lg bg-card p-6 shadow-lg">
        <div className="mb-4 flex items-center gap-2 rounded p-3 transition hover:bg-secondary">
          <SiGmail fontSize={30} className="text-purple-700" />
          <span className="text-white">ramonvalentim88@gmail.com</span>
        </div>
        <div className="mb-4 flex items-center gap-2 rounded p-3 transition hover:bg-secondary">
          <BsWhatsapp fontSize={30} className="text-purple-700" />
          <span className="text-white">+55 11 98887-2804</span>
        </div>
        <div className="mb-4 flex items-center gap-2 rounded p-3 transition hover:bg-secondary">
          <SiLinkedin fontSize={30} className="text-purple-700" />
          <Link
            target="_blank"
            className="text-white no-underline"
            href="https://www.linkedin.com/in/ramonvalentim88"
          >
            LinkedIn
          </Link>
        </div>
        <div className="flex items-center gap-2 rounded p-3 transition hover:bg-secondary">
          <SiGithub fontSize={30} className="text-purple-700" />
          <Link
            className="text-white no-underline"
            href="https://github.com/ramoncodevale"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contacts
