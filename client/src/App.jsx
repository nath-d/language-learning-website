import './App.css'
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import SignUpPage from './pages/SignUpPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
      </Route>
    </Routes>
  )
}

export default App
