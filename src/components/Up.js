import { HashLink as Link } from 'react-router-hash-link';
import UpIcon from '../img/icons/up.png'

const Up = () => {
    return <Link smooth to="#top"><img className='w-24 h-24 up pointer' src={UpIcon}/></Link>
  }
  
  export default Up