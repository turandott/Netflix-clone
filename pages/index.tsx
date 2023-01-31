// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import requests from '../utils/requests'
import { Movie } from '../typings'
import Row from '../components/Row'
import useAuth from '../hooks/useAuth'
import { useRecoilValue } from 'recoil'
import { useState } from 'react'
import { modalState } from '../atoms/modalAtom'
import Modal from '../components/Modal'

interface Props {
  trendingNow: Movie[],
  mostPopular: Movie[],
  comingSoon: Movie[],
  mostPopularTVs: Movie[]

}

const Home = ({ trendingNow, mostPopularTVs, comingSoon, mostPopular }: Props) => {
  const {loading} = useAuth()
  const showModal = useRecoilValue(modalState)
  // const [showModal, setShowModal] = useState(false)

  if(loading) return null



  console.log(trendingNow)
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="" />
      </Head>
      <Header/>
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner mostPopular={mostPopular}/>

        <section className="md:space-y-24">
        <Row title="most popular" movies={mostPopular}/>
          <Row title="trending now" movies={trendingNow}/>
          <Row title="coming soon" movies={comingSoon}/>
          <Row title="popular TVs" movies={mostPopularTVs}/>
        </section>
      </main>
     {showModal&&<Modal/>}
    </div>
  )
}

export default Home


export const getServerSideProps=async ()=>{
  const [
    trendingNow,
    mostPopular,
    comingSoon,
    mostPopularTVs,
  ]=await Promise.all([ 
  fetch(requests.fetchTrending).then((res)=>res.json()),
  fetch(requests.mostPopular).then((res)=>res.json()),
  fetch(requests.comingSoon).then((res)=>res.json()),
  fetch(requests.mostPopularTVs).then((res)=>res.json()),

  ])
  return{
    props: {
      trendingNow: trendingNow.items ?? null,
      mostPopular: mostPopular.items ?? null,
      comingSoon: comingSoon.items ?? null,
      mostPopularTVs: mostPopularTVs.items ?? null,
    }
  }

}
