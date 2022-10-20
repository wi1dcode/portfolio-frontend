import about_logo from '../img/about.png'

const About = () => {
    return <article className='about_inner flex items-center'>
        <img src={about_logo} className='w-3/6' alt='About logo'/>
        <p className='uppercase w-3/6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </article>
  }
  
export default About