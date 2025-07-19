
// import React, { Suspense } from "react"
// import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
// import "./App.css"
// import { AppProvider } from "./admin/contexts/AppContext"

// // Layouts
// import { Layout } from "./components/Layout"
// import { AdminLayout } from "./admin/layout/AdminLayout"
// import { LoadingSpinner } from "./admin/components/LoadingSpinner"
// import { allRoutes } from "./configs/RoutesConfig"

// // Pages
// const AdminLogin = React.lazy(() => import("./admin/pages/Login/Login"))

// function App() {
//   return (
//     <Router>
//       <Suspense fallback={<LoadingSpinner />}>
//         <Routes>
//           {/* Route de login admin (pas de layout) */}
//           <Route path="/admin/login" element={<AdminLogin />} />

//           {/* Layout Admin - Routes imbriquées */}
//           <Route
//             path="/admin"
//             element={
//               <AppProvider>
//                 <AdminLayout>
//                   <Outlet />
//                 </AdminLayout>
//               </AppProvider>
//             }
//           >
//             {/* Routes admin imbriquées */}
//             <Route
//               index
//               element={
//                 // <ProtectedRoute requiresAuth={true}>
//                 <AdminDashboard />
//                 // </ProtectedRoute>
//               }
//             />
//             <Route
//               path="users"
//               element={
//                 // <ProtectedRoute requiresAuth={true}>
//                 <AdminUsers />
//                 // </ProtectedRoute>
//               }
//             />
//             <Route
//               path="content"
//               element={
//                 // <ProtectedRoute requiresAuth={true}>
//                 <AdminContent />
//                 // </ProtectedRoute>
//               }
//             />
//             <Route
//               path="settings"
//               element={
//                 // <ProtectedRoute requiresAuth={true}>
//                 <AdminSettings />
//                 // </ProtectedRoute>
//               }
//             />
//             <Route
//               path="images"
//               element={
//                 // <ProtectedRoute requiresAuth={true}>
//                 <AdminImage />
//                 // </ProtectedRoute>
//               }
//             />
//           </Route>

//           {/* Layout Client */}
//           <Route
//             element={
//               <Layout>
//                 <Outlet />
//               </Layout>
//             }
//           >
//             {allRoutes
//               .filter((route) => !route.path.startsWith("/admin"))
//               .map(({ path, component: Component }) => (
//                 <Route key={path} path={path} element={<Component />} />
//               ))}
//           </Route>
//         </Routes>
//       </Suspense>
//     </Router>
//   )
// }

// // Import des composants admin
// const AdminDashboard = React.lazy(() => import("./admin/pages/Dashboard/Dashboard"))
// const AdminUsers = React.lazy(() => import("./admin/pages/Users/Users"))
// const AdminContent = React.lazy(() => import("./admin/pages/Content/Content"))
// const AdminImage = React.lazy(() => import("./admin/pages/Image/Image"))
// const AdminSettings = React.lazy(() => import("./admin/pages/Settings/Settings"))

// export default App






































import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import "./App.css"
import { AppProvider } from "./admin/contexts/AppContext"

// Layouts
import { Layout } from "./components/Layout"
import { AdminLayout } from "./admin/layout/AdminLayout"
import { LoadingSpinner } from "./admin/components/LoadingSpinner"
import { allRoutes } from "./configs/RoutesConfig"

// Pages
const AdminLogin = React.lazy(() => import("./admin/pages/Login/Login"))

// ✅ Shop avec layout séparé
const ShopPageWrapper = React.lazy(() => import("./pages/(sous-page)/Shop/ShopPageWrapper"))

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Route de login admin (pas de layout) */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Layout Admin - Routes imbriquées */}
          <Route
            path="/admin"
            element={
              <AppProvider>
                <AdminLayout>
                  <Outlet />
                </AdminLayout>
              </AppProvider>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="images" element={<AdminImage />} />
          </Route>

          {/* ✅ Route Shop avec layout séparé */}
          <Route path="/shop" element={<ShopPageWrapper />} />

          {/* Layout Client (exclut /admin et /shop) */}
          <Route
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            {allRoutes
              .filter(
                (route) =>
                  !route.path.startsWith("/admin") && route.path !== "/shop"
              )
              .map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

// ✅ Lazy imports admin
const AdminDashboard = React.lazy(() => import("./admin/pages/Dashboard/Dashboard"))
const AdminUsers = React.lazy(() => import("./admin/pages/Users/Users"))
const AdminContent = React.lazy(() => import("./admin/pages/Content/Content"))
const AdminImage = React.lazy(() => import("./admin/pages/Image/Image"))
const AdminSettings = React.lazy(() => import("./admin/pages/Settings/Settings"))

export default App