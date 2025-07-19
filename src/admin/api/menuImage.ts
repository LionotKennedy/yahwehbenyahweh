// api/menuApi.ts
import { toast } from 'react-hot-toast';

interface SectionMenuData {
  id: number;
  section_name: string | null;
  path: string;
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
}

// Fonction pour construire l'URL complète des images
export const getImageUrl = (path: string): string => {
  if (!path) return "/placeholder.svg";
  if (path.startsWith("http")) return path;
  return `http://localhost:5000${path}`;
};

const base64ToFile = (base64String: string, filename: string): File => {
  const arr = base64String.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1] || "image/jpeg";
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

export const MenuAPI = {
  fetchAll: async (): Promise<ApiResponse> => {
    try {
      const response = await fetch("http://localhost:5000/api/menu", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error("Erreur lors de la récupération des sections:", error);
      toast.error("Erreur lors du chargement des sections");
      return { 
        success: false, 
        message: error instanceof Error ? error.message : "Erreur inconnue" 
      };
    }
  },

  update: async (id: number, imageData: string, section_name?: string): Promise<ApiResponse> => {
    const toastId = toast.loading(`Mise à jour de la section ${id}...`);
    try {
      let body: FormData | string;
      const headers: Record<string, string> = {};

      if (imageData.startsWith("data:image/")) {
        const file = base64ToFile(imageData, `menu-${id}.jpg`);
        const formData = new FormData();
        formData.append("image", file);
        if (section_name) formData.append("section_name", section_name);
        body = formData;
      } else {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify({ 
          path: imageData, 
          section_name: section_name || "Updated Section" 
        });
      }

      const response = await fetch(`http://localhost:5000/api/menu/id/${id}`, {
        method: "PUT",
        headers,
        body,
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      toast.success(`Section ${section_name || id} mise à jour avec succès!`, { id: toastId });
      return { success: true, data };
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la section ${id}:`, error);
      toast.error(`Échec de la mise à jour de la section`, { id: toastId });
      return { 
        success: false, 
        message: error instanceof Error ? error.message : "Erreur inconnue" 
      };
    }
  }
};