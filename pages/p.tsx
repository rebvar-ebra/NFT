import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className=" min-h-screen bg-white dark:bg-black ">
      <div className='to-blue-400[0.35] dark:to-blue-400[0.25] bg-gradient-to-tr from-purple-400/[0.35] dark:from-purple-400/[0.15]'>
      
        <div className='mx-auto flex min-h-screen max-w-7xl flex-col p-8'  > 
        <header className='z-50 flex flex-col items-center justify-between border-b border-pink-400/[0.15] pb-8 md:flex-row md:pb-10'>
        <h1 className='mb-10 text-center text-3xl font-bold font-extralight text-black'>
         THE {' '} <span className='bg-gradient-to-br from-amber-400 to-zinc-600 bg-clip-text font-extrabold font-bold text-transparent underline decoration-pink-600/50'>
           APEX
        </span> {' '} NFT Market Place</h1>
        <div className='mt-6 flex flex-col items-center space-y-4 md:mt-0 md:flex-row md:space-y-0 md:space-x-5'>
          <div className='flex items-center space-x-5'>
            <button >
            <div className='group relative'>
              <div className='animate-tilt group-hover:duration-600 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur transition duration-1000 group-hover:opacity-70'>

              </div>
              <div className='relative flex items-center space-x-4 divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none text-black transition duration-200 hover:text-purple-500 dark:bg-black dark:text-white dark:hover:text-purple-300'>
                <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' fill="none" viewBox='0 0 24 24 ' stroke='currentColor' strokeWidth="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                </svg>
                <span className="font-poppins text-lg capitalize tracking-wider text-black transition duration-200 group-hover:text-purple-500 dark:text-white dark:group-hover:text-purple-300">
                    Sign In
                </span>
              </div>
            </div>
            </button>
            <button>
              <div className='group relative'>
                <div className='animate-tilt group-hover:duration-600 absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur transition duration-1000 group-hover:opacity-100"' >

                </div>
                <div className="relative flex items-center space-x-4 divide-gray-600 rounded-full bg-white p-4 leading-none text-blue-500 transition duration-200 hover:text-purple-500 dark:bg-black dark:text-blue-200 dark:hover:text-purple-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" className="h-6 w-6 text-yellow-500 dark:text-yellow-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>

              </div>
            </button>

          </div>

        </div>
        </header>
        <div className='grid flex-grow items-center gap-0 pb-12 md:grid-cols-2 md:gap-24 md:pb-48 md:pt-24'>
          <div className='col-span-1 mb-12 mt-16 flex flex-col space-y-6 rounded-xl text-center md:mb-0 md:text-left lg:justify-center lg:space-y-2'>
          <h1 className="font-poppins text-3xl font-extralight dark:text-white md:max-w-md md:text-6xl">The best <span className="font-bold text-purple-500">NFTS</span> in one place</h1>
          </div>
          <div className='col-span-1'>
              <div className='grid grid-cols-3 gap-3 md:gap-6'>
                <div className='flex flex-col gap-3 pt-24 md:gap-6'>
                  <div className='origin-top-left rounded-xl bg-gradient-to-bl from-pink-600/25 to-blue-400/25 p-1.5 transition duration-500 ease-in-out hover:-translate-y-1'>
                  <h1>rebvar</h1>
                  <h2>ebrahimi</h2>
                  </div>
                  <div></div>
                </div>
                <div className='flex flex-col gap-3 pt-12 md:gap-6'></div>
                <div className='flex flex-col gap-3 md:gap-6'></div>
                
              </div>
          </div>

        </div>
        </div>
      </div>
      <Head>
        <title>THE APEX MARKET PLACE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        {/* <main className='bg-rose-100 p-10 shadow-lg shadow-indigo-500/40'>
        <div className='grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 '>
          <div className='flex cursor-pointer flex-col items-center'> 
          <img className='w-44 rounded-xl bg-gradient-to-br from-purple-500 to-teal-400 object-cover p-2 transition-all duration-200 hover:scale-105 lg:h-96 lg:w-72' src="https://links.papareact.com/bdy" alt="" />

          <div className='p-5'>
              <h2 className='bg-gradient-to-br from-purple-500 to-teal-700 bg-clip-text text-center text-3xl font-bold text-transparent lg:text-3xl'>The Grand Apes</h2>
          </div>

          </div>
          </div> 
        </main> */}
              
    </div>
  )
}

export default Home
