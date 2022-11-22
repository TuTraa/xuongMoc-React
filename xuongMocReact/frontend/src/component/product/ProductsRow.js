import Slider from "react-slick";
import ProductItem from "./productItem";

const ProductRow = (props) => {
  const { allProduct, displayCartFn, updateDetail } = props;

  // console.log(allProduct)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="loaisp2">
        <div className="content3 container">
          <div className="slide3">
            <div className="gach">
              <div>
                <h5>Phòng Khách</h5>
                <div className="gach_in"></div>
              </div>
            </div>

            <div className="image-slider3 row">
              {allProduct.map((product) => {
                return (
                  <ProductItem
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    priceText={product.priceText}
                    oldprice={product.oldprice}
                    url={product.url}
                    title={product.title}
                    displayCartFn={displayCartFn}
                    updateDetail={updateDetail}
                  />
                );
              })}
              {/* <div className="image-item col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
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
                      <p className="p_price2">8999000</p>
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
                      <p className="price_number">8999000</p>
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
                      <p className="price_number">8999000</p>
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
                      <p className="price_number">8999000</p>
                      <button className="them2">Thêm vào giỏ hàng</button>
                    </div>
                   </div> */}
            </div>
          </div>
        </div>
      </section>
      <div className="khoangtrang"></div>
    </>
  );
};
export default ProductRow;
