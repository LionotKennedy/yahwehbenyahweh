import { UserPlus, Search, MoreHorizontal } from "lucide-react"

const users = [
  { id: 1, name: "Jean Dupont", email: "jean@example.com", role: "Admin", status: "Actif" },
  { id: 2, name: "Marie Martin", email: "marie@example.com", role: "Éditeur", status: "Actif" },
  { id: 3, name: "Pierre Durand", email: "pierre@example.com", role: "Lecteur", status: "Inactif" },
]

function Users() {
  return (
    <div className="page-content">
      <div className="page-header mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3>Gestion des utilisateurs</h3>
            <p>Gérez les comptes utilisateurs et leurs permissions.</p>
          </div>
          <button className="btn-primary">
            <UserPlus size={20} />
            <span>Nouvel utilisateur</span>
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="table-header">
            <div className="search-box">
              <Search size={20} />
              <input type="text" placeholder="Rechercher un utilisateur..." />
            </div>
          </div>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Rôle</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className="user-info">
                        <div className="user-avatar">{user.name.charAt(0)}</div>
                        <span>{user.name}</span>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`badge ${user.role.toLowerCase()}`}>{user.role}</span>
                    </td>
                    <td>
                      <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
                    </td>
                    <td>
                      <button className="action-btn">
                        <MoreHorizontal size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
