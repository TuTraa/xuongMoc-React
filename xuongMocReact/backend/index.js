const express = require("express");
const app = express();
const products = [
  {
    id: 1,
    name: "Giường châu âu",
    price: 6999000,
    priceText: "6.999.000 VND",
    oldprice: "9.999.000",
    url: "../img/sp-1.png",
    title: "trắng sữa cực đep",
  },
  {
    id: 2,
    name: "Bàn Làm Việc",
    price: 8999000,
    priceText: "8.999.000 VND",
    oldprice: "19.8888.000 VND",
    url: "../img/sp-2.png",
    title: "trắng sữa cực đep",
  },
  {
    id: 3,
    name: "Tủ Quần Áo",
    price: 11999000,
    priceText: "11.999.000 VND",
    oldprice: "14.499.000 VND",
    url: "../img/sp-3.png",
    title: "trắng sữa cực đep",
  },
  {
    id: 4,
    name: "Kệ Bê Đồ",
    price: 2699000,
    priceText: "2.999.000 VND",
    oldprice: "15.999.000 VND",
    url: "../img/sp-4.png",
    title: "4 ngăn trắng gỗ",
  },
  {
    id: 5,
    name: "Bàn Uống Nước",
    price: 3499000,
    priceText: "3.999.000 VND",
    oldprice: "15.999.000 VND",
    url: "../img/phong-khach-ban-uong-nuoc-2.png",
    title: "trắng sữa cực đep",
  },
  {
    id: 6,
    name: "Kệ Đầu Dường",
    price: 5999000,
    priceText: "5.999.000 VND",
    oldprice: "8.999.000 VND",
    url: "../img/ke-dau-giuong.png",
    title: "trắng sữa cực đep",
  },
  {
    id: 7,
    name: "Kệ Ti Vi",
    price: 2999000,
    priceText: "2.999.000 VND",
    oldprice: "15.999.000 VND",
    url: "../img/phong-khach-ke-ti-vi.png",
    title: "trắng sữa cực đep",
  },
  {
    id: 8,
    name: "Bàn Uống Nước",
    price: 3999000,
    priceText: "3.999.000 VND",
    oldprice: "15.999.000 VND",
    url: "../img/phong-khach-ban-uong-nuoc-2.png",
    title: "Size lớn ,trắng sữa",
  },
];
const users = [
  {
    id: 1,
    name: "Nam Vũ",
    account: "tutran",
    pass: 123456,
  },
  {
    id: 2,
    name: "Tú Trần",
    account: "tutran2",
    pass: 123456,
  },
  {
    id: 3,
    name: "Đạt Hoàng",
    account: "tutran3",
    pass: 123456,
  },
  {
    id: 4,
    name: "Hoa Phạm",
    account: "tutran4",
    pass: 123456,
  },
];

app.get("/products", (req, res) => {
  res.status(200).json(products);
});
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.listen("8080", () => {
  console.log("server is running...");
});
