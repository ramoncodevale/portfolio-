import Image from "next/image"
import { Projects } from "../constants"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import Link from "next/link"

const CardsProjects = () => {
  return (
    <section className="grid grid-cols-1 gap-6 p-10 md:grid-cols-2 lg:grid-cols-3">
      {Projects.map((project) => (
        <Card
          key={project.id}
          className="h-auto w-[400px] max-w-full rounded-2xl border-t-4 border-t-purple-700 p-4 shadow-lg"
        >
          <Image
            src={project.image}
            alt={project.name}
            width={200}
            height={200}
            className="h-[200px] w-full rounded object-cover"
          />
          <h2 className="mt-4 text-center text-lg font-bold">{project.name}</h2>
          <div className="mt-4 flex justify-around gap-3">
            <Button className="h-10 w-32 rounded-md bg-purple-700 font-bold text-white hover:bg-purple-800 hover:text-white">
              <Link
                href={project.link1}
                target="_blank"
                rel="noopener noreferrer"
              >
                Projeto
              </Link>
            </Button>
            <Button className="h-10 w-32 rounded-md bg-purple-700 font-bold text-white hover:bg-purple-800 hover:text-white">
              <Link
                href={project.link2}
                target="_blank"
                rel="noopener noreferrer"
              >
                Código
              </Link>
            </Button>
          </div>
        </Card>
      ))}
    </section>
  )
}

export default CardsProjects
