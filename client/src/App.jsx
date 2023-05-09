import './App.css'
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import SignUpPage from './pages/SignUpPage';
import axios from 'axios';
import PageNotFound from './pages/PageNotFound';
import { UserContextProvider } from './UserContext';

axios.defaults.baseURL = 'http://localhost:7001';
axios.defaults.withCredentials = true

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
