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
            className="lg:w-15 sm:w-15 lg:h-15 sm:h-26 flex flex-col items-center justify-center rounded-2xl border-t-4 border-t-purple-700 bg-card p-10"
          >
            <Image
              src={skill.image}
              alt={skill.name}
              width={64}
              height={64}
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
