
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home1 from "./Home1";
import Destination from './Destination';
import Contact from './Contact';
import About from './About';
import RegistrationForm from './RegistrationForm';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home1 />} />
          <Route path="about" element={<About/>} />
          <Route path="destination" element={<Destination />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="registrationform" element={<RegistrationForm/>} />
          </Route>
          </Routes>
          </BrowserRouter>
          );
        }

