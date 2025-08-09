export default function SearchResult({ results, onRowDoubleClick }) {
  if (!results || results.length === 0) return <p>Няма резултати.</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Име на фирма</th>
          <th>ЕИК</th>
          <th>Име на обект</th>
          <th>Адрес</th>
          <th>№ на апарат</th>
          <th>Телефон</th>
        </tr>
      </thead>
      <tbody>
        {results.map((row, idx) => (
          <tr
            key={idx}
            onDoubleClick={() => onRowDoubleClick(row.kasa_no)}
            style={{ cursor: "pointer" }}
          >
            <td>{row.firm_name}</td>
            <td>{row.eik}</td>
            <td>{row.object_name}</td>
            <td>{row.object_address}</td>
            <td>{row.kasa_no}</td>
            <td>{row.firm_tel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
