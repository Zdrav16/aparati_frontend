import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", 
});

// Търсене на фирми
export const searchFirms = (filter, query) => {
  if (filter === "eik") {
    return api.get(`/search?eik=${query}`);
  }
  if (filter === "kasa_no") {
    return api.get(`/search?kasa_no=${query}`);
  }
  if (filter === "name") {
    return api.get(`/search?name=${query}`);
  }
};

// Устройства
export async function getDevice(id) {
  const res = await api.get(`/devices/${id}`);
  return res.data;
}

// Организации
export async function updateFirm(id, data) {
  const res = await api.put(`/firms/${id}`, data);
  return res.data;
}

// Договори
export async function createContract(deviceId, data) {
  const res = await api.post(`/devices/${deviceId}/contracts`, data);
  return res.data;
}

// Сертификати
export async function createCertificate(deviceId, data) {
  const res = await api.post(`/devices/${deviceId}/certificates`, data);
  return res.data;
}
