import axios from 'axios'

export const getImageOfTheDay =async(req,res)=>{
    try {
        const resp = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}`)
       // console.log(resp);
        const data = resp.data
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:error?.message})
    }
}

export const getFeed =async(req,res)=>{
    try {
        const page = req.query.page
        const resp = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=${process.env.NASA_KEY}`)
       // console.log(resp);
        const data = resp.data
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:error?.message})
    }
}