import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <main className="flex flex-col justify-center items-center absolute inset-0">
      <h1 className="text-9xl font-extrabold text-white tracking-widest text-white">
        404
      </h1>
      <div className="bg-stone-900 text-white px-2 pb-1 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-slate-900 group active:text-slate-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-slate-900 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <Link to="/">
            <span className="relative block px-8 py-3 bg-stone-900 border border-current">
              Go Home
            </span>
          </Link>
        </a>
      </button>
    </main>
  )
}

export default NotFound