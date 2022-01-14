import Banner from "../components/banner";
import MenuList from "../components/menuList";

const AboutPage = {
    print() {
        return `
        <div class="max-w-5xl m-auto">
            ${MenuList.print()}
            ${Banner.print()}
        </div>    
        `;
    },
};
export default AboutPage;