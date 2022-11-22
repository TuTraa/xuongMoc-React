import { useState } from "react";
import ProfileAdress from "./profileAdress";
import ProfileBank from "./profileBank";
import Bought from "./profileBought";
import ProfileEdit from "./profileEdit";
import UpdatePass from "./profileUpdatePass";
import { connect } from "react-redux";

const Profile = (props) => {
  const [isProfile, setProfile] = useState(0);
  const routerProfile = (x) => {
    setProfile(x);
  };
  const displayProfile = () => {
    if (isProfile == 3) {
      return <ProfileAdress />;
    }
    if (isProfile == 1) {
      return <ProfileEdit />;
    }
    if (isProfile == 2) {
      return <ProfileBank />;
    }
    if (isProfile == 4) {
      return <UpdatePass />;
    }
    if (isProfile == 5) {
      return <Bought />;
    }
  };
  return (
    <div className="profile">
      <div className="khoangtrong_profile"></div>
      <div className=" container profile_form ">
        <div className="row ">
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2    profile_left">
            <div className="users-img-container">
              <img
                className="user-img "
                src="http://www.gravatar.com/avatar/fabac475498dabc37e3c268c4d7334c5?s=325&r=g&d=mm"
                alt="oke"
              ></img>
              <div className="name_user">
                <h6>{props.userLogin.name}</h6>
              </div>
            </div>

            <div className="myProfile">
              <div className="myProfile_top">
                <i className="fa-regular fa-user" />
                <p
                  onClick={() => {
                    routerProfile(1);
                  }}
                >
                  Tài Khoản Của Tôi
                </p>
              </div>
              <div className="myProfile_bottom">
                <p
                  onClick={() => {
                    routerProfile(1);
                  }}
                >
                  Hồ Sơ
                </p>
                <p
                  onClick={() => {
                    routerProfile(2);
                  }}
                >
                  Ngân Hàng
                </p>
                <p
                  onClick={() => {
                    routerProfile(3);
                  }}
                >
                  Địa chỉ
                </p>
                <p
                  onClick={() => {
                    routerProfile(4);
                  }}
                >
                  Đổi Mật Khẩu
                </p>
              </div>
              <div className="myProfile_top">
                <i className="fa-sharp fa-solid fa-bag-shopping"></i>
                <p
                  onClick={() => {
                    routerProfile(5);
                  }}
                >
                  Đơn mua
                </p>
              </div>
            </div>
          </div>
          {displayProfile()}
        </div>
      </div>
      <div className="khoangtrong_profile2"></div>
    </div>
  );
};

const mapStateToProps = (state) => ({ userLogin: state.userLogin });
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
