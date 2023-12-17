import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/Home/About/About'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <>
    
    <Routes>
      
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
    </Routes>
    
    </>
  )
}

export default App