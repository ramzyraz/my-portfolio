import About from '@/components/about'
import Experience from '@/components/experience'
import Footer from '@/components/footer'
import Main from '@/components/main'
import Nav from '@/components/nav'
import Projects from '@/components/projects'
import Routes from '@/components/routes'
import ToggleTheme from '@/components/toggle-theme'

export default function Home() {
  return (
    <>
      <Nav />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Footer />
      <Routes />
      <ToggleTheme />
    </>
  )
}
