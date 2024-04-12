import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexHome from './pages/home';
import IndexBlog from './pages/blog';
import ContactPage from './pages/contact/Contact';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<IndexHome/>}/>
    <Route path='/blog' element={<IndexBlog/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
  </Routes>
  </BrowserRouter>
}

export default App;
