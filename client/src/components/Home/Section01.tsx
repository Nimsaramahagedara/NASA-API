import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useGlobalContext } from '../GlobalContext';

type PicOfTheDay = {
    date: string;
    explanation: string;
    media_type: "video";
    service_version: string;
    title: string;
    url: string;
}
const Section01 = () => {
    const [picOfTheDay, setPic] = useState<PicOfTheDay>();
    const {isLoading, setLoading} = useGlobalContext()

    const getImageOfTheDay = async () => {
        try {
            const resp = await axios.get(`${import.meta.env.VITE_LOCAL_SERVER}/nasa`)
            console.log(resp.data);
            setPic(resp.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);

        }
    }

    useEffect(() => {
        getImageOfTheDay()
    }, [])
  return (
    <div className='w-full xl:p-10 text-white'>
    <div className='w-full px-5 mx-auto py-5'>
    <h1 className='text-xl xl:text-4xl text-center mb-5 font-semibold '>{picOfTheDay?.title}</h1>
    <p className='text-xs md:text-sm text-gray-300'>{picOfTheDay?.explanation}</p>
    </div>

    {
        picOfTheDay && picOfTheDay?.media_type === 'video' ?
            <div className='w-full mx-auto'>
                <ReactPlayer url={picOfTheDay?.url} width={'100%'} height={'100%'} style={{ aspectRatio: '16/9' }} />
            </div>

            : <img src={picOfTheDay?.url} alt="image" className='w-full mx-auto h-full aspect-video rounded-xl border' />
    }

</div>
  )
}

export default Section01