import axios from 'axios';

const API_BASE = 'http://127.0.0.1:8000';

export async function searchAparati(criterion, value) {
  try {
    const res = await axios.get(`${API_BASE}/aparati/`);
    return res.data.filter(aparat => {
      if (criterion === 'bulstat') return aparat.bulstat?.includes(value);
      if (criterion === 'kasa_no') return aparat.kasa_no?.includes(value);
      if (criterion === 'firma') return aparat.firma_name?.toLowerCase().includes(value.toLowerCase());
      return false;
    });
  } catch (err) {
    console.error('Грешка при търсене:', err);
    return [];
  }
}
