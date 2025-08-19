import { useState } from "react";

export default function NewCertificateModal({ deviceId, onClose, onSave }) {
  const [formData, setFormData] = useState({ nsvid: "", dsvid: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSave = () => onSave(formData);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4">Ново свидетелство</h2>
        <input name="nsvid" value={formData.nsvid} onChange={handleChange} placeholder="№ Свидетелство" className="w-full mb-2 p-2 border rounded" />
        <input type="date" name="dsvid" value={formData.dsvid} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
        <div className="flex justify-end mt-4 space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Отказ</button>
          <button onClick={handleSave} className="px-4 py-2 bg-purple-600 text-white rounded">Добави</button>
        </div>
      </div>
    </div>
  );
}
