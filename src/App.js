import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexHome from './pages/home';
import IndexBlog from './pages/blog';
import ContactPage from './pages/contact/Contact';
import ExcelProject from './pages/blog/projects/ExcelProject';
import MastermindProject from './pages/blog/projects/MasterMindProject';
import OtgwPost from './pages/blog/projects/Otgw';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<IndexHome/>}/>
    <Route path='/blog'>
      <Route index element={<IndexBlog/>}/>
      <Route path='excel_project' element={<ExcelProject/>}/>
      <Route path='mm_project' element={<MastermindProject/>}/>
      <Route path='over_the_garden_wall' element={<OtgwPost/>}/>
    </Route>
    <Route path='/contact' element={<ContactPage/>}/>
  </Routes>
  </BrowserRouter>
}

export default App;
