// src/mock/data.js

export const firms = [
  {
    id: 1,
    name: "Фирма Х ООД",
    eik: "123456789",
    phone: "0888123456",
    address: "София, бул. България 100",
    devices: [
      {
        id: 1,
        number: "AP12345",
        fiscalMemory: "FM98765",
        objectName: "Магазин Център",
        objectAddress: "София, ул. Пиротска 10",
        contracts: [
          { id: 1, number: "C-001", startDate: "2023-01-01", endDate: "2024-01-01", status: "активен" },
          { id: 2, number: "C-002", startDate: "2022-01-01", endDate: "2023-01-01", status: "изтекъл" }
        ],
        certificates: [
          { id: 1, number: "S-001", contractNumber: "C-001", fdrid: "FDR1234", date: "2023-01-02" }
        ]
      },
      {
        id: 2,
        number: "AP67890",
        fiscalMemory: "FM54321",
        objectName: "Офис Люлин",
        objectAddress: "София, ж.к. Люлин 7",
        contracts: [],
        certificates: []
      }
    ]
  },
  {
    id: 2,
    name: "Фирма Y ЕООД",
    eik: "987654321",
    phone: "0899123456",
    address: "Пловдив, ул. Капитан Райчо 55",
    devices: [
      {
        id: 3,
        number: "AP22222",
        fiscalMemory: "FM11111",
        objectName: "Склад",
        objectAddress: "Пловдив, бул. Марица",
        contracts: [],
        certificates: []
      }
    ]
  }
];
// src/mock/data.js

export const mockDevices = [
  {
    id: 1,
    name: "Апаратура X1",
    serial: "SN123456",
    firm: "Фирма АД",
    contracts: [
      { description: "Годишна поддръжка", date: "2025-01-15" },
      { description: "Разширена гаранция", date: "2025-06-01" },
    ],
    certificates: [
      { number: "CERT-001", date: "2024-12-20" },
      { number: "CERT-002", date: "2025-07-10" },
    ],
  },
  {
    id: 2,
    name: "Апаратура Y2",
    serial: "SN654321",
    firm: "Техно ЕООД",
    contracts: [],
    certificates: [],
  },
];

