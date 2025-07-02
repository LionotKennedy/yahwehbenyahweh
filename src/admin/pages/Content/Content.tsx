import { FileText, Plus, Search, Edit, Trash2 } from "lucide-react"

const content = [
  { id: 1, title: "L'Univers de Yahweh", type: "Page", status: "Publié", lastModified: "2024-01-15" },
  { id: 2, title: "Les Fêtes de Yahweh", type: "Article", status: "Brouillon", lastModified: "2024-01-14" },
  { id: 3, title: "À propos de Yahweh Ben Yahweh", type: "Page", status: "Publié", lastModified: "2024-01-13" },
]

function Content() {
  return (
    <div className="page-content">
      <div className="page-header mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3>Gestion du contenu</h3>
            <p>Créez et gérez le contenu de votre site web.</p>
          </div>
          <button className="btn-primary">
            <Plus size={20} />
            <span>Nouveau contenu</span>
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="table-header">
            <div className="search-box">
              <Search size={20} />
              <input type="text" placeholder="Rechercher du contenu..." />
            </div>
          </div>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Titre</th>
                  <th>Type</th>
                  <th>Statut</th>
                  <th>Dernière modification</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {content.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="content-info">
                        <FileText size={16} />
                        <span>{item.title}</span>
                      </div>
                    </td>
                    <td>{item.type}</td>
                    <td>
                      <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
                    </td>
                    <td>{item.lastModified}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn edit">
                          <Edit size={16} />
                        </button>
                        <button className="action-btn delete">
                          <Trash2 size={16} />
                        </button>
                      </div>
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

export default Content
