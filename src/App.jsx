import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTheme } from './context/ThemeContext'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Blogs from './pages/Blogs/Blogs'
import Jobs from './pages/jobs/jobs'
import SingleBlog from './pages/Blogs/SingleBlog'
import Compiler from "./pages/Compiler/Compiler"
import SingleJob from './pages/jobs/SingleJob'
import Courses from './pages/Courses/Courses'
import "./App.css"
import SingleCourse from './pages/Courses/SingleCourse'
import Code from './pages/Code/Code'
import SingleSubject from './pages/SingleSubject/SingleSubject'
import ProgramPage from './pages/ProgramPage/ProgramPage'
import NotFound from './pages/NotFound/NotFound'
const App = () => {
  const { isDarkMode } = useTheme();  
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:id' element={<SingleCourse />} />
          <Route path='/code' element={<Code/>} />
          <Route path='/code/:id' element={<SingleSubject/>} />
          <Route path='/code/:id/:id' element={<ProgramPage/>} />
          <Route path='/compiler' element={<Compiler />} />
          <Route path='/jobs' element={<Jobs/>} />
          <Route path='/jobs/:id' element={<SingleJob/>} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:id' element={<SingleBlog />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App