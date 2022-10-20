import html from '../img/icons/html.png'
import css from '../img/icons/css.png'
import js from '../img/icons/js.png'
import react from '../img/icons/react.png'
import node from '../img/icons/node.png'
import git from '../img/icons/git.png'
import db from '../img/icons/db.png'
import figma from '../img/icons/figma.png'

const Skills = () => {
    return <div className="skills_inner grid grid-cols-2 gap-x-32 gap-y-12 mt-16">
        <article className='flex justify-start items-center align-end gap-4 border-b-8 border-[#660708] w-full pb-3'> <img src={html} alt="html logo" width="70px"/> <h3 className='text-center pl-20 pt-2 text-5xl'>HTML5</h3></article>
        <article className='flex justify-start items-center align-end gap-4 border-b-8 border-[#660708] w-full pb-3'> <img src={css} alt="css logo" className='pt-3' width="70x"/> <h3  className='text-center pl-20 pt-2 text-5xl'>CSS3</h3></article>
        <article className='flex justify-start items-center align-end gap-4 border-b-8 border-[#660708] w-full pb-3'> <img src={js} alt="js logo" width="70px"/> <h3  className='text-center pl-20 pt-2 text-5xl'>JAVASCRIPT</h3></article>
        <article className='flex justify-start items-center align-end gap-4 border-b-8 border-[#660708] w-full pb-3'> <img src={react} alt="react logo" width="70px"/> <h3  className='text-center pl-20 pt-2 text-5xl'>REACT</h3></article>
        <article className='flex justify-start items-center align-end gap-4 border-b-8 border-[#660708] w-full pb-3'> <img src={node} alt="node logo" width="70px"/> <h3  className='text-center pl-20 pt-2 text-5xl'>NODE JS</h3></article>
        <article className='flex justify-start items-center align-end gap-4 border-b-8 border-[#660708] w-full pb-3'> <img src={git} alt="git logo" width="70px"/> <h3  className='text-center pl-20 pt-2 text-5xl'>GIT</h3></article>
        <article className='flex justify-start items-center align-end gap-4 border-b-8 border-[#660708] w-full pb-3'> <img src={db} alt="db logo" width="70px"/> <h3  className='text-center pl-20 pt-2 text-5xl'>SQL/MONGO</h3></article>
        <article className='flex justify-start items-center align-end gap-4 border-b-8 border-[#660708] w-full pb-3'> <img src={figma} className='pl-3' alt="figma logo" width="50px"/> <h3  className='text-center pl-[97px] pt-2 text-5xl'>FIGMA</h3></article>
    </div>
  }
  
  export default Skills 