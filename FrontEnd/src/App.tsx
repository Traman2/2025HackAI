import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import AboutPage from './pages/About'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
