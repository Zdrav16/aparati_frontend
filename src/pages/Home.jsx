import { useState } from "react";
import SearchResult from "../components/SearchResult";
import AparatDetailsModal from "../components/AparatDetailsModal"; // Добавено

export default function Home() {
  const [criteria, setCriteria] = useState("eik");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const [selectedKasaNo, setSelectedKasaNo] = useState(null); // Добавено
  const [showModal, setShowModal] = useState(false); // Добавено

  async function handleSearch() {
    const res = await fetch(`http://localhost:8000/search?${criteria}=${query}`);
    const data = await res.json();
    console.log("Резултат от API:", data);
    setResults(data);
  }

  function handleRowDoubleClick(kasaNo) {
    setSelectedKasaNo(kasaNo);
    setShowModal(true);
  }

  return (
    <div>
      <select value={criteria} onChange={e => setCriteria(e.target.value)}>
        <option value="eik">ЕИК</option>
        <option value="kasa_no">№ на апарат</option>
        <option value="name">Име на фирма</option>
      </select>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Търси..."
      />
      <button onClick={handleSearch}>Търси</button>

      <SearchResult results={results} onRowDoubleClick={handleRowDoubleClick} />

      <AparatDetailsModal
        kasaNo={selectedKasaNo}
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
