import { useState } from "react";

export default function EditFirmModal({ firm, onClose, onSave }) {
  const [formData, setFormData] = useState({ ...firm });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSave = () => onSave(formData);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4">Редактиране на фирма</h2>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Име" className="w-full mb-2 p-2 border rounded" />
        <input name="eik" value={formData.eik} onChange={handleChange} placeholder="ЕИК" className="w-full mb-2 p-2 border rounded" />
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Адрес" className="w-full mb-2 p-2 border rounded" />
        <input name="tel" value={formData.tel} onChange={handleChange} placeholder="Телефон" className="w-full mb-2 p-2 border rounded" />
        <div className="flex justify-end mt-4 space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Отказ</button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">Запази</button>
        </div>
      </div>
    </div>
  );
}
