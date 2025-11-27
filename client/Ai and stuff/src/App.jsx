import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SideBarRight from './components/SideBar RIght.jsx'
import AiChat from './routes/AiChat.jsx'
import Settings from './routes/Settings.jsx'

import './App.css'

function App() {
  const [message, setMessage] = useState({})

  async function fetchMessage() {
    try {
      const response = await fetch('http://localhost:3000/api/data');
      if (!response.ok) {
        throw new Error('HTTP error:, ' + response.status);
      }
      const data = await response.json();
      setMessage(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }

  return (
    <Router>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem' }}>
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/aichat" element={<AiChat fetchMessage={fetchMessage} message={message} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<AiChat fetchMessage={fetchMessage} message={message} />} />
          </Routes>
        </main>

        <aside>
          <SideBarRight />
        </aside>
      </div>
    </Router>
  )
}

export default App
