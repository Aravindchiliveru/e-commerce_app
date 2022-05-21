import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import Footer from '../components/Footer'
import {StateProvider} from '../components/StateProvider'
import reducer, {initialState} from '../components/reducer'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>ecomm by kriti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StateProvider initialState = {initialState} reducer = {reducer} >
      <Header placeholder={undefined} />
      <Banner />
      <SmallCard />
     
        <Footer />
        </StateProvider>
     
      
    </div>
  )
}

export default Home
