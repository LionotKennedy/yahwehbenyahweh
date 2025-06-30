import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Settings, 
  User,
  LogOut 
} from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'content', label: 'Contenu', icon: FileText },
  { id: 'images', label: 'Images', icon: Image },
  { id: 'settings', label: 'Paramètres', icon: Settings },
];

export function Sidebar() {
  const { state, dispatch } = useApp();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Back Office</h1>
        <p className="sidebar-subtitle">Administration</p>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = state.currentPage === item.id;
            
            return (
              <li key={item.id} className="nav-item">
                <button
                  onClick={() => dispatch({ type: 'SET_PAGE', payload: item.id })}
                  className={isActive ? 'active' : ''}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">
            <User size={16} />
          </div>
          <div className="user-details">
            <h4>{state.user?.name}</h4>
            <p>{state.user?.role}</p>
          </div>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          <LogOut size={16} />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  );
}