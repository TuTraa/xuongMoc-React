import { useState } from "react";
import { connect } from "react-redux";
const Bought = (props) => {
  const [isform, setform] = useState(false);
  var bought = {
    id: "0",
    product: [],
  };
  if (props.productsBought.find((x) => x.id == props.userLogin.id)) {
    var bought = props.productsBought.find((x) => x.id == props.userLogin.id);
  } else {
    bought = {
      id: "0",
      product: [],
    };
  }
  let totalPrice = bought.product.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 profile_right">
      <div className="profile_right_top">
        <p className="text_adress_profile">
          Đây là tất cả sản phẩm bạn đã mua{" "}
        </p>
      </div>
      <hr className="hr_B" />
      <div className="item_adress">
        {bought.product.map((x) => {
          return (
            <>
              <div className="item_adress_top row">
                <div className="col-sm-2">
                  <img src={x.url} alt="sp1"></img>
                </div>
                <div className="col-sm-8">
                  <p className="infor_SP">
                    {x.name}
                    <br />
                    <br /> số lượng : {x.quantity}
                  </p>
                </div>
                <div className="col-sm-2 ">
                  <p className="textprice">{x.price}</p>
                </div>
              </div>
              <hr />
            </>
          );
        })}

        <div className="item_adress_top row">
          <div className="col-sm-9"></div>
          <div className="col-sm-3 sum_money ">
            <p className="">Tổng số tiền:</p>
            <p className="textprice2">{totalPrice} VND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userLogin: state.userLogin,
  productsBought: state.userProduct,
});
export default connect(mapStateToProps)(Bought);
