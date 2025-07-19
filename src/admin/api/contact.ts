// // api/contact.ts
// const API_BASE_URL = "http://localhost:5000/api/contact";

// export interface ContactData {
//   id: number;
//   path: string;
//   alt: string | null;
//   created_at: string;
//   updated_at: string;
// }

// const getImageUrl = (path: string): string => {
//   if (!path) return "/placeholder.svg";
//   if (path.startsWith("http")) return path;
//   return `http://localhost:5000${path}`;
// };

// export const fetchContact = async (): Promise<ContactData[]> => {
//   const res = await fetch(API_BASE_URL, { method: "GET" });
//   if (!res.ok) throw new Error(`HTTP ${res.status}`);
//   return await res.json();
// };

// export const updateContact = async (
//   id: number,
//   fileOrPath: string | File,
//   alt: string = "Updated Contact"
// ) => {
//   let body: FormData | string;
//   const headers: Record<string, string> = {};

//   if (fileOrPath instanceof File) {
//     // Upload via FormData
//     const formData = new FormData();
//     formData.append("image", fileOrPath);
//     formData.append("alt", alt);
//     body = formData;
//     // Ne PAS définir Content-Type, le navigateur le fait
//   } else {
//     // URL existante
//     headers["Content-Type"] = "application/json";
//     body = JSON.stringify({ path: fileOrPath, alt });
//   }

//   const res = await fetch(`${API_BASE_URL}/${id}`, {
//     method: "PUT",
//     headers,
//     body,
//   });
//   if (!res.ok) throw new Error(`HTTP ${res.status}`);
//   return res.json();
// };





























const API_BASE_URL = "http://localhost:5000/api";

// GET
export const fetchContactAPI = async () => {
  const res = await fetch(`${API_BASE_URL}/contact`);
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};

// PUT
export const updateContactAPI = async (id: number, body: FormData | string, headers: Record<string, string> = {}) => {
  const res = await fetch(`${API_BASE_URL}/contact/${id}`, {
    method: "PUT",
    headers,
    body,
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
};