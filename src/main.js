// import '../style.css'no
import Navigo from "navigo";
// import MenuList from "./components/menuList";
import AboutPage from "./page/about";
import AddNews from "./page/admin/addnews";
import AdminNews from "./page/admin/adminew";
import Dashboard from "./page/admin/dashboard";
import DetailNewsPage from "./page/detailpage";
import EditNews from "./page/admin/editnews";
import HomePage from "./page/home";
import NewsPage from "./page/news";
import SignIn from "./page/signin";
import SignUp from "./page/signup";

const router = new Navigo("/", {linksSelector: "a"});
const render = async (content, id) => {
    // document.getElementById("header").innerHTML = MenuList.print();
    document.getElementById("app").innerHTML = await content(id);
}
router.on({
    "/": () => render(HomePage),
    "/tuyensinh": () => render(AboutPage),
    "/news": () => render(NewsPage),
    "/signin": () => render(SignIn),
    "/signup": () => render(SignUp),
    "/news/:id": ({ data }) => {
        const { id } = data;
        render(DetailNewsPage.print(id));
    },
    "/admin/dashboard": () => render(Dashboard),
    "/admin/news": () => {
        render(AdminNews)
    },
    "/admin/news/add": () => render(AddNews),
    "/admin/news/:id/edit": ({ data }) => {
        const { id } = data;
        render(EditNews.print(id));
    },
});
router.resolve();