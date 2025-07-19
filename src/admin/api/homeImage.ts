// // src/api/api.ts
// const API_BASE_URL = "http://localhost:5000/api";

// // GET
// export const fetchBannersAPI = () =>
//   fetch(`${API_BASE_URL}/home/banners`).then((r) => {
//     if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
//     return r.json();
//   });

// export const fetchSectionsAPI = () =>
//   fetch(`${API_BASE_URL}/sections`).then((r) => {
//     if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
//     return r.json();
//   });

// export const fetchGalleryAPI = () =>
//   fetch(`${API_BASE_URL}/gallery`).then((r) => {
//     if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
//     return r.json();
//   });

// // PUT
// export const updateBannerAPI = async (
//   id: number,
//   body: FormData | string,
//   headers: Record<string, string> = {}
// ) => {
//   const res = await fetch(`${API_BASE_URL}/home/banners/${id}`, {
//     method: "PUT",
//     headers,
//     body,
//   });
//   if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//   return res.json();
// };

// export const updateGalleryAPI = async (
//   id: number,
//   body: FormData | string,
//   headers: Record<string, string> = {}
// ) => {
//   const res = await fetch(`${API_BASE_URL}/gallery/${id}`, {
//     method: "PUT",
//     headers,
//     body,
//   });
//   if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//   return res.json();
// };

// export const updateSectionAPI = async (
//   id: number,
//   body: FormData | string,
//   headers: Record<string, string> = {}
// ) => {
//   const res = await fetch(`${API_BASE_URL}/sections/id/${id}`, {
//     method: "PUT",
//     headers,
//     body,
//   });
//   if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//   return res.json();
// };



// src/api/homeApi.ts
const API_BASE = "http://localhost:5000/api";

// Helper pour construire l'URL complète
export const getImageUrl = (path: string): string => {
  if (!path) return "/placeholder.svg";
  if (path.startsWith("http")) return path;
  return `${API_BASE}${path}`;
};

// Convertir base64 en File
export const base64ToFile = (base64String: string, filename: string): File => {
  const arr = base64String.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1] || "image/jpeg";
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) u8arr[n] = bstr.charCodeAt(n);
  return new File([u8arr], filename, { type: mime });
};

// --- BANNERS ---
export const fetchBanners = async () => {
  const res = await fetch(`${API_BASE}/home/banners`);
  if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
  return res.json();
};

export const saveBanner = async (
  id: number,
  imageData: string,
  alt?: string
) => {
  const isBase64 = imageData.startsWith("data:image/");
  const body = isBase64
    ? (() => {
        const form = new FormData();
        form.append("image", base64ToFile(imageData, `banner-${id}.jpg`));
        form.append("alt", alt || "Updated Banner");
        return form;
      })()
    : JSON.stringify({ path: imageData, alt: alt || "Updated Banner" });

  const res = await fetch(`${API_BASE}/home/banners/${id}`, {
    method: "PUT",
    headers: isBase64 ? undefined : { "Content-Type": "application/json" },
    body,
  });

  if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
  return res.json();
};

// --- SECTIONS ---
export const fetchSections = async () => {
  const res = await fetch(`${API_BASE}/sections`);
  if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
  return res.json();
};

export const saveSection = async (
  id: number,
  imageData: string,
  section_name?: string
) => {
  const isBase64 = imageData.startsWith("data:image/");
  const body = isBase64
    ? (() => {
        const form = new FormData();
        form.append("image", base64ToFile(imageData, `section-${id}.jpg`));
        form.append("section_name", section_name || "Updated Section");
        return form;
      })()
    : JSON.stringify({ path: imageData, section_name });

  const res = await fetch(`${API_BASE}/sections/id/${id}`, {
    method: "PUT",
    headers: isBase64 ? undefined : { "Content-Type": "application/json" },
    body,
  });

  if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
  return res.json();
};

// --- GALLERY ---
export const fetchGallery = async () => {
  const res = await fetch(`${API_BASE}/gallery`);
  if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
  return res.json();
};

export const saveGalleryImage = async (
  id: number,
  imageData: string,
  alt?: string
) => {
  const isBase64 = imageData.startsWith("data:image/");
  const body = isBase64
    ? (() => {
        const form = new FormData();
        form.append("image", base64ToFile(imageData, `gallery-${id}.jpg`));
        form.append("alt", alt || "Gallery Image");
        return form;
      })()
    : JSON.stringify({ path: imageData, alt: alt || "Updated Gallery Image" });

  const res = await fetch(`${API_BASE}/gallery/${id}`, {
    method: "PUT",
    headers: isBase64 ? undefined : { "Content-Type": "application/json" },
    body,
  });

  if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
  return res.json();
};