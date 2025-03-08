// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { routeTree } from './routeTree.gen'
import './index.css'

// Create a QueryClient instance
const queryClient = new QueryClient()

// Set up a Router instance
export const router = createRouter({  // ✅ Export the router instance
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

// Register for TypeScript typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  )
} else {
  console.error("Root element with ID 'root' not found.")
}
