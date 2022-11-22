import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLoginFn } from "../redux/reduxModul";

const Nav = (props) => {
  const { userLoginFn, displayCartFn } = props;
  return (
    <>
      <section className="main container top">
        <div className="logo2">
          <img src="../img/logo.png" alt="" />
        </div>
        {/* <div className="divrong">  </div> */}
        <nav className="col-md8 navs nav-link navbar navbar-expand-lg navbar-light">
          <div className="navh">
            <div className="navh3">
              <Link className="navbar-brand" to="/">
                Trang Chủ
              </Link>
              <div className="gachduoi"></div>
            </div>
          </div>
          <div className="navh">
            <div className="navh3">
              <Link className="navbar-brand" to="/introduce">
                Giới Thiệu
              </Link>
              <div className="gachduoi"></div>
            </div>
          </div>
          <div className="navh">
            <div className="navh3">
              <Link className="navbar-brand" to="/products">
                Sản Phẩm
              </Link>
              <div className="gachduoi"></div>
            </div>
          </div>
          <div className="navh">
            <div className="navh3">
              <Link className="navbar-brand" to="/news">
                Tin Tức
              </Link>
              <div className="gachduoi"></div>
            </div>
          </div>
          <div className="navh">
            <div className="navh3">
              <Link className="navbar-brand" to="/partners">
                Đối Tác
              </Link>
              <div className="gachduoi"></div>
            </div>
          </div>
          <div className="navh">
            <div className="navh3">
              <Link className="navbar-brand " to="/contract">
                Liên Hệ
              </Link>
              <div className="gachduoi"></div>
            </div>
          </div>
          <div className="navh">
            {props.userLogin.isLogin && (
              <div onClick={displayCartFn} className="navh3">
                <Link className="navbar-brand ">
                  <li>
                    <i class="fa-solid fa-cart-shopping"></i> cart
                  </li>
                </Link>
              </div>
            )}
          </div>
          <div className="user-nav">
            <div className="user-nav-hv">
              <div className="users-img-container2 nav-hv ">
                {props.userLogin.isLogin ? (
                  <>
                    <img
                      className="user-img2 "
                      src="http://www.gravatar.com/avatar/fabac475498dabc37e3c268c4d7334c5?s=325&r=g&d=mm"
                      alt="oke"
                    ></img>
                    <div className="name_user2">
                      <h6>{props.userLogin.name}</h6>
                    </div>
                    <div className="item-user">
                      <div className="pointer-top"></div>
                      <ul>
                        <li
                          onClick={() => {
                            userLoginFn(0, "NoUser");
                          }}
                        >
                          <Link className="navbar-brand " to="/login">
                            <i class="fa-solid fa-right-from-bracket"></i>{" "}
                            Longout
                          </Link>
                        </li>
                        <li>
                          <Link className="navbar-brand " to="/profile">
                            <i class="fa-solid fa-user"></i> profile
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      style={{ paddingLeft: 100 }}
                      className="mt-5 mr-2"
                      to="/login"
                    >
                      <span
                        style={{ paddingLeft: 20, paddingRight: 40 }}
                        className="btn btn-primary me-2 "
                      >
                        Login
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
        <div className="navh2">
          <div className="button2">
            <div className="span"></div>
            <div className="span"></div>
            <div className="span"></div>
            <div className="span"></div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({ userLogin: state.userLogin });
const mapDispatchToProps = { userLoginFn };
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
