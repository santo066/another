import Bookmark from "../Bookmark/Bookmark";
import propType from 'prop-types'


export default function Bookmarks({bookmarks,readingTime}){
    // console.log(bookmarks)
    return (
        
        <div className="md:h-1/3 bg-slate-300">
            <div>
                <h2>readinrtime:{readingTime}</h2>
            </div>
            <h2 className="text-center text-3xl">bookmarkd:{bookmarks.length}</h2>
            
            {
                bookmarks.map( bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
           
        </div>
    )
}
Bookmarks.propType={
    bookmarks:propType.array

}
