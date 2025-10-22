
import './App.css'
import Dummy from './components/Dummy'
import SearchPage from './pages/SearchPage'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import SearchResult from './pages/SearchResult'

import { useState } from 'react'

function App() {
 
const [searched,setSearched] = useState("")
console.log("App.jsx (searched):",searched);

  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<SearchPage  searched={searched} setSearched={setSearched}/>}/>
        <Route path='/profile' element={<Dummy/>}/>
        <Route path='/search-result/:page' element={<SearchResult searched={searched} setSearched={setSearched}/>}/>

        {/* <Route path='/images' element={<ImagesPage />}/>
        <Route path='/videos' element={<VideosPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/news' element={<NewsPage/>}/> */}
        {/* <Route path='' element={}/>
        <Route path='' element={}/> */}

      </Routes>
    </Router>
   </>
  )
}

export default App
