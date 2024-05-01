import React from 'react'

type RoverPhotos = {
    camera: any;
    earth_date: string;
    id: number;
    img_src: string;
    rover: any;
    sol: number;
}
const Post = ({ post }: { post: RoverPhotos }) => {
    return (
        <div className='w-full bg-white/5 cursor-pointer hover:bg-white/25 border px-5 py-5 my-5'>
            <div className='flex items-start flex-col justify-start gap-0'>
              <span>Camera: {post?.camera?.full_name}</span>
              <span>Earth Day: {post?.earth_date}</span>
              <span>Rover Name: {post?.rover?.name}</span>
               
            </div>
            <img src={post.img_src} alt="image" className=' mx-auto h-full aspect-video rounded-xl border my-5' />
        </div>
    );
}


export default Post