import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Works from './pages/Works'
import Blogs from './pages/Blogs'
import Cv from './pages/Cv'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/About' element={<About />} />
                <Route path='/Works' element={<Works />} />
                <Route path='/Blogs' element={<Blogs />} />
                <Route path='/Cv' element={<Cv />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Projects' element={<Projects />} />
            </Routes>
        </Router>
    )
}

export default MyRoutes