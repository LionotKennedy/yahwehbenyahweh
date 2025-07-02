// import { Link, useLocation } from "react-router-dom";
// import { LayoutDashboard, Users, FileText, Settings, User } from "lucide-react";
// import '../layout/style/sidebar.css'

// export function AdminSidebar() {
//   const location = useLocation();

//   const menuItems = [
//     { path: "/admin", label: "Tableau de bord", icon: LayoutDashboard },
//     { path: "/admin/users", label: "Utilisateurs", icon: Users },
//     { path: "/admin/content", label: "Contenu", icon: FileText },
//     { path: "/admin/settings", label: "Paramètres", icon: Settings },
//   ];

//   return (
//     <div className="sidebar-admin">
//       <div className="sidebar-header-admin">
//         <h1 className="sidebar-title-admin">Back Office</h1>
//         <p className="sidebar-subtitle-admin">Administration</p>
//       </div>
//       <nav className="sidebar-nav-admin">
//         <ul className="nav-list-admin">
//           {menuItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = location.pathname === item.path;

//             return (
//               <li key={item.path} className="nav-item-admin">
//                 <Link
//                   to={item.path}
//                   className={`nav-link-admin ${isActive ? "active" : ""}`}
//                 >
//                   <Icon size={20} />
//                   <span>{item.label}</span>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//       <div className="sidebar-footer-admin">
//         <div className="user-info-admin">
//           <div className="user-avatar-admin">
//             <User size={16} />
//           </div>
//           <div className="user-details-admin">
//             <h4>Admin</h4>
//             <p>admin</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }










import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, FileText, Settings, User, Image } from "lucide-react";
import '../layout/style/sidebar.css'

export function AdminSidebar() {
  const location = useLocation();

  const menuItems = [
    { path: "/admin", label: "Tableau de bord", icon: LayoutDashboard },
    { path: "/admin/users", label: "Utilisateurs", icon: Users },
    { path: "/admin/content", label: "Contenu", icon: FileText },
    { path: "/admin/images", label: "Images", icon: Image },
    { path: "/admin/settings", label: "Paramètres", icon: Settings },
  ];

  return (
    <div className="sidebar-admin">
      <div className="sidebar-header-admin">
        <h1 className="sidebar-title-admin">Back Office</h1>
        <p className="sidebar-subtitle-admin">Administration</p>
      </div>
      <nav className="sidebar-nav-admin">
        <ul className="nav-list-admin">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={item.path} className="nav-item-admin">
                <Link
                  to={item.path}
                  className={`nav-link-admin ${isActive ? "active" : ""}`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="sidebar-footer-admin">
        <div className="user-info-admin">
          <div className="user-avatar-admin">
            <User size={16} />
          </div>
          <div className="user-details-admin">
            <h4>Admin</h4>
            <p>admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}