// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// document.title = 'yahwehbenyahweh'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



// index.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.tsx'

document.title = 'yahwehbenyahweh'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Toaster position="top-right" /> */}
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: '#1f2937',
          color: '#fff',
          borderRadius: '8px',
        },
      }}
    />
  </StrictMode>,
)
