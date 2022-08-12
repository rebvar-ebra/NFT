import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";


const NFTDropPage = () => {

  //Auth

  const connectWithMetamask=useMetamask();
  const address= useAddress()
  const disconnect = useDisconnect()
///===
  return (
    <div className='flex h-screen flex-col lg:grid  lg:grid-cols-10'>
      {/* Left */}
      <div className=' bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4'>
        <div  className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>

          <div className='bg-gradient-to-br from-yellow-400 to-purple-600 py-2 rounded-xl'>
          <img className="w-44 rounded-xl object-cover lg:h-96 lg:w-72" 
          src="https://img.freepik.com/free-vector/flat-futuristic-nft-concept_23-2148942487.jpg?w=1060&t=st=1660260369~exp=1660260969~hmac=da1cb2c1dc0c949eef8655e375f89cfb9618a8a82d91fb088a19fd15bd75e109" alt="" />


          </div>

            <div className=' space-y-2 text-center p-5'>
              <h1 className="text-4xl fon] text-white">
                NFT Market
                </h1>
                <h2 className='text-xl text-gray-300'>
                  A collection NFT created by Rebvar
                </h2>
            </div>
        </div>
      </div>

      {/* Right */}
      <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
        {/* headup */}
        <header className='flex items-center justify-between'>
          <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
            The {' '}
            <span className='font-extrabold underline decoration-pink-600/50' >
            SARDASHT
            </span>{' '}
              NFT Market place
          </h1>
          <button className='rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:py-3 lg:px-5 lg:text-base' 
          onClick={()=>(address ? disconnect(): connectWithMetamask())}>
            {address ? 'Sign Out' : 'Sign In'}
            
          </button>
        </header>
        <hr  className='my-2 border'/>
        {address && (
          <p className='text-center text-sm text-rose-500 mt-5'> you're logge in with wallet{address.substring(0,5)}...{address.substring(address.length -5)} </p>
        )}

        {/* content */}

        <div className='flex flex-1  flex-col mt-10 items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>

          <img className='w-80 object-cover pb-10 lg:h-40 ' src="https://links.papareact.com/bdy" alt="" />
          <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>
              The collection Ape Coding Club | NFT
          </h1>
          <p className='pt-2 text-xl text-green-500'>
            13/21 NFT's Claimed
          </p>
        </div>

        {/* mint Button */}
        <button className=' h-16 w-full bg-red-600 text-white rounded-full mt-10'>
          Mint NFT(0.01)
        </button>
      </div>
    </div>
  )
}

export default NFTDropPage