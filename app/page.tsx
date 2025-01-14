import AboutMe from "./_components/about-me[id]/page"
import Contacts from "./_components/contacts[id]/page"
import Header from "./_components/header"
import Home from "./_components/home[id]/page"
import Projects from "./_components/projects[id]/page"
import Skills from "./_components/skills[id]/page"

const Page = () => {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  )
}

export default Page
