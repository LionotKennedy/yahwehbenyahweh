const RACI_URL = "http://localhost:5000";

const API_BASE_URL = `${RACI_URL}/api`;

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