import React from 'react'
import SearchResultNav from '../SearchResultNav'
import underconstruction from '../../../assets/construction.gif'
const VideosPage = () => {
  return (
    <div className='search-page-loading'>
          <div className='dummy'>
                <div>
                    <img src={underconstruction} alt="" />
                </div>
                <div className="" style={{color:'red',fontSize:'18px',fontWeight:'500'}}>Videos Page</div>
                <h2 style={{textAlign:'center'}}>Coming Soon</h2>
                
            </div>
         </div>
  )
}

export default VideosPage