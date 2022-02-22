import Banner from "../components/banner";
import Footer from "../components/footer";
import MenuList from "../components/menuList";
import NewsList from "../components/newsList"

const NewsPage ={
    async print(){
        return /*html*/`
        <div class="">
            ${MenuList.print()}
            ${Banner.print()}
            <div><h1 class="text-center font-bold text-3xl my-12">Các bài viết tiêu biểu</h1></div>
            ${await NewsList.print()};
            ${Footer.print()}
        </div>    
        `
    }
};
export default NewsPage;