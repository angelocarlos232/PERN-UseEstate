import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/SignUp'
import Signin from './pages/SignIn'
import Profile from './pages/Profile'
import About from './pages/About'
import Navbar from './components/Navbar'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    
    <BrowserRouter>
    <Toaster position ='bottom-right' toastOptions={{duration: 2000}} />
    <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/signup' element = {<Signup />} />
        <Route path='/signin' element = {<Signin />} />
        <Route path='/profile' element = {<Profile />} />
        <Route path='/about' element = {<About />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
