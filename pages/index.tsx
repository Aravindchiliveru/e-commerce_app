import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>ecomm by kriti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header placeholder={undefined} />
      <Banner />
      <SmallCard />
     
      

     
      
    </div>
  )
}

export default Home
