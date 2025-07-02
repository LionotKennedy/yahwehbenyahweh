
"use client"

import type React from "react"
import { createContext, useContext, useReducer } from "react"

interface User {
  id: string
  name: string
  email: string
}

interface ContentItem {
  id: string
  title: string
  lastModified: Date
}

interface ImageItem {
  id: string
  url: string
  alt: string
}

interface AppState {
  user: User | null
  content: ContentItem[]
  images: ImageItem[]
}

interface AppContextType {
  state: AppState
  dispatch: React.Dispatch<any>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const initialState: AppState = {
  user: {
    id: "1",
    name: "Administrateur",
    email: "admin@example.com",
  },
  content: [
    { id: "1", title: "Article sur Yahweh", lastModified: new Date() },
    { id: "2", title: "Les fêtes de Yahweh", lastModified: new Date() },
    { id: "3", title: "Histoire de la nation", lastModified: new Date() },
  ],
  images: [
    { id: "1", url: "/placeholder.svg?height=100&width=150", alt: "Image 1" },
    { id: "2", url: "/placeholder.svg?height=100&width=150", alt: "Image 2" },
    { id: "3", url: "/placeholder.svg?height=100&width=150", alt: "Image 3" },
    { id: "4", url: "/placeholder.svg?height=100&width=150", alt: "Image 4" },
  ],
}

function appReducer(state: AppState, action: any) {
  switch (action.type) {
    default:
      return state
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
