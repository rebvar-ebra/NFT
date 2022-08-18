
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { sanityClient, urlFor } from '../sanity'
import { Collection } from '../typing'

interface Props {
  collection: Collection[]
}

const Home = ({ collection }: Props) => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl flex-col py-20 px-10 2xl:px0 ">
      <Head>
        <title>THE APEX MARKET PLACE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='mb-10 text-center text-3xl font-bold font-extralight text-black'>
         THE {' '} 
         <span className='bg-gradient-to-br from-amber-400 to-zinc-600 bg-clip-text font-extrabold font-bold text-transparent underline decoration-pink-600/50'>
         SARDASHT
        </span> {' '} NFT Market Place
        </h1>
      <main className="bg-slate-100 p-10 shadow-xl shadow-rose-400/20">
        <div className="grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {collection.map((data) => (
            <Link href={`/nft/${data.slug.current}`}>
              <div className="flex cursor-pointer flex-col items-center transition-all duration-200 hover:scale-105">
                <img
                  className="h-96 w-60 rounded-2xl object-cover"
                  src={urlFor(data.mainImage).url()}
                  alt=""
                />
                <div className="p-5">
                  <h2 className="text-3xl">{data.title}</h2>
                  <p className="mt-2 text-sm text-gray-400">
                    {data.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type == 'collection'] {
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

  const collection = await sanityClient.fetch(query)
  return {
    props: {
      collection,
    },
  }
}
