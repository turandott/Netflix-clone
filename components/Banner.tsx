import React from 'react'
import Image from 'next/image'
import {Movie} from '../typings'
import {useState, useEffect} from 'react'
import {InformationCircleIcon, PlayIcon} from '@heroicons/react/24/solid'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'

interface Props{
    mostPopular?: Movie[]
}


function Banner({mostPopular}: Props) {
    const [movie,setMovie]=useState<Movie|null>(null)
    const [showModal, setShowModal]=useRecoilState(modalState)
    const [currentMovie, setCurrentMovie]=useRecoilState(movieState)
    
    useEffect(()=>{
        // console.log(` obj ${trendingNow.items[0]}`)

        setMovie(mostPopular[Math.floor(Math.random()*mostPopular.length)]
        )
    },[mostPopular])

    // console.log(movie)
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[64vh] lg:justify-end lg:pb-12">
        <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
            <Image src={movie?.image} 
            layout="fill"
            objectFit="cover"
            alt="cover" />
        </div>
        <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">{movie?.title||movie?.fullTitle}</h1>
        <p className="max-w-xs text-shadow-md text md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.imDbRating}</p>

        <div>
            <button className="bannerButton bg-white text-back text-black">
            <PlayIcon className="h-4 w-4 text-black md:h-7 md:w-7" />play
            </button>

            <button className="bannerButton bg-[gray]/70"
            onClick={()=>{
                setCurrentMovie(movie)
                setShowModal(true)
            }}>
                <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8"/>
                more info</button>
        </div>
    </div>
  )
}

export default Banner