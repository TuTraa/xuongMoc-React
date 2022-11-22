import "../product/sanpham.css"
import "../css/xuongmoc.css"
import BannerHome from "./bannerHome";
import AboutUs from "./aboutUs";
import NewHome from "./newsHome";
import HomeContract from "./homeContract";

const Home = (props) => {
    const {allProduct}=props;
    return ( 
        <>
        <BannerHome allProduct={allProduct} />
        <AboutUs />
        <NewHome />
        <HomeContract />
        </>
     );
}
 
export default Home;