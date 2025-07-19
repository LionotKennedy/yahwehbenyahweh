// components/ShopLayout.tsx
import type { ReactNode } from "react"
import "./styles/layout.css"
import "./styles/responsive.css"
import "./styles/index.css"

interface ShopLayoutProps {
  children: ReactNode
}

export function ShopLayout({ children }: ShopLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div id="backdrop" className="backdrop">
        {/* Pas de Header ni Navigation ici - ils seront dans la page Shop elle-même */}
        <main>{children}</main>
      </div>
    </div>
  )
}