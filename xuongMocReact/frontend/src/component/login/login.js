import { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/login.css";
import Register from "./register";
import { connect } from "react-redux";
import { userLoginFn } from "../redux/reduxModul";
const Login = (props) => {
  const { allUssers, userLoginFn } = props;
  const [isRegister, setRegister] = useState(false);
  let { register, handleSubmit } = useForm();
  const statusRegister = () => {
    setRegister(!isRegister);
  };
  const submitData = (data) => {
    let log = allUssers.find((x) => x.account == data.account);
    if (log) {
      if (log.pass == data.pass) {
        // window.location.pathname='/';
        //    window.location.href='/';
        alert("đăng nhập thành công");
        userLoginFn(log.id, log.name);
      } else {
        alert("mật khẩu không chính xác");
      }
    } else {
      alert("tài khoản không tồn tại");
    }
    // addOrUpdateFunc(data)
  };
  return (
    <div class="login">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title">
              {isRegister ? "REGISTER" : "LOGIN"}
            </div>
            <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
                <form onSubmit={handleSubmit(submitData)}>
                  <div class="form-group">
                    <label class="form-control-label">USERNAME</label>
                    <input
                      {...register("account")}
                      type="text"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">PASSWORD</label>
                    <input
                      {...register("pass")}
                      type="password"
                      class="form-control"
                    />
                  </div>
                  {isRegister && <Register />}
                  <div class="col-lg-12 loginbttm">
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 login-btm login-text"></div>
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 login-btm login-button">
                      <button type="submit" class="btn btn-outline-primary">
                        SUBMIT
                      </button>
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 login-btm login-button"></div>
                  </div>
                </form>
                <h6 className="status" onClick={statusRegister}>
                  {isRegister ? "Quay trở lại" : "Bạn chưa có tài khoản ?"}
                </h6>
              </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = { userLoginFn };
export default connect(mapStateToProps, mapDispatchToProps)(Login);
