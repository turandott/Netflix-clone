// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import requests from '../utils/requests'
import { Movie } from '../typings'
import Row from '../components/Row'

interface Props {
  trendingNow: Movie[]
}

const Home = ({ trendingNow }: Props) => {
  console.log(trendingNow)
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner trendingNow={trendingNow}/>

        <section className="md:space-y-24">
          <Row title="trending now" movies={trendingNow}/>
          <Row title="trending now" movies={trendingNow}/>
          <Row title="trending now" movies={trendingNow}/>
          <Row title="trending now" movies={trendingNow}/>
          <Row title="trending now" movies={trendingNow}/>

        </section>
      </main>
    </div>
  )
}

export default Home


export const getServerSideProps=async ()=>{
  // const [trendingNow]=await Promise.all([ 
  // fetch(requests.fetchTrending).then((res)=>res.json()),

  // ])
  // return{
  //   props: {
  //     trendingNow: trendingNow.results ?? null,
  //   }
  // }

  const trendingNow =await fetch(requests.fetchTrending)
  const data= await trendingNow.json()
  return{
    props:{
      trendingNow: data.items
    }
  }

}
