import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const pptx: NextPage = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl flex-col py-20 px-10 2xl:px0 ">
      <Head>
        <title>THE APEX MARKET PLACE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='mb-10 text-center text-3xl font-bold font-extralight text-black'>
         THE {' '} <span className='bg-gradient-to-br from-amber-400 to-zinc-600 bg-clip-text font-extrabold font-bold text-transparent underline decoration-pink-600/50'>
        APEX
        </span> {' '} NFT Market Place</h1>
        <main className='bg-rose-100 p-10 shadow-lg shadow-indigo-500/40'>
        <div className='grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 '>
          <div className='flex cursor-pointer flex-col items-center'> 
          <img className='w-44 rounded-xl bg-gradient-to-br from-purple-500 to-teal-400 object-cover p-2 transition-all duration-200 hover:scale-105 lg:h-96 lg:w-72' src="https://links.papareact.com/bdy" alt="" />

          <div className='p-5'>
              <h2 className='bg-gradient-to-br from-purple-500 to-teal-700 bg-clip-text text-center text-3xl font-bold text-transparent lg:text-3xl'>The Grand Apes</h2>
          </div>

          </div>
          </div> 
        </main>
              
    </div>
  )
}

export default pptx
