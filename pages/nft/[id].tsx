import React,{useEffect,useState} from 'react'
import { useAddress, useDisconnect, useMetamask ,useNFTDrop} from "@thirdweb-dev/react";
import { sanityClient, urlFor } from '../../sanity'
import { Collection } from '../../typing'
import Link from 'next/link'
import { BigNumber } from 'ethers';
import toast, { Toaster } from 'react-hot-toast'


interface Props {
  collection: Collection
}

const NFTDropPage = ({ collection }: Props) => {
  const [claimedSupply,setClaimedSupply] = useState<number>(0);
  const [totalSupply,setTotalSupply] = useState<BigNumber>();
  const [priceInEth,setPriceInEth]= useState("")
  const [loading,setLoading] = useState<boolean>(true);
  const nftDrop = useNFTDrop(collection.address)

  //Auth

  const connectWithMetamask=useMetamask();
  const address= useAddress()
  const disconnect = useDisconnect()
  
///===

  useEffect (()=>{
    if(!nftDrop) return;
    const fetechPrice = async()=>{
      const claimCOnditions = await nftDrop.claimConditions.getAll();

      setPriceInEth(claimCOnditions?.[0].currencyMetadata.displayValue)
    }
    fetechPrice()
  },[nftDrop])

  useEffect(()=>{
    if(!nftDrop) return;
    const fetchNFTDropData = async()=>{
      setLoading(true);

      const claimed = await nftDrop.getAllClaimed();
      const total= await nftDrop.totalSupply();

      setClaimedSupply(claimed.length);
      setTotalSupply(total);

      setLoading(false);
    }
    fetchNFTDropData()

  },[nftDrop])

  /* mint function */
    const mintNft =()=>{
      if (!nftDrop || !address) return
      const quantity = 1
      setLoading(true);
      const notify = toast.loading('Minting...',
      {
        style: {
          background: 'white',
          color: 'green',
          fontWeight: 'bolder',
          fontSize: '17px',
          padding: '20px',
        }
      }
       )

       nftDrop?.claimTo(address, quantity).then(async (tx) => {
        const receipt = tx[0].receipt;
        const claimedTokenId = tx[0].id;
        const claimedNFT = await tx[0].data();
  
        toast('HOORAY.. You Successfully Minted!!', {
          duration: 8000,
          style: {
            background: 'green',
            color: 'white',
            fontWeight: 'bolder',
            fontSize: '17px',
            padding: '20px',
          }
        })
  
      }).catch(err => {
        console.log(err);
        toast('Whoops... Something went wrong!.',{
          style: {
            background: 'red',
            color: 'white',
            fontWeight: 'bolder',
            fontSize: '17px',
            padding: '20px',
          }
        })
      }).finally(() => {
        setLoading(false);
        toast.dismiss(notify);
      })
  
    }
  
  
  return (
    <div className='flex h-screen flex-col lg:grid  lg:grid-cols-10'>
      <Toaster position='bottom-center' />
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
          
          {loading ? (
            <p 
            className='animate-bounce pt-2 text-xl text-green-500'>
                Loading Supply count ...
            </p>
          ):(
            <p 
          className='pt-2 text-xl text-green-500'>
            {claimedSupply}/{totalSupply?.toString()} NFT's Claimed
          </p>
          )}

          {loading &&(
            <img  className='h-80 w-80 object-contain'
             src="https://media4.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.gif?cid=790b7611e551b8d27c4fe0916c4cb61b539b521126b3dd02&rid=giphy.gif&ct=g" alt="" />
          ) }
          
          
        </div>

        {/* mint Button */}
        <button onClick={mintNft}  disabled={loading || claimedSupply===totalSupply?.toNumber() || !address} 
        className=' h-16 w-full bg-red-600 text-white rounded-full mt-10 disabled:bg-gray-400'>
         
         {loading ? (
              <>Loading</>
            ) : claimedSupply == totalSupply?.toNumber() ? (
              <>Sold Out</>
            ) : !address ? (
              <>Sign in to Mint</>
            ) : (
              <>
                <span className='font-bold'>
                  Mint NFT ({priceInEth}) ETH
                </span> </>
            )}
          
        
        {/* mint comment  */}
         
         
         
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