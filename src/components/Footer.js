import mail from '../img/icons/email.png'
const Footer = () => {
    return <footer className="text-center pb-[5px]">
                    <p className="uppercase">&copy; Copyright 2022 by mago</p>
                    <a href="mailto:magosdk@icloud.com"><img src={mail} className='w-4 m-auto inline mr-2'/>magosdk@icloud.com</a>
          </footer>
  }
  
  export default Footer