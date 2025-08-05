
const API_BASE_URLS = "http://localhost:5000";


const API_BASE_URL = `${API_BASE_URLS}/api/auth`;

// apiAuth.ts
interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    role: number;
    first_name: string;
    last_name: string;
  };
}

// 🔐 Connexion admin
export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST", // Change to "POST" if your backend expects POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error('Login error:', {
        status: response.status,
        statusText: response.statusText,
        error: error.message || 'No error message provided by server',
      });
      throw new Error(error.message || "Erreur de connexion. Veuillez vérifier vos identifiants.");
    }

    const data = await response.json();
    return data; // { token, user }
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error("Erreur de connexion. Veuillez vérifier vos identifiants.");
  }
};

// 🚪 Déconnexion admin
export const logout = async (): Promise<void> => {
  try {
    const token = localStorage.getItem("adminToken");
    if (!token) return;

    const response = await fetch(`${API_BASE_URL}/logout`, {
      method: "POST", // Change to "POST" if your backend expects POST
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error('Logout error:', {
        status: response.status,
        statusText: response.statusText,
        error: error.message || 'No error message provided by server',
      });
      throw new Error("Erreur lors de la déconnexion");
    }

    localStorage.removeItem("adminToken");
  } catch (error) {
    console.error('Fetch error during logout:', error);
  }
};

// ✅ Vérifier si le token est valide et le rôle est admin
export const verifyAuth = async (): Promise<boolean> => {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    console.log('No token found in localStorage');
    return false;
  }

  try {
    // Decode token to check role (assuming JWT structure)
    const payload = JSON.parse(atob(token.split('.')[1]));
    const isAdmin = payload.role === 1;
    if (!isAdmin) {
      // console.log('User is not an admin:', payload);
    }
    return isAdmin;
  } catch (error) {
    console.error('Erreur lors de la vérification du token:', error);
    return false;
  }
};

// Ajoute cette interface au-dessus des autres
interface ForgotPasswordResponse {
  message: string;
  userId: number;
}

// 🔐 Envoi du code de réinitialisation
export const forgotPassword = async (email: string): Promise<ForgotPasswordResponse> => {
  console.log("📤 Demande de réinitialisation pour :", email);

  const response = await fetch(`${API_BASE_URL}/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Erreur lors de l'envoi de l'email");
  }

  const data = await response.json();
  // console.log("📥 Réponse forgotPassword :", data);
  return data; // { message, userId }
};

// Ajoute cette interface
interface ResetPasswordPayload {
  userId: number;
  code: string;
  newPassword: string;
}

interface ResetPasswordResponse {
  message: string;
}

// 🔁 Réinitialiser le mot de passe
export const resetPassword = async (payload: ResetPasswordPayload): Promise<ResetPasswordResponse> => {
  // console.log("📤 Réinitialisation mot de passe :", payload);

  const response = await fetch(`${API_BASE_URL}/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Erreur lors de la réinitialisation du mot de passe");
  }

  const data = await response.json();
  // console.log("✅ Réponse resetPassword :", data);
  return data;
};