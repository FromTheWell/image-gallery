import React from 'react';

class Banner extends React.Component {
    render() {
            return <>
            <div className="bg-blue-600">
  <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between flex-wrap">
      <div className="w-0 flex-1 flex items-center">
        <span className="flex p-2 rounded-lg bg-blue-800">
          <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </span>
        <p className="ml-3 font-medium text-white truncate">
          <span className=" md:hidden sm:hidden">El grid de imagenes en una tablet</span>
          <span className="hidden md:inline sm:hidden"> Prueba de grid de Imagenes </span>
        </p>
      </div>
      <form action="https://github.com/FromTheWell" method="get" target="_blank" className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
        <button  type="submit" className="-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
          <span className="sr-only">Dismiss</span>
          <svg id="github-logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#fff" />
                    <rect width="400" height="400" fill="none" />
                </svg>
        </button>
      </form>
    </div>
  </div>
</div></>

    }
}

export default Banner;