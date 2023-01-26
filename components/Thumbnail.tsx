import React from 'react'
import Image from 'next/image'

interface Props{
    movie: Movie
}

function Thumbnail({movie}:Props) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
        <Image src={movie.image}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        />
    </div>
  )
}

export default Thumbnail