import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Carousel from '../components/Banner'
const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>ecomm by kriti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Carousel/>

      
      

     
      
    </div>
  )
}

export default Home
