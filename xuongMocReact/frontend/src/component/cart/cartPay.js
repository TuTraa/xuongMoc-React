import { connect } from "react-redux";
import { userProductFn } from "../redux/reduxModul";

const CartPay = (props) => {
  const { userProductFn } = props;
  let totalPrice = props.products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="pay">
      <div className="khoangtrong_profile"></div>
      <div className="container payContent">
        <div className="addressPay mt-5 ml-5">
          <p className="text-danger">
            {" "}
            <i class="fa-solid fa-location-dot"></i> địa chỉ nhận hàng
          </p>
          <div className="form-group row mt-4 ">
            <div className="col-sm-3 text-dark">Trần Văn A - 0984654123</div>
            <div className="col-sm-8 text-secondary">
              17 Ngách 225/7 Quan Hoa -cầu giấy-Hà Nội, Phường Quan Hoa, Quận
              Cầu Giấy, Hà Nội
            </div>
            <div className="col-sm-1 text-primary">Thay đổi</div>
          </div>
        </div>
      </div>
      <div className="khoangtrong_profile"></div>
      <div className="container payContent">
        <div className="addressPay mt-5 ml-5">
          <div className="form-group row mt-4 ">
            <div className="col-sm-8 text-dark">Sản Phẩm</div>
            <div className="col-sm-1 text-secondary ">Giá</div>
            <div className="col-sm-1 text-secondary">số lượng</div>
            <div className="col-sm-2 text-secondary">Thành tiền</div>
          </div>
        </div>
        <div className="productPay mt-5 ml-5">
          {props.products.map((x) => {
            return (
              <div className="form-group row mt-4 ">
                <div className="col-sm-1 imgPay ">
                  <img src={x.url} className="mt-0"></img>
                </div>
                <div className="col-sm-5 text-dark ">
                  <p className="">{x.name}</p>
                </div>
                <div className="col-sm-2 imgPay ">
                  <p className="text-secondary">Loại : xx</p>
                </div>
                <div className="col-sm-1 text-secondary mt-0">
                  <p>{x.price}</p>
                </div>
                <div className="col-sm-1 text-secondary">
                  <p>{x.quantity}</p>
                </div>
                <div className="col-sm-2 text-secondary">
                  {" "}
                  <p>{x.price * x.quantity}</p>{" "}
                </div>
              </div>
            );
          })}

          <hr />
          <div className="form-group row mt-4 sum_money_Pay ">
            <hr />
            <div className="col-sm-8  text-dark "></div>
            <div className="col-sm-2 text-secondary">
              {" "}
              <p>Tổng tiền :</p>{" "}
            </div>
            <div className="col-sm-2 text-secondary text-danger">
              {" "}
              <p>{totalPrice} đ</p>{" "}
            </div>
          </div>
          <hr />
          <div className="form-group row mt-4   ">
            <hr />
            <div className="col-sm-9 text-dark ">
              <p className="text-secondary">
                Nhấn đặt hàng là đồng ý với điều khoản của chúng tôi
              </p>
            </div>
            <div className=" text-secondary btn-pay col-sm-3 mt-4">
              <button
                onClick={() => {
                  userProductFn(props.userLogin.id, props.products);
                }}
                type="button"
                class="btn btn-danger"
              >
                Đặt Hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="khoangtrong_profile"></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userLogin: state.userLogin,
  products: state.products,
});
const mapDispatchToProps = { userProductFn };
export default connect(mapStateToProps, mapDispatchToProps)(CartPay);
