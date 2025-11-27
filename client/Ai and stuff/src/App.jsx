import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SideBarRight from './components/SideBar RIght.jsx'
import { FaBars } from 'react-icons/fa'
import AiChat from './routes/AiChat.jsx'
import Settings from './routes/Settings.jsx'
import Home from './routes/Home.jsx'

import './App.css'

function App() {
  //const [message, setMessage] = useState({})
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [sidebarToggled, setSidebarToggled] = useState(false)
  
  const handleCollapsedChange = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  const handleToggleSidebar = (value) => {
    setSidebarToggled(value)
  }


  //async function fetchMessage() {
  //  try {
  //    const response = await fetch('http://localhost:3000/api/data');
  //    if (!response.ok) {
  //      throw new Error('HTTP error:, ' + response.status);
  //    }
  //    const data = await response.json();
  //    setMessage(data);
  //    console.log(data);
  //  } catch (error) {
  //    console.error('Error fetching message:', error);
  //  }
  //}
//
    const appClassName = `app${sidebarToggled ? ' toggled' : ''}`

    return (
      <div className={appClassName}>
          <SideBarRight
            collapsed={sidebarCollapsed}
            toggled={sidebarToggled}
            handleToggleSidebar={handleToggleSidebar}
            handleCollapsedChange={handleCollapsedChange}
          />
        <main>
          <div className="ButtonToggle" onClick={() => handleToggleSidebar(!sidebarToggled)}>
            <FaBars />
          </div>
          <Routes>
            <Route path="/aichat" element={<AiChat />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </main>
      </div>
  )
}


export default App
