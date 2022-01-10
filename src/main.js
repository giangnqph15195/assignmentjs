// import '../style.css'no
import Navigo from "navigo";
import AboutPage from "./page/about";
import HomePage from "./page/home";
const router = new Navigo("/", {linksSelector: "a"});
const render = (conten) => {
    document.getElementById("app").innerHTML = conten.print();
}
router.on({
    "/": () => {
        render(HomePage);
    },
    "/tuyensinh": () => {
        render(AboutPage);
    }
});
router.resolve();

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `