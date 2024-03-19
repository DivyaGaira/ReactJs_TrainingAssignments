import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Emps from './components/Emps';
import Depts from './components/Depts';
import NotFound from './components/NotFound';
import Details from './components/Details';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Signout from './components/Signout';

const routing = (
  <Router>

    <div style={{ textAlign: "center" }} >
      <h3>Routing implementation in React JS</h3>
      <hr />
      <Link to="/">Home</Link> |
      <Link to="/Emps">Employees</Link> |
      <Link to="/Depts">Deptartments</Link> |
      <Link to="/About">About Us</Link> |
      <Link to="/Contact">Contact Us</Link>  |
      <Link to="/Hello">Invalid</Link>  |
      <Link to="/Login">Login</Link>  |
      <Link to="/Signout">Sign Out</Link>  
      <hr />
    </div>



    <Routes>
      <Route path="/" element={<App />} />

      <Route path="emps" element={ 
         <ProtectedRoute  returnUrl="/Emps">
              <Emps />
         </ProtectedRoute>  
       } />

      <Route path="/Depts" element={
           <ProtectedRoute  returnUrl="/Depts">
                 <Depts />
           </ProtectedRoute>           
        } />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Login" element={ <Login />} />
      <Route path="/Details/:id" element={<Details />} />
      <Route path="/Signout" element={<Signout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  </Router>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);
reportWebVitals()