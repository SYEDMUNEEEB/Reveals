import React, { useState } from 'react'

const Blog = () => {
    const [showResults, setShowResults] = useState(true)
    const blog = () => {
        setShowResults(!showResults)
    }
 

  return (
    <>
    {
        blog &&
       <div className='blog'>
       <div className="blog-content">
           <span className='lb'>Latest Blog</span>
           <span className="filter">
               Select Filter ...
           </span>
       </div>
   </div>
    
    }
    </>
  )
}

export default Blog