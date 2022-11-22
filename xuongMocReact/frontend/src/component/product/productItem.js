import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateProducts } from "../redux/reduxModul";
const ProductItem = (props) => {
  const {
    id,
    name,
    price,
    priceText,
    oldprice,
    url,
    title,
    displayCartFn,
    updateProducts,
    updateDetail,
  } = props;
  const addProducts = () => {
    let obj = {
      id: id,
      name: name,
      price: price,
      priceText: priceText,
      oldprice: oldprice,
      url: url,
      title: title,
    };
    // let isproduct = true;
    // props.products.forEach(element => {
    //   if(obj.id == element.id){
    //     alert("sản phẩm này đã có rồi");
    //     isproduct = false;
    //     return;
    //   }
    // });
    // {isproduct &&  updateProducts(obj);}
    updateProducts(obj);
    displayCartFn();
  };
  const updateDetails = () => {
    let obj = {
      id: id,
      name: name,
      price: price,
      priceText: priceText,
      oldprice: oldprice,
      url: url,
      title: title,
    };
    updateDetail(obj);
  };
  return (
    <>
      <div key={id} className="image-item">
        <div className="image">
          <Link onClick={updateDetails} className="detail" to="/detailproduct">
            <img src={url} alt="" />
          </Link>
        </div>
        <div className="slide_ct">
          <h4>{name}</h4>
          <div className="star">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p>({title})</p>
          <p className="p_price">{priceText}</p>
          {/* <p className="p_price2">12999000</p> */}
          <button onClick={addProducts} className="them2">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({ products: state.products });
const mapDispatchToProps = { updateProducts };
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
// export default ProductItem
