import Banner from "../components/banner";
import Footer from "../components/footer";
import MenuList from "../components/menuList";
import NewsList from "../components/newsList";

const HomePage = {
    print() {
        return `
        <div class="max-w-5xl m-auto">
            ${MenuList.print()}
            ${Banner.print()}
            ${NewsList.print()}
            ${Footer.print()}
        </div>    
        `
    },
};
export default HomePage;