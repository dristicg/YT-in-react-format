import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Sidebar from './components/Sidebar.jsx'
import Mainbody from './components/Mainbody.jsx'
import Body from './components/Body.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <div className='main_div'> 
    <Sidebar />
    <Mainbody />

    </div>
        <Body/>
  </StrictMode>,
)
