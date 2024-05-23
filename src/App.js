import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import IndexHome from './pages/home';
import IndexBlog from './pages/blog';
import ContactPage from './pages/contact/Contact';
import ExcelProject from './pages/blog/projects/ExcelProject';
import MastermindProject from './pages/blog/projects/MasterMindProject';
import OtgwPost from './pages/blog/projects/Otgw';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Space Grotesk'
      ].join(','),
      lineHeight: 1.5,
    paragraphSpacing: '2em',
    color: '#ffffff',
    }
  });

  return <ThemeProvider theme={theme}>
    <BrowserRouter>
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
  </ThemeProvider>
}

export default App;
