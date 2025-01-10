import Image from "next/image"
import { Skills } from "../constants"
import { Card } from "./ui/card"

const CardsSkills = () => {
  return (
    <>
      <section className="grid grid-cols-2 items-center justify-center gap-4 p-10 sm:grid-cols-3 lg:grid-cols-4">
        {Skills.map((skill) => (
          <Card
            key={skill.id}
            className="flex flex-col items-center justify-center rounded-xl border-4 border-purple-700 bg-card p-10 sm:h-56 sm:w-48 lg:h-64 lg:w-56"
          >
            <Image
              src={skill.image}
              alt={skill.name}
              width={84}
              height={84}
              className="rounded-md"
            />
            <p className="mt-3 text-center text-sm font-medium text-white">
              {skill.name}
            </p>
          </Card>
        ))}
      </section>
    </>
  )
}

export default CardsSkills
