import { useEffect, useState } from "react"
import About from "../components/About"
import Container from "../components/Container"
import Footer from '../components/Footer'
import Navbar from "../components/Navbar"
import Skills from "../components/Skills"
import Title from "../components/Title"
import Window from "../components/Window"
import Project from "../components/Project"
import Up from "../components/Up"
import Contact from "../components/Contact"

// Projects images
import Pokemon from "../img/projects/pokemon.png"
import Todolist from "../img/projects/todolist.png"



const Home = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };

      window.addEventListener('scroll', toggleVisible);


    return (
      <>
        <Navbar/>
      <main className="flex flex-wrap">
        <header>
          <Container>
            <Window/>
          </Container>
        </header>
          <Container>
            {visible ? <Up/> : null}
            <section className="about" id="about">
              <Title>About</Title>
              <About/>
            </section>
            <section className="skills" id="skills">
              <Title>Skills</Title>
              <Skills/>
            </section>
            <section className="projects" id="projects">
              <Title>Projects</Title>
              <div className="flex flex-wrap justify-around text-center">
              <Project url="https://pokkemon.netlify.com/" image={Pokemon} title="Random Pokemon" techno="React / API"/>
              <Project url="https://wildapp.netlify.app/"image={Todolist} title="To do list" techno="React"/>
              <Project/>
              <Project/>
              </div>
            </section>
            <section className="contact" id="contact">
              <Contact/>
            </section>
          </Container>
      </main>
      <Footer/>
      </>
    )
  }
  
  export default Home