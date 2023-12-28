import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { LoadingProvider } from './loading.context.tsx'
import RouteComponent from './routes.tsx'
import { SidebarProvider } from './sidebar.context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoadingProvider>
      <SidebarProvider>
        <RouteComponent />
      </SidebarProvider>
    </LoadingProvider>
  </React.StrictMode>,
)
