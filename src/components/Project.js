const Project = ({image, title, url, techno}) => {
    return <a href={url} target="_blank" className="projects_inner opacity-100 transition-opacity hover:opacity-70 overflow-hidden">
        <div className='project_window'>
        <div class="group relative block bg-black inner">

          <img
            alt={title}
            src={image}
            class="absolute inset-0 h-full w-full object-cover"
          />


          <div class="relative p-8 h-full">
            <p class="text-sm font-medium uppercase tracking-widest text-white">
            {techno}
            </p>
          </div>

        </div>
        </div>
      <h3 className="uppercase p-4 text-3xl"><a href={url}>{title}</a></h3> 
    </a>
  }
  
  export default Project