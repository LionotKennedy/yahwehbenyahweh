
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { verifyAuth } from "../admin/api/apiAuth";

export function ProtectedRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await verifyAuth();
      if (!isAuthenticated) {
        navigate("/admin/login");
      }
    };
    checkAuth();
  }, [navigate]);

  return <Outlet />;
}