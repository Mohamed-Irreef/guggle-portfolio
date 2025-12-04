import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import guggleText from '../../assets/guggle.png'
import HirePopup from './HirePopup'
const SearchContainer = ({searchContainerProps,close}) => {
    const {historyOpen,setHistoryOpen,setSearched,searched}=searchContainerProps;
    const navigate= useNavigate();
    const[typed,setTyped] = useState(() => {
        try {
            const stored = localStorage.getItem('searched');
            const storedValue = stored ? JSON.parse(stored) : '';
            return searched || storedValue || '';
        } catch {
            return searched || '';
        }
    });
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
    const [showHirePopup,setShowHirePopup] = useState(false)
    const hireRecipient = "mdirreef@gmail.com"; // target email (confirmed)
    useEffect(()=>{
        setTyped(searched || "");
    },[searched])

    // debounce typed -> setSearched to avoid excessive API calls
    useEffect(()=>{
        const id = setTimeout(()=>{
            if(typed!==undefined) setSearched(typed);
        },600);
        return ()=>clearTimeout(id);
    },[typed, setSearched])

    
    function searchHandler(e){
    e.preventDefault();
    setSearched(typed);

    const customEnabled = JSON.parse(localStorage.getItem("customSearch") || 'false');
    if(customEnabled){
        // enforce daily quota
        const check = incrementCustomSearchCount();
        if(check.blocked){
            try{ localStorage.setItem('customSearch', JSON.stringify(false)) }catch{ void 0; }
            showDomToast("This application reached maximum today's custom search requests. Custom Search disabled for next 24 hours.");
            return;
        }
        navigate(`/custom-search-result/${typed}`);
    } else {
        navigate(`/search-result/${typed}`);
    }
}

// helpers for custom search usage tracking (localStorage)
function getCustomSearchMeta(){
    try{
        const raw = localStorage.getItem('customSearchMeta');
        if(!raw) return {count:0, blockedUntil:0};
        const meta = JSON.parse(raw);
            if (meta.blockedUntil && Date.now() >= meta.blockedUntil) {
                const cleared = { count: 0, blockedUntil: 0 };
                localStorage.setItem('customSearchMeta', JSON.stringify(cleared));
                try { localStorage.setItem('request', '0'); } catch { void 0; }
                return cleared;
        }
        return {count: meta.count || 0, blockedUntil: meta.blockedUntil || 0};
    }catch{
        return {count:0, blockedUntil:0};
    }
}

function incrementCustomSearchCount(){
    const meta = getCustomSearchMeta();
    meta.count = (meta.count || 0) + 1;
        if (meta.count > 30) {
            meta.blockedUntil = Date.now() + 24 * 60 * 60 * 1000;
            meta.count = 30;
            localStorage.setItem('customSearchMeta', JSON.stringify(meta));
            try { localStorage.setItem('request', String(meta.count)); } catch { void 0; }
            return { blocked: true, meta };
    }
    localStorage.setItem('customSearchMeta', JSON.stringify(meta));
        try { localStorage.setItem('request', String(meta.count)); } catch { void 0; }
    return {blocked:false, meta};
}

// small DOM toast for this component (keeps it consistent when other components are not mounted)
function showDomToast(text){
    try{
        const wrap = document.createElement('div');
        wrap.className = 'toast toast-success';
        wrap.setAttribute('role','status');
        wrap.innerHTML = `<div class="toast-inner"><div class="toast-icon"><div class="toast-icon-symbol on">✓</div></div><div class="toast-body"><div class="toast-message">${text}</div></div><button class="toast-dismiss">×</button><div class="toast-progress"></div></div>`;
        document.body.appendChild(wrap);
        const remove = () => { if(wrap.parentNode) wrap.parentNode.removeChild(wrap) };
        wrap.querySelector('.toast-dismiss')?.addEventListener('click', remove);
        setTimeout(()=>{ wrap.classList.add('toast-exit'); setTimeout(remove, 260); }, 3200);
    }catch{ void 0; }
}

    
    function deleteHistory(delIndex){

        var updatedHistory=historyList.filter((list)=>{
            return list.id!=delIndex
        })
        setHistoryList(updatedHistory)

        setHistoryOpen(true)
    }
    
    return (
        <div className='SearchContainer' onClick={()=>{close.gridClose()}}>
            <div className="guggle-text-logo-big">
                <img src={guggleText} alt="" />
            </div>

            <div
                className="search-input-box"
                onClick={()=>{setHistoryOpen((prev)=>!prev);close.gridClose(false)}}
                style={{borderRadius:historyOpen && historyList!=0?"40px 40px 0px 0px":'40px'}}
            >
                <i className="ri-search-line search-icon search-input-icon"></i>

                <form action="" onSubmit={searchHandler}>
                    <input
                        type="text"
                        value={typed}
                        placeholder='Search Guggle or type a URL'
                        style={{borderRadius:historyOpen&&historyList!=0?"40px 40px 0px 0px":'40px',paddingBottom:historyOpen&&historyList!=0?'20px':'15px'}}
                        onChange={(e)=>{setTyped(e.target.value);}}
                    />
                </form>
            </div>

            {historyOpen && (
                <>
                    {historyList && historyList.length > 0 && (
                        <ul className="history-list">
                            {historyList.map((list) => {
                                const isHire = (list.path && list.path.toLowerCase()==='hire') || (list.hist && list.hist.toLowerCase().includes('hire'));
                                return (
                                    <li key={list.id}>
                                        {isHire ? (
                                            <button
                                                type="button"
                                                onClick={(e)=>{ e.preventDefault(); setHistoryOpen(false); setShowHirePopup(true); }}
                                                style={{background:'transparent',border:'none',padding:0,margin:0,textAlign:'left',cursor:'pointer',color:'#202124'}}
                                            >
                                                <span>
                                                    <i className="ri-briefcase-line" style={{marginRight:10}}></i>
                                                    {list.hist}
                                                </span>
                                            </button>
                                        ) : (
                                            <Link
                                                to={`/search-result/${list.path}`}
                                                style={{textDecoration:'none',color:'#202124'}}
                                                onClick={() => {
                                                    setHistoryOpen(false);
                                                    setSearched(list.path);
                                                }}
                                            >
                                                <span>
                                                    <i className="ri-history-line"></i>
                                                    {list.hist}
                                                </span>
                                            </Link>
                                        )}

                                        <div className="remove-history" onClick={()=>{deleteHistory(list.id)}}>
                                            <i className="ri-close-line"></i>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </>
            )}

            {!historyOpen && (
                <>
                    <div className="search-menu-box">
                        <div className="">Search Website</div>
                        <div className="">I'm Feeling Lucky</div>
                    </div>
                </>
            )}

            {showHirePopup && (
                <HirePopup
                    recipientEmail={hireRecipient}
                    onClose={() => setShowHirePopup(false)}
                />
            )}
        </div>
    )
}

export default SearchContainer