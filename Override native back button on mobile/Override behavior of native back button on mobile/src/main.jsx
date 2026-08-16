import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider.jsx'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <QueryClientProvider client={new QueryClient()}>
        <App />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)

