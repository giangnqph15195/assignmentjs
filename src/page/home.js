import Banner from "../components/banner";
import Cagegory from "../components/categoryList";
import Footer from "../components/footer";
import MenuList from "../components/menuList";
// import NewsList from "../components/newsList";
import ProductList from "../components/productsList";

const HomePage = {
    async  print() {
        return `
        <div class="">
            ${MenuList.print()}
            ${Banner.print()}
            ${await Cagegory.print()}
            ${await ProductList.print()}
            ${Footer.print()}
        </div>    
        `
    },
    afterPrint() {
        Header.afterPrint()
    }
};
export default HomePage;