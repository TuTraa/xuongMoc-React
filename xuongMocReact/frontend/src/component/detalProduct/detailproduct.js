import { connect } from "react-redux";
import {updateProducts} from "../redux/reduxModul";
const DetailProduct = (props) => {
  const {isdetail,displayCartFn,updateProducts}=props;
  //   const addProducts = () => {
  //     let obj2 = {
  //       id:isdetail.id,
  //       name:isdetail.name,
  //       price:isdetail.price,
  //       priceText:isdetail.priceText,
  //       oldprice:isdetail.oldprice,  
  //       url:isdetail.url,  
  //       title:isdetail.title
  //     };

  //     let isproduct = true;
  //     props.products.forEach(element => {
  //       if(obj2.id == element.id){
  //         alert("sản phẩm này đã có rồi");
  //         isproduct = false;
  //         return;
  //       }
  //     });
  //     {isproduct &&  updateProducts(obj2);}
  //     updateProducts(obj);
  //     console.log(props.products)
  //     displayCartFn();
  // }
  const addProducts2 = () => {
    let obj = {
      id:isdetail.id,
      name:isdetail.name,
      price:isdetail.price,
      priceText:isdetail.priceText,
      oldprice:isdetail.oldprice,  
      url:isdetail.url,  
      title:isdetail.title,
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
    // updateProducts2(obj);
    updateProducts(obj);
    console.log("detail",props.products,obj)
    // console.log(props.products2)
    displayCartFn();
}
    return ( 
        <>
            <div className="khoangtrong"></div>
            <section className="tintuc">
              <div className="tintuc_in container">
                <div className="khoangtrang_1"></div>
                <div className="row">
                  <div className="tintuc_1 col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    <div className="image">
                      <h5>{isdetail.name}</h5>
                      <img src={isdetail.url} 
                      
                      alt="" />
                      <div className="fourimg">
                        <img className="thayanh" src="../img/chitietSP1.jpg" alt="" />
                        <img className="thayanh" src="../img/chitietSP2.jpg" alt="" />
                        <img className="thayanh" src="../img/chitietSP3.jpg" alt="" />
                        <img className="thayanh" src="../img/chitietSP4.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="tintuc_1 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="image">
                      <p className="material">chất liệu</p>
                      <div className="go">
                        <div className="goLim">Gỗ Xồi</div>
                        <div className="goLim">Gỗ <i className="ri-link-m"></i></div>
                      </div>
                      <del>{isdetail.oldprice}VND</del>
                      <p className="price">{isdetail.priceText}VND</p>
                      <div className="insurance">
                        <i className="fa-sharp fa-solid fa-shield-halved"></i> Bảo hành sản phẩm lên tới 36 tháng
                      </div>
                      <div className="btn_detail">
                        <h3 onClick={addProducts2} className="btn2">Thêm vào giỏ hàng</h3>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="detail">
                  <ul>
                    <li><a href="">Đặc trưng</a></li>
                    <li><a href="">Thông Số</a></li>
                    <li><a href="">Bảo quản</a></li>
                    <li><a href="">Bảo Hành</a></li>
                    <li><a href="">Cam Kết</a></li>
                  </ul>
                  <div className="detail-line"></div>
                  <div className="detail-text">
                    <p>
                      - Bàn cà phê cứng đơn giản với kệ mở <br />
                      - Phong cách hình học tối giản <br />
                      - Kệ bên trong có kích thước hoàn hảo cho tạp chí, đế lót ly và
                      các phụ kiện phòng khách khác <br />
                      - Có thể được sử dụng như một bàn TV thấp - Kệ mỏng hoàn hảo để
                      chứa một hộp hàng đầu hoặc đầu phát blu-ray <br />
                      - Làm bằng gỗ Sheesham cao cấp <br />
                      - Không cần lắp ráp. <br />
                    </p>
                  </div>
                </div>
                <div className="khoangtrang_1"></div>
              </div>
              <div className="khoangtrang_1"></div>
              <section className="loaisp2">
      <div className="content4 container">
        <div className="slide3">
          <h5>Các sản phẩm tương tự</h5>
          <div className="gach">
            <div className="gach_in"></div>
            <a>xem tất cả {'>>'}</a>
          </div>
          <div className="image-slider3 row">
            <div className="image-item col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="image col-12">
                <a href="./chitietsp.html">
                  <img src="../img/sp-1.png" alt="" />
                </a>
              </div>
                            <div className="slide_ct">
                <h4>Kệ Ti Vi</h4>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>(size lớn trắng sữa)</p>
                <p className="p_price">8.999.000 VND</p>
                <button className="them2">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="image-item col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="image col-12">
                <a href="./chitietsp.html">
                  <img src="../img/sp-1.png" alt="" />
                </a>
              </div>
              <div className="slide_ct">
                <h4>Giường châu âu</h4>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>(size lớn trắng sữa)</p>
                <p className="p_price">8.999.000 VND</p>
                <button className="them2">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="image-item col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="image col-12">
                <a href="./chitietsp.html">
                  <img src="../img/sp-1.png" alt="" />
                </a>
              </div>
              <div className="slide_ct">
                <h4>Giường châu âu</h4>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>(size lớn trắng sữa)</p>
                <p className="p_price">8.999.000 VND</p>
                <button className="them2">Thêm vào giỏ hàng</button>
              </div>
            </div>
            <div className="image-item col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3" >
              <div className="image col-12">
                <a href="./chitietsp.html">
                  <img src="../img/sp-1.png" alt="" />
                </a>
              </div>
              <div className="slide_ct">
                <h4>Giường châu âu</h4>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>(size lớn trắng sữa)</p>
                <p className="p_price">8.999.000 VND</p>
                <button className="them2">Thêm vào giỏ hàng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
            </section>
            <div className="khoangtrong"></div>
        </>
     );
}
 
const mapStateToProps = state => ({ products2: state.counter,products: state.products});
const mapDispatchToProps = {  updateProducts };
export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
// export default DetailProduct;