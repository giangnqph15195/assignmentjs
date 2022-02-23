import { get } from "../api/posts";
import Footer from "../components/footer";
import MenuList from "../components/menuList";


const DetailNewsPage = {
    async print(id) {
        const { data } = await get(id)
        return `
        ${MenuList.print()}
        <div class="max-w-5xl m-auto">
           
            <h1 class="text-2xl font-bold my-8">${data.title}</h1>
            <img class="my-4" src="${data.img}" />
            <p>${data.desc}</p>
            
        </div>    
        ${Footer.print()}
        `;
    },
};
export default DetailNewsPage;