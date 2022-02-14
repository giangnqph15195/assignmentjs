import Banner from "../components/banner";
import MenuList from "../components/menuList";
import NewsList from "../components/newsList"

const NewsPage ={
    async print(){
        return /*html*/`
        <div class="max-w-5xl m-auto">
            ${MenuList.print()}
            ${Banner.print()}
            <h1>News Pages</h1>
            ${await NewsList.print()};
        </div>    
        `
    }
};
export default NewsPage;