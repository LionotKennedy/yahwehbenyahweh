import React, { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { AppState, User, ContentItem, ImageItem } from '../types';

type AppAction = 
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'SET_PAGE'; payload: string }
  | { type: 'UPDATE_CONTENT'; payload: ContentItem }
  | { type: 'DELETE_CONTENT'; payload: string }
  | { type: 'ADD_IMAGE'; payload: ImageItem }
  | { type: 'DELETE_IMAGE'; payload: string };

const initialState: AppState = {
  user: null,
  isAuthenticated: false,
  currentPage: 'dashboard',
  content: [
    {
      id: '1',
      title: 'Page d\'accueil',
      content: 'Contenu de la page d\'accueil...',
      lastModified: new Date(),
      author: 'Admin'
    },
    {
      id: '2',
      title: 'À propos',
      content: 'Contenu de la page à propos...',
      lastModified: new Date(),
      author: 'Admin'
    }
  ],
  images: [
    {
      id: '1',
      name: 'hero-banner.jpg',
      url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      alt: 'Image de bannière principale',
      size: 2048000,
      uploadDate: new Date()
    }
  ]
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };
    case 'SET_PAGE':
      return {
        ...state,
        currentPage: action.payload
      };
    case 'UPDATE_CONTENT':
      return {
        ...state,
        content: state.content.map(item =>
          item.id === action.payload.id ? action.payload : item
        )
      };
    case 'DELETE_CONTENT':
      return {
        ...state,
        content: state.content.filter(item => item.id !== action.payload)
      };
    case 'ADD_IMAGE':
      return {
        ...state,
        images: [...state.images, action.payload]
      };
    case 'DELETE_IMAGE':
      return {
        ...state,
        images: state.images.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}