
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./admin/contexts/AppContext";
import { AdminLayout } from "./admin/layout/AdminLayout";
import { LoadingSpinner } from "./admin/components/LoadingSpinner";
import { ProtectedRoute } from "./configs/ProtectedRoute";
import { allRoutes } from "./configs/RoutesConfig";
import { Layout } from "./components/Layout";
import ForgotPasswordPage from "./admin/pages/ForgotPassword/ForgotPasswordPage";
import ResetPasswordPage from "./admin/pages/ResetPassword/ResetPasswordPage";
import ResetSuccessPage from "./admin/pages/ResetSuccess/ResetSuccessPage";

// Pages
const AdminLogin = React.lazy(() => import("./admin/pages/Login/Login"));
const ShopPageWrapper = React.lazy(() => import("./pages/(sous-page)/Shop/ShopPageWrapper"));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Route de login admin (pas de layout) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/admin/reset-password" element={<ResetPasswordPage />} />
          <Route path="/admin/reset-success" element={<ResetSuccessPage />} />
          {/* Layout Admin - Routes protégées */}
          <Route element={<ProtectedRoute />}>
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
              {allRoutes
                .filter((route) => route.path.startsWith("/admin") && route.requiresAuth)
                .map(({ path, component: Component }) => (
                  <Route key={path} path={path.replace("/admin/", "")} element={<Component />} />
                ))}
            </Route>
          </Route>
          {/* Route Shop avec layout séparé */}
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
  );
}

export default App;