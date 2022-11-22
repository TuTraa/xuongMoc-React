import { useState } from "react";
const ProfileEdit = () => {
  const [isform, setform] = useState(false);
  const displayFormFN = () => {
    setform(!isform);
  };
  const editProfileFn = () => {
    alert("comming soon");
  };
  return (
    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 profile_right">
      <div className="profile_right_top">
        <p className="text_adress_profile">Hồ sơ của tôi </p>
        <div
          className="btn_them"
          onClick={() => {
            displayFormFN();
          }}
        >
          {" "}
          <p>
            {" "}
            <i class="fa-solid fa-plus"></i> Chỉnh sửa hồ sơ{" "}
          </p>
        </div>
      </div>
      {isform && (
        <form className="form_adress">
          <div className="form-group row">
            <div className="col-sm-1"></div>
            <label className="col-sm-2 col-form-label">Họ và Tên</label>
            <div className="col-sm-5">
              <input id="tuoiSV" type="text" className="form-control" />
            </div>
            <div className="col-sm-4"></div>
          </div>
          <div className="form-group row">
            <div className="col-sm-1"></div>
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-5">
              <input id="tuoiSV" type="email" className="form-control" />
            </div>
            <div className="col-sm-4"></div>
          </div>
          <div className="form-group row">
            <div className="col-sm-1"></div>
            <label className="col-sm-2 col-form-label">Số Điện Thoại</label>
            <div className="col-sm-5">
              <input id="tuoiSV" type="number" className="form-control" />
            </div>
            <div className="col-sm-4"></div>
          </div>
          <div className="form-group row">
            <div className="col-sm-1"></div>
            <label className="col-sm-2 col-form-label">Địa chỉ</label>
            <div className="col-sm-5">
              <input id="tuoiSV" type="text" className="form-control" />
            </div>
            <div className="col-sm-4"></div>
          </div>
          <div onClick={editProfileFn} className="form-group row">
            <div className="col-sm-5"></div>
            <span className="btn btn-primary me-2 col-sm-1">Submit</span>
            <div className="col-sm-6"></div>
          </div>
        </form>
      )}
      <hr />
      <p>Thông tin user:</p>
      <form className="form_adress">
        <div className="form-group row">
          <div className="col-sm-1"></div>
          <label className="col-sm-2 col-form-label">Họ và Tên:</label>
          <div className="col-sm-5">
            <p>Trần Văn A</p>
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="form-group row">
          <div className="col-sm-1"></div>
          <label className="col-sm-2 col-form-label">Email:</label>
          <div className="col-sm-5">
            <p>utc@gmail.com</p>
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="form-group row">
          <div className="col-sm-1"></div>
          <label className="col-sm-2 col-form-label">Số Điện Thoại:</label>
          <div className="col-sm-5">
            <p>0123456789</p>
          </div>
          <div className="col-sm-4"></div>
        </div>
        <div className="form-group row">
          <div className="col-sm-1"></div>
          <label className="col-sm-2 col-form-label"> địa chỉ </label>
          <div className="col-sm-5">
            <p>Giao Thông Vận Tải</p>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
