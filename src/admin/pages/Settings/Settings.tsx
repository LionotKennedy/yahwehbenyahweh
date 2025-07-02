import { Save, Globe, Shield, Bell } from "lucide-react"

function Settings() {
  return (
    <div className="page-content">
      <div className="page-header mb-6">
        <h3>Paramètres</h3>
        <p>Configurez les paramètres de votre site web.</p>
      </div>

      <div className="grid grid-cols-1 lg-grid-cols-2">
        <div className="card">
          <div className="card-content">
            <div className="settings-section">
              <div className="section-header">
                <Globe size={20} />
                <h4>Paramètres généraux</h4>
              </div>
              <div className="form-group">
                <label>Nom du site</label>
                <input type="text" defaultValue="Nation of Yahweh" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea defaultValue="Site officiel de la Nation of Yahweh" rows={3} />
              </div>
              <div className="form-group">
                <label>Email de contact</label>
                <input type="email" defaultValue="contact@nationofyahweh.com" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="settings-section">
              <div className="section-header">
                <Shield size={20} />
                <h4>Sécurité</h4>
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" defaultChecked />
                  Authentification à deux facteurs
                </label>
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" defaultChecked />
                  Connexions sécurisées uniquement
                </label>
              </div>
              <div className="form-group">
                <label>Durée de session (minutes)</label>
                <input type="number" defaultValue="60" />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="settings-section">
              <div className="section-header">
                <Bell size={20} />
                <h4>Notifications</h4>
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" defaultChecked />
                  Notifications par email
                </label>
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" />
                  Notifications push
                </label>
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" defaultChecked />
                  Rapports hebdomadaires
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-actions">
        <button className="btn-primary">
          <Save size={20} />
          <span>Sauvegarder les paramètres</span>
        </button>
      </div>
    </div>
  )
}

export default Settings
