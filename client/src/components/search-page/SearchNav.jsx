import React from 'react'
import { Link } from "react-router-dom";
import grid from '../../assets/grid.png'
import myprofile from '../../assets/myprofile.jpg'

import g from '../../assets/g-logo.webp'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import gmail from '../../assets/gmail.png'
import youtube from '../../assets/youtube.png'
import map from '../../assets/map.png'

const SearchNav = ({gridOpen, setGridOpen,close}) => {
 
  return (
    <div className='search-nav' onClick={()=>{close.closeAll()}}>

        <div className="search-nav-top">
            <i className="ri-gallery-view-2"></i>
        </div>
        <div className="search-nav-bottom">
            <Link to="/email" className='email-link'>Email</Link>
            <Link to="/github" className='github-link'>GitHub</Link>
            <img src={grid} alt="grid" className='grid' onClick={()=>{setGridOpen((prev)=>!prev)}}/>

            <img src={myprofile} alt="profile" className='myprofile'/>

            {
              gridOpen&&<>
                <div className="grid-open">
                <div className="grid-menus">
                  <div className="grid-row1-menus">
                    <div className="grid-icon-box"> <img src={g} alt="" /><span className='grid-icon-name'>Google</span></div>
                    <div className="grid-icon-box"> <img src={linkedin} alt="" /><span className='grid-icon-name'>LinkedIn</span></div>
                    <div className="grid-icon-box"> <img src={github} alt="" /><span className='grid-icon-name'>GitHub</span></div>
                  </div>
                  <div className="grid-row2-menus">
                    <div className="grid-icon-box"> <img src={youtube} alt="" className='ytube-icon' /><span className='grid-icon-name'>Youtube</span></div>
                    <div className="grid-icon-box"> <img src={gmail} alt="" className='gmail-icon'/><span className='grid-icon-name'>Gmail</span></div>
                    <div className="grid-icon-box"> <img src={map} alt="" className='map-icon'/><span className='grid-icon-name'>Map</span></div>
                  </div>
                </div>
            </div>
              </>
            }
        </div>
     
    </div>
  )
}

export default SearchNav