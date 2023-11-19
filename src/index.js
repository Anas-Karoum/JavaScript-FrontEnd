import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Services from './Pages/Services';
import News from './Pages/News';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import RegistrationForm from './Pages/RegistrationForm/RegistrationForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/News' element={<News />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/RegistrationForm' element={<RegistrationForm />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
