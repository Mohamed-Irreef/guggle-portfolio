import React from 'react'
import WebList from '../UiComponents/WebList'
import Accordion from '../UiComponents/Accordion'
import AboutPage from './AboutPage'
const AllPage = () => {
  
  return (
    <div className='all-page'>
      {/* <div className="all-page-container">
        <span className='page-time'>About 18 results (0.67 seconds)</span>
        <br /><br />
        <WebList className="weblist-ui"/>
        <Accordion/>
        <WebList/>
      </div> */}
      <AboutPage/>
    </div>
  )
}

export default AllPage