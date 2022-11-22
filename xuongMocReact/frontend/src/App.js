import { useEffect, useState } from "react";
import "./component/css/font.css";
import "./app.css";
import axios from "axios";
import Footer from "./component/footer/footer";
import Nav from "./component/nav/nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home/home";
import Introuce from "./component/introduce/introduce";
import Products from "./component/product/Products";
import News from "./component/news/news";
import Partner from "./component/partner/partner";
import Contract from "./component/contract/contract";
import Cart from "./component/cart/cart";
import DetailProduct from "./component/detalProduct/detailproduct";
import Login from "./component/login/login";
import Profile from "./component/profile/profile";
import CartPay from "./component/cart/cartPay";
import { connect } from "react-redux";
function App(props) {
  const [isdetail, setdetail] = useState({
    id: 1,
    name: "Giường châu âu",
    price: 1000,
    priceText: "8.999.000 VND",
    oldprice: 1200,
    url: "../img/sp-1.png",
    title: "trắng sữa cực đep",
  });
  const [displaycart, setDisplayCart] = useState(false);
  const [allProduct, setAllProduct] = useState([{}]);
  const [allUssers, setAllUsers] = useState([{}]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("/products");
      return res;
    }
    getData().then((res) => setAllProduct(res.data));
    getData().catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("/users");
      return res;
    }
    getData().then((res) => setAllUsers(res.data));
    getData().catch((err) => console.log(err));
  }, []);
  const displayCartFn = () => {
    if (props.userLogin.isLogin == false) {
      window.location.pathname = "login";
    } else {
      setDisplayCart(true);
    }
  };
  const unDisplayCartFn = () => {
    setDisplayCart(false);
  };
  const updateDetail = (obj) => {
    setdetail(obj);
  };
  return (
    <Router>
      <Nav displayCartFn={displayCartFn} />
      <Routes>
        <Route path="/" element={<Home allProduct={allProduct} />} />
        <Route path="/introduce" element={<Introuce />} />
        <Route
          path="/products"
          element={
            <Products
              allProduct={allProduct}
              displayCartFn={displayCartFn}
              updateDetail={updateDetail}
            />
          }
        />
        <Route path="/news" element={<News />} />
        <Route path="/partners" element={<Partner />} />
        <Route path="/contract" element={<Contract />} />
        <Route
          path="/detailproduct"
          element={
            <DetailProduct isdetail={isdetail} displayCartFn={displayCartFn} />
          }
        />
        <Route path="/login" element={<Login allUssers={allUssers} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pay" element={<CartPay />} />
      </Routes>
      {displaycart && <Cart unDisplayCartFn={unDisplayCartFn} />}
      <Footer />
    </Router>
  );
}

const mapStateToProps = (state) => ({ userLogin: state.userLogin });
export default connect(mapStateToProps)(App);
