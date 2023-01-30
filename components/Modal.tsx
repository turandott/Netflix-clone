import React, {useState, useEffect} from 'react'
import MuiModal from '@mui/material/Modal'
import {useRecoilValue, useRecoilState} from 'recoil'
import {modalState, movieState} from '../atoms/modalAtom'
import {HandThumbUpIcon, PlayIcon, PlusIcon, SpeakerWaveIcon, SpeakerXMarkIcon, XMarkIcon} from '@heroicons/react/24/solid'
import {Movie, Element} from '../typings'
import ReactPlayer from 'react-player/lazy'


function Modal() {
    const [showModal, setShowModal] = useRecoilState(modalState)
    const [movie, setMovie] = useRecoilState(movieState)
    const [trailer, setTrailer] = useState("")
    const [muted, setMuted] = useState(false)
    const handleClose = () => {
        setShowModal(false)
    }
    console.log(movie)

    useEffect(() => {
        if (!movie) return

        async function fetchMovie() {
            const data = await fetch(
                `https://imdb-api.com/en/API/YouTubeTrailer/${
                    process.env.NEXT_PUBLIC_API_KEY
                }/${movie.id}`
            ).then((response) => response.json())

            if (data?.videoUrl) {
                console.log(data.videoUrl)
                const url = data.videoUrl
                setTrailer(url)
            }
        
        }

        fetchMovie()
    }, [movie])


    return (
        <MuiModal
            open={showModal}
            onClose={handleClose}
            className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide">
            <div>
                <button onClick={handleClose}
                        className="modalButton absolute right-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]">
                    <XMarkIcon className="h-6 w-6"/>
                </button>

                <div className="relative pt-[56.25%]">
                    <ReactPlayer
                        url={trailer}
                        width="100%"
                        height="100%"
                        style={{position: 'absolute', top: '0', left: '0'}}
                        playing
                        muted={muted}
                    />
                    <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
                        <div className="flex space-x-2">
                            <button
                                className="flex items-center gap-x-2 rounded bg-white text-black px-8 text-xl font-bold transition hover:bg-[#e6e6e6]">
                                <PlayIcon className="h-7 w-7 text-black"/>
                                Play
                            </button>

                            <button className="modalButton">
                                <PlusIcon className="h-7 w-7"/>
                            </button>

                            <button className="modalButton">
                                <HandThumbUpIcon className="h-7 w-7"/>
                            </button>
                        </div>
                        <button className="modalButton" onClick={() => setMuted(!muted)}>
                            {muted ? (
                                <SpeakerXMarkIcon className="h-6 w-6"/>
                            ) : (
                                <SpeakerWaveIcon className="h-6 w-6"/>
                            )}
                        </button>
                    </div>
                </div>
                <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {movie!.imDbRating * 10}% Match
              </p>
              <p className="font-light">
                {movie?.fullTitle}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
          
            </div>
          </div>
        </div>


            </div>
        </MuiModal>
    )
}

export default Modal