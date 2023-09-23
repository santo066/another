import { FaBeer, FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
export default function Blog({blog,hendelAddToBookmarks,hendelMarkAsRead}){
    const {title,cover,author_img,author,reading_time,posted_date,hashtags}=blog
    return (
        <div className='mb-20 space-y-3'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture al the title ${title}`} />
            <div className='flex justify-between mb-5'>
                <div className='flex'>
                    <img className='w-16 rounded-full' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
            
                </div>
                <div>
                    <span>{reading_time}min read</span>
                    <button onClick={()=>hendelAddToBookmarks(blog)} className='ml-2 text-2xl from-neutral-500'><FaBookmark></FaBookmark></button>
                </div>
            </div>

            <h2 className='text-4xl'>{title}</h2>
           <p>
           {
                hashtags.map(hash=><span><a href="">#{hash}</a></span>)
            }
           </p>

            <button onClick={()=>hendelMarkAsRead(reading_time)} className='text-purple-500 font-bold underline'>Mark as read</button>
        </div>
    )
};

Blog.PropTypes={
    blog:PropTypes.object.isRequired
}