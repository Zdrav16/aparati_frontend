import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ResultsTable from "../components/ResultsTable";
import { searchFirms } from "../services/api";

export default function Home() {
  const [filter, setFilter] = useState("eik");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const found = await searchFirms(filter, query.trim());
      setResults(found.data || []); // <-- тук
    } catch (err) {
      console.error("Error searching firms:", err);
      setResults([]); // безопасно при грешка
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Регистър на касови апарати</h1>
      <SearchBar
        filter={filter}
        setFilter={setFilter}
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
      />
      {loading ? (
        <p className="text-gray-500 mt-4">Зареждане...</p>
      ) : (
        <ResultsTable results={results} />
      )}
    </div>
  );
}
