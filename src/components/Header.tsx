import { Link } from "react-router-dom"
import "./styles/header.css"

export function Header() {
  return (
    <div id="gold-top" className="gold-top">
      <div id="site-logo" className="site-logo">
        <Link to="/">
          <img src="/src/assets/images/Site_Logo.png" alt="Site Logo" className="tailImage" />
        </Link>
      </div>
    </div>
  )
}
