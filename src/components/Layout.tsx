import type { ReactNode } from "react"
import { Header } from "./Header"
import { Navigation } from "./Navigation"
import "./styles/layout.css"
import "./styles/responsive.css"
import "./styles/index.css"


interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div id="backdrop" className="backdrop">
        <Header />
        <Navigation />
        <main>{children}</main>
      </div>
    </div>
  )
}
