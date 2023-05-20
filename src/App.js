import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisPage from './pages/RegisPage/RegisPage';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/main' element={<MainPage/>}/>
        <Route path='/register' element={<RegisPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
