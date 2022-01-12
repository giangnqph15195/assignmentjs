import Banner from "../components/banner";
import Footer from "../components/footer";
import MenuList from "../components/menuList";
import data from "../data";

const DetailNewsPage = {
    print(id) {
        const result = data.find((post) => post.id === id);
        return `
        <div class="max-w-5xl m-auto">
            ${MenuList.print()}
            <h1>${result.title}</h1>
            <img src="${result.img}" />
            <p>${result.desc}</p>
            ${Footer.print()}
        </div>    
        `;
    },
};
export default DetailNewsPage;