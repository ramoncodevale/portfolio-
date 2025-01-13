import AboutMe from "./_components/about-me"
import Contacts from "./_components/contacts"
import Header from "./_components/header"
import Home from "./_components/home"
import Projects from "./_components/projects"
import Skills from "./_components/skills"

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
