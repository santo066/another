
import propType from 'prop-types'

export default function Bookmark({bookmark}){
    const {title}=bookmark;
    console.log(bookmark)
    return(
        <div className=' p-4 m-4'>
            <h2 className='text-2xl bg-slate-100 rounded-xl'>{title}</h2>
        </div>
    )
}

Bookmark.propType={
    bookmark:propType.object
}