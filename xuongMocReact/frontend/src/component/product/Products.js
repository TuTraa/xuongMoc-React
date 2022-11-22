import Banner from "./BannerProduct";
import ProductRow from "./ProductsRow";
import "../css/xuongmoc.css";
import "./sanpham.css";

const Products = (props) => {
  const { allProduct, displayCartFn, updateDetail } = props;
  return (
    <>
      <Banner />

      <ProductRow
        allProduct={allProduct}
        displayCartFn={displayCartFn}
        updateDetail={updateDetail}
      />
    </>
  );
};

export default Products;
