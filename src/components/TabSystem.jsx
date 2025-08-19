import { useState, useEffect } from "react";
import EditFirmModal from "./Modal/EditFirmModal";
import NewContractModal from "./Modal/NewContractModal";
import NewCertificateModal from "./Modal/NewCertificateModal";

export default function TabSystem({
  device,
  setDevice,
  showEditFirm,
  setShowEditFirm,
  showNewContract,
  setShowNewContract,
  showNewCert,
  setShowNewCert,
}) {
  const [activeTab, setActiveTab] = useState("deviceInfo");
  const [contracts, setContracts] = useState([]);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    setContracts(device.contracts || []);
    setCertificates(device.certificates || []);
  }, [device]);

  const tabs = [
    { id: "deviceInfo", title: "Фирма и апарат" },
    { id: "contracts", title: "Договори" },
    { id: "certificates", title: "Свидетелства" },
  ];

  return (
    <div className="space-y-4">
      {/* Навигация таби */}
      <div className="flex space-x-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-2xl transform scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* --- ТАБ 1: Фирма и апарат --- */}
      {activeTab === "deviceInfo" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl shadow-lg">
            <h3 className="text-lg font-bold mb-2">Фирма</h3>
            <p><strong>Име:</strong> {device.firm.name}</p>
            <p><strong>ЕИК:</strong> {device.firm.eik}</p>
            <p><strong>Адрес:</strong> {device.firm.address}</p>
            <p><strong>Телефон:</strong> {device.firm.tel}</p>
            <button
              onClick={() => setShowEditFirm(true)}
              className="mt-3 px-3 py-1 bg-yellow-400 text-white rounded-lg shadow hover:bg-yellow-500"
            >
              Редактирай фирма
            </button>
          </div>
          <div className="p-4 bg-gradient-to-br from-pink-100 to-red-100 rounded-xl shadow-lg">
            <h3 className="text-lg font-bold mb-2">Апарат</h3>
            <p><strong>№ ФУ:</strong> {device.kasa_no}</p>
            <p><strong>№ ФП:</strong> {device.fp}</p>
            <p><strong>Модел:</strong> {device.model}</p>
          </div>
        </div>
      )}

      {/* --- ТАБ 2: Договори --- */}
      {activeTab === "contracts" && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-purple-600">Договори</h2>
            <button
              onClick={() => setShowNewContract(true)}
              className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
            >
              + Нов / Продължи договор
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contracts.length > 0 ? (
              contracts.map((c, i) => (
                <div
                  key={i}
                  className="p-4 bg-gradient-to-tr from-green-100 to-green-200 rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                  <h3 className="font-bold mb-1">Договор № {c.dog_no}</h3>
                  <p className="text-gray-700 text-sm">{c.dot} – {c.ddo}</p>
                  {c.isprekrat && <p className="text-red-600 text-xs">Прекратен</p>}
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">Няма договори</p>
            )}
          </div>
        </div>
      )}

      {/* --- ТАБ 3: Свидетелства --- */}
      {activeTab === "certificates" && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-purple-600">Свидетелства</h2>
            <button
              onClick={() => setShowNewCert(true)}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600"
            >
              + Ново свидетелство
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.length > 0 ? (
              certificates.map((c, i) => (
                <div
                  key={i}
                  className="p-4 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                  <h3 className="font-bold mb-1">Свидетелство № {c.nsvid}</h3>
                  <p className="text-gray-700 text-sm">Дата: {c.dsvid}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">Няма свидетелства</p>
            )}
          </div>
        </div>
      )}

      {/* --- Модали --- */}
      {showEditFirm && (
        <EditFirmModal
          firm={device.firm}
          onClose={() => setShowEditFirm(false)}
          onSave={(updated) => setDevice({ ...device, firm: updated })}
        />
      )}

      {showNewContract && (
        <NewContractModal
          deviceId={device.id}
          onClose={() => setShowNewContract(false)}
          onSave={(newContract) =>
            setDevice({ ...device, contracts: [...contracts, newContract] })
          }
        />
      )}

      {showNewCert && (
        <NewCertificateModal
          deviceId={device.id}
          onClose={() => setShowNewCert(false)}
          onSave={(newCert) =>
            setDevice({ ...device, certificates: [...certificates, newCert] })
          }
        />
      )}
    </div>
  );
}
