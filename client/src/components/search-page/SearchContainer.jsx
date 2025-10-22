import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import googleText from '../../assets/google.png'
import lens from '../../assets/lens.png'
import mic from '../../assets/mic.png'
const SearchContainer = ({searchContainerProps,close}) => {
    const {historyOpen,setHistoryOpen,setSearched,searched}=searchContainerProps;
    const navigate= useNavigate();
    const[typed,setTyped] = useState("");
    var history = [{id:1,hist:"About Mohamed Irreef",path:"about"},
        {id:2,hist:"Education",path:"education"},
        {id:3,hist:"Skills",path:"skills"},
        {id:4,hist:"Projects",path:"projects"},
        {id:5,hist:"Experiences",path:"experiences"},
        {id:6,hist:"Awards",path:"awards"},
        {id:7,hist:"Contact",path:"contact"},
        {id:8,hist:"Hire Mohamed Irreef",path:"hire"},
    ]
    const [historyList,setHistoryList] = useState(history)
    useEffect(()=>{
        
    },[historyList])

    
function searchHandler(e){
    e.preventDefault();
    setSearched(typed);
    console.log(searched);
    
    navigate(`/search-result/${typed}`);
}

    
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
            <form action="" onSubmit={searchHandler}>
                <input type="text" placeholder='Search Google or type a URL' style={{borderRadius:historyOpen&&historyList!=0?"40px 40px 0px 0px":'40px',paddingBottom:historyOpen&&historyList!=0?'20px':'15px'}} onChange={(e)=>{setTyped(e.target.value)}}/>
            </form>
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
                                        return (
                                        <li key={list.id}>
                                            <Link
                                                to={`/search-result/${list.path}`}
                                                style={{textDecoration:'none',color:'#202124'}}
                                                onClick={() => {
                                                    // close the history dropdown and set searched term before navigation
                                                    setHistoryOpen(false);
                                                    setSearched(list.path);
                                                }}
                                            >
                                                <span>
                                                    <i className="ri-history-line"></i>
                                                    {list.hist}
                                                </span>
                                            </Link>
                                            <div className="remove-history" onClick={()=>{deleteHistory(list.id)}}>
                                                <i className="ri-close-line"></i>
                                            </div>
                                        </li>
                                        )
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