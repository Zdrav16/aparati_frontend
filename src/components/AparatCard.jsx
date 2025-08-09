import React from 'react';

const AparatCard = ({ aparat }) => {
  return (
    <div className="border p-4 rounded shadow-md mb-2">
      <p><strong>Фирма:</strong> {aparat.firma_name}</p>
      <p><strong>Булстат:</strong> {aparat.bulstat}</p>
      <p><strong>Адрес:</strong> {aparat.address}</p>
      <p><strong>№ на апарат:</strong> {aparat.kasa_no}</p>
    </div>
  );
};

export default AparatCard;
