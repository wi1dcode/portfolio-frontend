import { useEffect, useState } from "react"
import About from "../components/About"
import Container from "../components/Container"
import Footer from '../components/Footer'
import Navbar from "../components/Navbar"
import Skills from "../components/Skills"
import Title from "../components/Title"
import Window from "../components/Window"
import Project from "../components/Project"

// Projects images
import pokemon from "../img/projects/pokemon.png"
import todolist from "../img/projects/todolist.png"



const Home = () => {

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
              <Project url="https://pokkemon.netlify.com/" image={pokemon} title="Random Pokemon" techno="React / API"/>
              <Project url="https://wildapp.netlify.app/"image={todolist} title="To do list" techno="React"/>
              <Project/>
              <Project/>
              </div>
            </section>
            <section className="contact" id="contact">

            </section>
          </Container>
      </main>
      <Footer/>
      </>
    )
  }
  
  export default Home