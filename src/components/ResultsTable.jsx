import { useNavigate } from "react-router-dom";

export default function ResultsTable({ results }) {
  const navigate = useNavigate();

  if (!results || results.length === 0) {
    return <p className="text-gray-500">Няма резултати...</p>;
  }

  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-2 py-1">Фирма</th>
          <th className="border px-2 py-1">ЕИК</th>
          <th className="border px-2 py-1">Обект</th>
          <th className="border px-2 py-1">Адрес</th>
          <th className="border px-2 py-1">№ Апарат</th>
          <th className="border px-2 py-1">Телефон</th>
        </tr>
      </thead>
      <tbody>
        {results.map(row => (
          <tr
            key={row.aparat_id}
            className="hover:bg-gray-50 cursor-pointer"
            onDoubleClick={() =>
              navigate(`/device/${row.aparat_id}`, { state: row })
            }
          >
            <td className="border px-2 py-1">{row.firm_name}</td>
            <td className="border px-2 py-1">{row.eik}</td>
            <td className="border px-2 py-1">{row.object_name}</td>
            <td className="border px-2 py-1">{row.object_address}</td>
            <td className="border px-2 py-1">{row.kasa_no}</td>
            <td className="border px-2 py-1">{row.firm_tel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
