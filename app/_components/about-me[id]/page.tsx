const AboutMe = () => {
  return (
    <section id="about-me" className="p-10">
      <h1 className="text-center text-2xl font-bold text-purple-700">
        Sobre Mim
      </h1>
      <div className="flex flex-col items-center justify-evenly gap-8 md:flex-row">
        <p className="w-full bg-transparent p-4 text-justify text-base font-semibold leading-relaxed text-white md:w-2/3">
          Olá, sou Ramon Valentim, desenvolvedor front-end com foco em criar
          interfaces modernas e acessíveis. Trabalho com tecnologias como HTML,
          CSS, JavaScript, React e Next.js, sempre buscando aprimorar meu
          conhecimento. Tenho experiência em projetos desafiadores, como
          aplicações completas, landing pages interativas e dashboards,
          utilizando ferramentas como Tailwind CSS, ShadCN UI, ESLint e
          Prettier. Sou apaixonado por aprendizado contínuo e comprometido em
          entregar soluções que combinam design, performance e eficiência para
          atender às necessidades dos negócios.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
