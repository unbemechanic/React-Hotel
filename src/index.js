import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './page/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './page/home/home';
import FacilityComponent from './page/Facilities/facility';
import RoomsComponent from './page/Rooms/rooms';
import ContactComponent from './page/contact/contact';
import Footer from './footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/home' element={<HomeComponent />} />
    <Route path='/facilities' element={<FacilityComponent />} />
    <Route path='/rooms' element={<RoomsComponent />} />
    <Route path='/contact' element={<ContactComponent />} />
    
  </Routes>
  <Footer/>
    
  </BrowserRouter>
);


