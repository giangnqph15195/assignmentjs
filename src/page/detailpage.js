import { get } from "../api/posts";
import Banner from "../components/banner";
import Footer from "../components/footer";
import MenuList from "../components/menuList";


const DetailNewsPage = {
    async print(id) {
        const { data } = await get(id)
        return `
        <div class="max-w-5xl m-auto">
            ${MenuList.print()}
            <h1>${data.title}</h1>
            <img src="${data.img}" />
            <p>${data.desc}</p>
            ${Footer.print()}
        </div>    
        `;
    },
};
export default DetailNewsPage;