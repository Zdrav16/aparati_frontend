export default function SearchBar({ filter, setFilter, query, setQuery, onSearch }) {
  return (
    <div className="flex gap-4 items-center mb-4">
      <label>
        <input
          type="radio"
          value="eik"
          checked={filter === "eik"}
          onChange={e => setFilter(e.target.value)}
        />
        ЕИК
      </label>
      <label>
        <input
          type="radio"
          value="number"
          checked={filter === "number"}
          onChange={e => setFilter(e.target.value)}
        />
        № Апарат
      </label>
      <label>
        <input
          type="radio"
          value="name"
          checked={filter === "name"}
          onChange={e => setFilter(e.target.value)}
        />
        Фирма
      </label>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Въведи търсене..."
        className="border p-1 rounded"
      />
      <button
        onClick={onSearch}
        className="bg-red-500 text-white px-4 py-1 rounded"
      >
        Търси
      </button>
    </div>
  );
}
