import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import CommonContext from './Components/Dashboard/Form/Utils/Context/CommonContext.jsx'

createRoot(document.getElementById('root')).render(
   <CommonContext>
 <BrowserRouter>
    <App />
 </BrowserRouter>
 </CommonContext>
)
