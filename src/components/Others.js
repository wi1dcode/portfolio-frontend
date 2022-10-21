import Github from '../img/icons/github.png'

const Others = () => {
  return (
    <a href='https://github.com/wi1dcode' target="_blank" className='others bg-[#4B0000] w-[330px] h-[75px] box-border rounded-[50px] flex justify-start items-center pointer'>
        <img src={Github} className='pl-3'></img>
        <p className='uppercase text-3xl pl-5'>and others</p>
    </a>
  )
}

export default Others