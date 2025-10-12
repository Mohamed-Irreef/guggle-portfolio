
import './App.css'
import Dummy from './components/Dummy'
import SearchPage from './pages/SearchPage'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

function App() {
 

  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<SearchPage/>}/>
        <Route path='/profile' element={<Dummy/>}/>
      </Routes>
    </Router>
   </>
  )
}

export default App
