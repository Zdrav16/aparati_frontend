import { useState } from "react";

export default function NewContractModal({ deviceId, onClose, onSave }) {
  const [formData, setFormData] = useState({ dog_no: "", dot: "", ddo: "", isprekrat: false });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleCheck = (e) => setFormData({ ...formData, isprekrat: e.target.checked });

  const handleSave = () => onSave(formData);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4">Нов договор</h2>
        <input name="dog_no" value={formData.dog_no} onChange={handleChange} placeholder="№ Договор" className="w-full mb-2 p-2 border rounded" />
        <input type="date" name="dot" value={formData.dot} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
        <input type="date" name="ddo" value={formData.ddo} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
        <label className="flex items-center mb-2">
          <input type="checkbox" checked={formData.isprekrat} onChange={handleCheck} className="mr-2" /> Прекратен
        </label>
        <div className="flex justify-end mt-4 space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Отказ</button>
          <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded">Добави</button>
        </div>
      </div>
    </div>
  );
}
