
import './App.css';
import Main from './pages/main';
import {UserProvider} from './context/userContext';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './componentes/header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/contatos' element={<Header />}/>
      </Routes>
    </BrowserRouter>
  );
}

function AppWrapper() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default AppWrapper;

