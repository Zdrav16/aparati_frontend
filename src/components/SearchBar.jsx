import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [criterion, setCriterion] = useState('bulstat');
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(criterion, query);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4">
      <select
        value={criterion}
        onChange={(e) => setCriterion(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="bulstat">ЕИК</option>
        <option value="kasa_no">№ на апарат</option>
        <option value="firma">Име на фирма</option>
      </select>

      <input
        type="text"
        placeholder="Въведи стойност..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">
        Търси
      </button>
    </div>
  );
};

export default SearchBar;
