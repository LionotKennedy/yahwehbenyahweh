import React from 'react';
import { Bell, Search } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <h2 className="header-title">{title}</h2>
        
        <div className="header-actions">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Rechercher..."
              className="search-input"
            />
          </div>
          
          <button className="notification-btn">
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>
        </div>
      </div>
    </header>
  );
}