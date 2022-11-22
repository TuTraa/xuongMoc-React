import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  updateProducts,
  updateProductsMinus,
  deleteProd,
} from "../redux/reduxModul";
const CartItem = (props) => {
  const { updateProducts, updateProductsMinus, deleteProd } = props;
  return (
    <>
      {props.products.map((x) => {
        const addProducts = () => {
          let obj = {
            id: x.id,
          };
          updateProducts(obj);
        };
        const addProductsMinus = () => {
          let obj = {
            id: x.id,
          };
          updateProductsMinus(obj);
        };
        const deleteProduct = (id) => {
          deleteProd(id);
        };
        return (
          <div className="miniCart-item">
            <div className="cartItem-img">
              <img src={x.url} alt="Liên hệ" />
              <button className="rm" onClick={() => deleteProduct(x.id)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="cartItem-box">
              <div className="cartItem-boxInfo">
                <h3 className="cartItem-infoName">{x.name}</h3>
                <div className="cartItem-infoPrice">
                  <p className="cartItem-newPrice" data-value="0">
                    {x.priceText}
                  </p>
                  <p className="cartItem-newPrice2" data-value={x.oldPrice}>
                    Giá Cũ ₫
                  </p>
                </div>
              </div>
              <div className="cartItem-btnQuantity">
                <div className="cartItem-btnQuantity2">
                  <button onClick={addProductsMinus}>
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <p className="quantity-text">Qty: {x.quantity}</p>
                  <button onClick={addProducts}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => ({ products: state.products });
const mapDispatchToProps = { updateProducts, updateProductsMinus, deleteProd };
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
