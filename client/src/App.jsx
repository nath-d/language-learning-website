import './App.css'
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import SignUpPage from './pages/SignUpPage';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4001';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Route>
    </Routes>
  )
}

export default App
