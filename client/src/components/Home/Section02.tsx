import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useGlobalContext } from '../GlobalContext';
import Post from '../Post';

type RoverPhotos = {
    camera: any;
    earth_date: string;
    id: number;
    img_src: string;
    rover: any;
    sol: number;
}
const Section02 = () => {
    const [pics, setPics] = useState<Array<RoverPhotos>>([]);
    const { isLoading, setLoading } = useGlobalContext()
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(200);

    const getMarsPhotos = async ({ pN }: { pN?: number } = { pN: pageNumber }) => {
        try {
            const resp = await axios.get(`${import.meta.env.VITE_LOCAL_SERVER}/nasa/feed?page=${pN}`)
            console.log(resp?.data)
            setPics(prev => [...prev, ...resp?.data?.photos])
            setLoading(false)
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getMarsPhotos()
    }, [])


    React.useEffect(() => {
        window.removeEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [totalPages, pageNumber])

    const handleScroll = async () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            if (pageNumber !== totalPages) {
                console.log(pageNumber, totalPages);

                setLoading(true)
                await getMarsPhotos()
                setPageNumber((prev) => ++prev);
            }

        }
    };
    return (
        <div className='w-full min-h-screen xl:p-10 text-white'>
            <h1 className='text-4xl font-bold'>Infinite Scroll on Rover Images</h1>
            {
                pics && pics.map((p, index) => (<Post key={index} post={p} />))
            }
            {isLoading && <p>Loading more.....</p>}
        </div>
    )
}

export default Section02