import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { sanityClient, urlFor } from '../../sanity'
import { Collection } from '../../typing'
import Link from 'next/link'
interface Props {
  collection: Collection
}

const NFTDropPage = ({ collection }: Props) => {

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
          <img 
          className="w-44 rounded-xl object-cover lg:h-96 lg:w-72" 
          src={urlFor(collection.previewImage).url()} alt="" />


          </div>

            <div className=' space-y-2 text-center p-5'>
              <h1 className="text-4xl fon] text-white">
                {collection.nftCollectionName}
                </h1>
                <h2 className='text-xl text-gray-300'>
                  {collection.description }
                </h2>
            </div>
        </div>
      </div>

      {/* Right */}
      <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
        {/* headup */}
        <header className='flex items-center justify-between'>
          <Link href={'/'}>
          <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
            The {' '}
            <span className='bg-gradient-to-br from-amber-400 to-zinc-600 bg-clip-text font-extrabold font-bold text-transparent underline decoration-pink-600/50' >
            SARDASHT
            </span>{' '}
              NFT Market place
          </h1>
          </Link>
         
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

          <img
           className='w-80 object-cover pb-10 lg:h-40 ' 
           src={urlFor(collection.mainImage).url()} alt="" 
           />
          <h1 
          className='text-3xl font-bold lg:text-5xl lg:font-extrabold bg-gradient-to-br from-amber-400 to-zinc-600 bg-clip-text  font-bold text-transparent underline decoration-pink-600/50'>
              {collection.title}
          </h1>
          <p 
          className='pt-2 text-xl text-green-500'>
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
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = `*[_type == "collection" && slug.current == $id][0] {
    _id,
    title,
    address,
    description,
    nftCollectionName,
    mainImage{
    asset
    },
    previewImage{
      asset
    },
    slug{
      current
    },
    creator->{
      _id,
      name,
      address,
      slug{
        current,
      },
    },
  
  }`

  const collection = await sanityClient.fetch(query, {
    id: params?.id,
  })
  if (!collection) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      collection,
    },
  }
}