
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/header/header'

function App() {
   const [bookmarks,setBookmarks]=useState([]);
   const [readingTime,setReadingTime]=useState(0);

   const hendelAddToBookmarks=Blog=>{
    const newBookmarks=[...bookmarks,Blog];
    setBookmarks(newBookmarks);
   }
   const hendelMarkAsRead=time=>{
    const newtime=readingTime+time;
    setReadingTime(newtime);
    
   }

  return (
    <>
      
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
      <Blogs hendelAddToBookmarks={hendelAddToBookmarks} hendelMarkAsRead={hendelMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
