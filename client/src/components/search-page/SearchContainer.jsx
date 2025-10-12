import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import googleText from '../../assets/google.png'
import lens from '../../assets/lens.png'
import mic from '../../assets/mic.png'
const SearchContainer = ({searchContainerProps,close}) => {
    const {historyOpen,setHistoryOpen}=searchContainerProps;

    var history = [{id:1,hist:"About Mohamed Irreef"},
        {id:2,hist:"Education"},
        {id:3,hist:"Skills"},
        {id:4,hist:"Projects"},
        {id:5,hist:"Experiences"},
        {id:6,hist:"Awards"},
        {id:7,hist:"Contact"},
        {id:8,hist:"Hire Mohamed Irreef"},
    ]
    const [historyList,setHistoryList] = useState(history)
    useEffect(()=>{
        
    },[historyList])

    

    
    function deleteHistory(delIndex){
        console.log(delIndex);
        
        var updatedHistory=historyList.filter((list)=>{
            return list.id!=delIndex
        })
        setHistoryList(updatedHistory)
        console.log(history);
        setHistoryOpen(true)
    }
    
  return (
    <div className='SearchContainer' onClick={()=>{close.gridClose()}}>
        <div className="google-text-logo-big">
            <img src={googleText} alt="" />
        </div>
        <div className="search-input-box" onClick={()=>{setHistoryOpen((prev)=>!prev);close.gridClose(false)}} style={{borderRadius:historyOpen && historyList!=0?"40px 40px 0px 0px":'40px'}}>
            <i className="ri-search-line search-icon search-input-icon"></i>
            <input type="text" placeholder='Search Google or type a URL' style={{borderRadius:historyOpen&&historyList!=0?"40px 40px 0px 0px":'40px',paddingBottom:historyOpen&&historyList!=0?'20px':'15px'}}/>
            <img src={mic} alt="" className="mic search-input-icon" />
            <img src={lens} alt="" className="lens search-input-icon" />
        </div>
        {
            historyOpen && <>
            {
                historyList!=0 && <>
                <ul className="history-list">
            {
                historyList.map((list)=>{
                    return<>
                    <li key={list.id}><Link style={{textDecoration:'none',color:'#202124'}} to="/profile"><span><i className="ri-history-line"></i>{list.hist}</span></Link> <div className="remove-history" onClick={()=>{deleteHistory(list.id)}}><i className="ri-close-line"></i></div></li>
                        
                    </>
                })
            }
        </ul>
        </>
            }
            </>
        }

        {
            !historyOpen &&<>
                <div className="search-menu-box">
            <div className="">Search Website</div>
            <div className="">I'm Feeling Lucky</div>
        </div>
            </>
        }
        
    </div>
  )
}

export default SearchContainer