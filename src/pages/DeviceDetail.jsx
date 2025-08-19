import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getDevice } from "../services/api";
import TabSystem from "../components/TabSystem";

export default function DeviceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [device, setDevice] = useState(null);
  const [error, setError] = useState(null);

  const [showEditFirm, setShowEditFirm] = useState(false);
  const [showNewContract, setShowNewContract] = useState(false);
  const [showNewCert, setShowNewCert] = useState(false);

  useEffect(() => {
    // Ако идва от ResultsTable (navigate state)
    if (location.state) {
      const row = location.state;
      setDevice({
        id: row.aparat_id,
        kasa_no: row.kasa_no,
        model: row.model || "", // ако бекендът не връща, оставяме празно
        fp: row.fp || "",       // същото
        firm: {
          id: row.firm_id,
          name: row.firm_name,
          eik: row.eik,
          address: row.object_address,
          tel: row.firm_tel,
        },
        contracts: row.contracts || [],
        certificates: row.certificates || [],
      });
      setError(null);
    } else {
      // ако се отваря директно през URL
      async function fetchDevice() {
        try {
          const data = await getDevice(id);
          setDevice(data);
          setError(null);
        } catch (err) {
          if (err.response && err.response.status === 404) {
            setError("Устройството не е намерено");
          } else {
            setError("Грешка при зареждане на устройството");
          }
          setDevice(null);
        }
      }
      fetchDevice();
    }
  }, [id, location.state]);

  if (error) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold text-red-600">{error}</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Назад
        </button>
      </div>
    );
  }

  if (!device) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Зареждане...</h2>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          {device.firm?.name || "Детайли за апарат"}
        </h1>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg"
        >
          Назад
        </button>
      </div>

      <TabSystem
        device={device}
        setDevice={setDevice}
        showEditFirm={showEditFirm}
        setShowEditFirm={setShowEditFirm}
        showNewContract={showNewContract}
        setShowNewContract={setShowNewContract}
        showNewCert={showNewCert}
        setShowNewCert={setShowNewCert}
      />
    </div>
  );
}
