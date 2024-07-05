
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Layout/Navbar.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Pages/Home.jsx';
import About from './components/Pages/About.jsx';
import Gallery from './components/Pages/Gallery.jsx';
import Contact from './components/Pages/Contact.jsx';
import Register from './components/Pages/Register.jsx';
import Show from './components/Pages/Show.jsx';
import Update from './components/Pages/Update.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Routes>
             <Route path='/' element = {<Home/>}></Route>
             <Route path='/home' element={<Home/>}></Route>
             <Route path='/about' element={<About/>}></Route>
             <Route path='/gallery' element={<Gallery/>}></Route>
             <Route path='/contact' element={<Contact/>}></Route>
             <Route path='/register' element={<Register/>}></Route>
             <Route path='/show' element={<Show/>}></Route>
             <Route path='/update/student/:studentID'
                element={<Update/>}></Route>
               
               
                   
       </Routes>
       </BrowserRouter>
      
      
    </div>
  );
}

export default App;
