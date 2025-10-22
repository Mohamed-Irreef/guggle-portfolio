import React, { useState } from 'react'
import SearchNav from '../components/search-page/SearchNav'
import SearchContainer from '../components/search-page/SearchContainer'

const SearchPage = ({searched,setSearched}) => {
   const [gridOpen,setGridOpen] = useState(false)
   const [historyOpen,setHistoryOpen] = useState(false)
  

   const searchContainerProps={
    historyOpen,
    setHistoryOpen,
    searched,
    setSearched
   }
   function closeAll(){
    gridOpen==true?setGridOpen(false):null;
    historyOpen==true?setHistoryOpen(false):null ; 
   }
   const close={
    closeAll,
    gridClose:()=>{return setGridOpen(false)},
    historyClose:()=>{return setHistoryOpen(false)}
   }
   
  return (
    <div className='search-page'>
        <SearchNav gridOpen={gridOpen} setGridOpen={setGridOpen} close={close} />

        <div className="search-main">
          <SearchContainer searchContainerProps={searchContainerProps}  close={close}/>
        </div>
    </div>
  )
}

export default SearchPage