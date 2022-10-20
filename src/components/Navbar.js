import { HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {

    return <nav>
                <ul className="flex items-center justify-evenly uppercase font-medium">
                    <li><Link smooth to="#about">about</Link></li>
                    <li><Link smooth to="#skills">skills</Link></li>
                    <li><Link smooth class="logo_a" to="/">wildcode</Link></li>
                    <li><Link smooth to="#projects">projects</Link></li>
                    <li><Link smooth to="#contact">contact</Link></li>
                </ul>
            </nav>
  }

export default Navbar