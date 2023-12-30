
import './App.css';
import { Header } from './Componenets/header/Header';
import SimpleBottomNavigation from './Componenets/Bottomnavigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  Trending  from './Pages/Trending/Trending';
import { Container } from '@mui/material';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';


function App() {
  return (
    <BrowserRouter>

     <Header></Header>
    <div className='app'>
     <Container>
      <Routes>
      <Route path="/" element={<Trending/>}/>
      <Route path="/trending" element={<Trending/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/series" element={<Series/>}/>
      <Route path="/search" element={<Search/>}/>
      </Routes>
      </Container>
    </div>
    <ToastContainer /> 
    <SimpleBottomNavigation></SimpleBottomNavigation>
    </BrowserRouter>
  );
}

export default App;
