// export function Dashboard() {
//   return (
//     <div>1</div>
//   );
// }
// export default Dashboard;



















import React from 'react';
import { FileText, Image, Users, TrendingUp } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

const stats = [
  {
    name: 'Contenus',
    value: '12',
    change: '+2.5%',
    icon: FileText,
    color: 'blue'
  },
  {
    name: 'Images',
    value: '48',
    change: '+12.3%',
    icon: Image,
    color: 'green'
  },
  {
    name: 'Visiteurs',
    value: '1,234',
    change: '+8.1%',
    icon: Users,
    color: 'purple'
  },
  {
    name: 'Croissance',
    value: '23.4%',
    change: '+3.2%',
    icon: TrendingUp,
    color: 'orange'
  }
];

export function Dashboard() {
  const { state } = useApp();

  return (
    <div className="page-content">
      <div className="page-header mb-6">
        <h3>Bonjour, {state.user?.name} 👋</h3>
        <p>Voici un aperçu de votre site web et de son activité.</p>
      </div>

      <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 mb-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="stat-card">
              <div className="stat-card-content">
                <div className="stat-info">
                  <h4>{stat.name}</h4>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-change">{stat.change}</div>
                </div>
                <div className={`stat-icon ${stat.color}`}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg-grid-cols-2">
        <div className="card">
          <div className="card-content">
            <h4 className="mb-4" style={{ fontSize: '18px', fontWeight: '600', color: 'var(--gray-900)' }}>
              Contenu récent
            </h4>
            <div>
              {state.content.slice(0, 3).map((item) => (
                <div key={item.id} className="recent-item">
                  <FileText className="recent-icon" size={20} />
                  <div className="recent-info">
                    <div className="recent-title">{item.title}</div>
                    <div className="recent-date">
                      Modifié le {item.lastModified.toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h4 className="mb-4" style={{ fontSize: '18px', fontWeight: '600', color: 'var(--gray-900)' }}>
              Images récentes
            </h4>
            <div className="recent-images">
              {state.images.slice(0, 4).map((image) => (
                <div key={image.id} className="recent-image">
                  <img src={image.url} alt={image.alt} />
                  <div className="recent-image-overlay"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}