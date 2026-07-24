const API_URL = "http://127.0.0.1:8000";

export async function getStatus() {
  const response = await fetch(`${API_URL}/status`);
  if (!response.ok) {
    throw new Error("Failed to fetch status");
  }
  return response.json();
}