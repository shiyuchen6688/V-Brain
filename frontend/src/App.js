import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Tutorial from "./pages/Tutorial"
import Links from "./pages/Links"
import Accuisition from "./pages/Accuisition"
import Browse from "./pages/Browse"
import Resources from "./pages/Resources"
import VBrainSequences from "./pages/VBrainSequences"
import ResetPassword from "./pages/ResetPassword"
import Register from "./pages/Register"
import UserHome from "./pages/UserHome"
import UserPage from "./pages/UserPage"
import StudyRegisterationForm from "./pages/StudyRegisterationForm"
import './App.css';
import React, { Component }  from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/links" element={<Links />} />
            <Route path="/accuistition" element={<Accuisition />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/vbrain-sequences" element={<VBrainSequences />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/user-profile/:email/*" element={<UserHome />} />
            <Route path="/user-page" element={<UserPage />} />
            <Route path="/study-registeration-form" element={<StudyRegisterationForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </header>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js" integrity="sha512-dqw6X88iGgZlTsONxZK9ePmJEFrmHwpuMrsUChjAw1mRUhUITE5QU9pkcSox+ynfLhL15Sv2al5A0LVyDCmtUw==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </div>
  );
}

export default App;
