export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor';
}

export interface ContentItem {
  id: string;
  title: string;
  content: string;
  lastModified: Date;
  author: string;
}

export interface ImageItem {
  id: string;
  name: string;
  url: string;
  alt: string;
  size: number;
  uploadDate: Date;
}

export interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  currentPage: string;
  content: ContentItem[];
  images: ImageItem[];
}