// import '../style.css'no
import Navigo from "navigo";
// import MenuList from "./components/menuList";
import AboutPage from "./page/about";
import AddNews from "./page/admin/news/addnews";
import AdminNews from "./page/admin/news/adminew";
import Dashboard from "./page/admin/dashboard";
import DetailNewsPage from "./page/detailpage";
import EditNews from "./page/admin/news/editnews";
import HomePage from "./page/home";
import NewsPage from "./page/news";
import SignIn from "./page/signin";
import SignUp from "./page/signup";
import AdminProduct from "./page/admin/product/adPd";
import AddPd from "./page/admin/product/addPd";
import DetailProduct from "./page/detailProduct";
import CatrgoryPage from "./page/categoryPage";
import EditProduct from "./page/admin/product/editPD";
import AdminCategory from "./page/admin/category/adCategory";

const router = new Navigo("/", {linksSelector: "a",hash:true});
const render = async (content, id) => {
    // document.getElementById("header").innerHTML = MenuList.print();
    document.getElementById("app").innerHTML = await content.print(id);
    if(content.afterPrint) content.afterPrint(id);
}
router.on({
    "/": () => render(HomePage),
    "/tuyensinh": () => render(AboutPage),
    "/news": () => render(NewsPage),
    "/signin": () => render(SignIn),
    "/signup": () => render(SignUp),
    "/news/:id": ( value ) =>  render(DetailNewsPage, value.data.id),
    "/product/:id": ( value ) =>  render(DetailProduct, value.data.id),
    "admin/dashboard": () => render(Dashboard),
    "/admin/news": () => render(AdminNews),
    "/admin/news/:id/edit": ({ data }) => render(EditNews, data.id),
    "/admin/news/add": () => render(AddNews),

    "/admin/product/:id/edit": ({ data }) => render(EditProduct, data.id),
    "/admin/products" : () => render(AdminProduct),
    "/admin/product/add" : () => render(AddPd),
    "/category/:id": (value) => render(CatrgoryPage, value.data.id),

    "/admin/category": () => render(AdminCategory)


});
router.resolve();