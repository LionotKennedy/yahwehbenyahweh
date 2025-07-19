// api.ts
import { toast } from 'react-hot-toast';

// Fonction pour construire l'URL complète des images
export const getImageUrl = (path: string): string => {
  if (!path) return "/placeholder.svg";
  if (path.startsWith("http")) return path;
  return `http://localhost:5000${path}`;
};

// Fonction pour convertir base64 en File
export const base64ToFile = (base64String: string, filename: string): File => {
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

// Interface commune pour les réponses API
interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
}

// Fonctions API pour les bannières
export const BannerAPI = {
  fetchAll: async (): Promise<ApiResponse> => {
    try {
      const response = await fetch("http://localhost:5000/api/home/banners", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error("Erreur lors de la récupération des bannières:", error);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : "Erreur inconnue" 
      };
    }
  },

  update: async (id: number, imageData: string, alt?: string): Promise<ApiResponse> => {
    try {
      let body: FormData | string;
      const headers: Record<string, string> = {};

      if (imageData.startsWith("data:image/")) {
        const file = base64ToFile(imageData, `banner-${id}.jpg`);
        const formData = new FormData();
        formData.append("image", file);
        formData.append("alt", alt || "Updated Banner");
        body = formData;
      } else {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify({ path: imageData, alt: alt || "Updated Banner" });
      }

      const response = await fetch(`http://localhost:5000/api/home/banners/${id}`, {
        method: "PUT",
        headers,
        body,
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      toast.success(`Bannière ${id} mise à jour avec succès!`);
      return { success: true, data };
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la bannière ${id}:`, error);
      toast.error(`Échec de la mise à jour de la bannière ${id}`);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : "Erreur inconnue" 
      };
    }
  }
};

// Fonctions API pour les sections
export const SectionAPI = {
  fetchAll: async (): Promise<ApiResponse> => {
    try {
      const response = await fetch("http://localhost:5000/api/sections", {
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
      return { 
        success: false, 
        message: error instanceof Error ? error.message : "Erreur inconnue" 
      };
    }
  },

  update: async (id: number, imageData: string, section_name?: string): Promise<ApiResponse> => {
    try {
      let body: FormData | string;
      const headers: Record<string, string> = {};

      if (imageData.startsWith("data:image/")) {
        const file = base64ToFile(imageData, `section-${id}.jpg`);
        const formData = new FormData();
        formData.append("image", file);
        formData.append("section_name", section_name || "Updated Section background");
        body = formData;
      } else {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify({ path: imageData, section_name });
      }

      const response = await fetch(`http://localhost:5000/api/sections/id/${id}`, {
        method: "PUT",
        headers,
        body,
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      toast.success(`Section ${section_name} mise à jour avec succès!`);
      return { success: true, data };
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la section ${id}:`, error);
      toast.error(`Échec de la mise à jour de la section`);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : "Erreur inconnue" 
      };
    }
  }
};

// Fonctions API pour la galerie
export const GalleryAPI = {
  fetchAll: async (): Promise<ApiResponse> => {
    try {
      const response = await fetch("http://localhost:5000/api/gallery", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error("Erreur lors de la récupération des images de galerie:", error);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : "Erreur inconnue" 
      };
    }
  },

  update: async (id: number, imageData: string, alt?: string): Promise<ApiResponse> => {
    try {
      let body: FormData | string;
      const headers: Record<string, string> = {};

      if (imageData.startsWith("data:image/")) {
        const file = base64ToFile(imageData, `gallery-${id}.jpg`);
        const formData = new FormData();
        formData.append("image", file);
        formData.append("alt", alt || "New Gallery Image");
        body = formData;
      } else {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify({ path: imageData, alt: alt || "Updated Gallery Image" });
      }

      const response = await fetch(`http://localhost:5000/api/gallery/${id}`, {
        method: "PUT",
        headers,
        body,
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      toast.success(`Image galerie ${id} mise à jour avec succès!`);
      return { success: true, data };
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de l'image galerie ${id}:`, error);
      toast.error(`Échec de la mise à jour de l'image galerie`);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : "Erreur inconnue" 
      };
    }
  }
};