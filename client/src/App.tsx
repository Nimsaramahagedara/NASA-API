import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import axios from 'axios'
import GlobalContextProvider from './components/GlobalContext';
import Login from './pages/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './pages/Layout';
function App() {

  // axios.defaults.baseURL = 'https://api.nasa.gov';
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <ToastContainer
          theme="dark"
        />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/' element={<Layout />}>
            <Route path='home' element={<Home />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App
