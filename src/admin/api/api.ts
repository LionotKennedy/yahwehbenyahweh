// api.ts
const API_BASE_URL = "http://localhost:5000/api/home-contenu";
const API_BASE_URL_2 = "http://localhost:5000/api";

// Fonction générique pour récupérer les données
export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};
// Fonction générique pour mettre à jour les données
export const updateData = async (endpoint: string, id: number, data: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error updating ${endpoint}:`, error);
    throw error;
  }
};
// Fonctions spécifiques pour chaque section
export const homeApi = {
  get: () => fetchData("home"),
  update: (id: number, data: any) => updateData("home", id, data),
};

export const yahwehApi = {
  get: () => fetchData("yahweh"),
  update: (id: number, data: any) => updateData("yahweh", id, data),
};

export const yahwehBenApi = {
  get: () => fetchData("yahweh-ben"),
  update: (id: number, data: any) => updateData("yahweh-ben", id, data),
};

export const followersApi = {
  get: () => fetchData("followers"),
  update: (id: number, data: any) => updateData("followers", id, data),
};

export const culturalAttireApi = {
  get: () => fetchData("cultural-attire"),
  update: (id: number, data: any) => updateData("cultural-attire", id, data),
};

export const contactApi = {
  get: () => fetchData("contacts"),
  update: (id: number, data: any) => updateData("contacts", id, data),
};

export const fetchData_2 = async (endpoint: string) => {
 const res = await fetch(`${API_BASE_URL_2}/${endpoint}`)
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
  const json = await res.json()
  return json.success && Array.isArray(json.data) && json.data.length > 0
    ? json.data[0]
    : null
};

// PUT
export const updateData_2 = async (
endpoint: string,
  id: number,
  payload: Record<string, any>
) => {
  const res = await fetch(`${API_BASE_URL_2}/${endpoint}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
  return res.json()
}