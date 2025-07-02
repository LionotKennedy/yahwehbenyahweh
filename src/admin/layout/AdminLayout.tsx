
import type { ReactNode } from "react"
import { AdminSidebar } from "../layout/Sidebar"
import { AdminNavbar } from "../layout/Header"
import "./style/admin-layout.css"

interface AdminLayoutProps {
  children: ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="admin-layout-container">
      <AdminSidebar />
      <div className="admin-content">
        <AdminNavbar />
        <main className="admin-main">{children}</main>
      </div>
    </div>
  )
}

