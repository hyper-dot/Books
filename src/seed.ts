import { prisma } from "./lib/prisma";

const item = ["Switch Board", "Bulb", "Wire 15mm", "Iron", "Heater"];

for (let i of item) {
  const data = await prisma.item.create({
    data: {
      item_name: i,
    },
  });
  console.log(data);
}

// Suppliers
const suppliers = [
  {
    name: "Mahalaxmi Suppliers",
    contact: "05711111",
    vat: "111111",
    address: "Hetauda",
    payable: 0,
  },
  {
    name: "Tribhuvan University",
    contact: "05722222",
    vat: "222222",
    address: "Kathmandu",
    payable: 100000,
  },
  {
    name: "Atal Bihari Bajpai Suppliers",
    contact: "91985652256",
    vat: "333333",
    address: "Gorakhpur",
    payable: 2000,
  },
];

for (let supplier of suppliers) {
  const data = await prisma.supplier.create({
    data: {
      supplier_name: supplier.name,
      contact_no: supplier.contact,
      vat_no: supplier.vat,
      address: supplier.address,
      amount_payable: supplier.payable,
    },
  });

  console.log(data);
}
const disconnect = await prisma.$disconnect();

console.log(disconnect);
