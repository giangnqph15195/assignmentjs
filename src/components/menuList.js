import { reRender } from "../utils";

const MenuList = {
    print() {
        return /*html*/`
        <header>
            
            <div class="bg-red-800 py-2 px-20  flex m-auto">
                <a href="#">
                    <img width="190" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1645017092/asm/footer_logo1_gvkbmr.png" class="mx-auto" alt=""> 
                </a>
                <p class="my-4 mx-8 text-white">Pizza ngon - Giá rẻ - Vận chuyển tận nhà</p>
            </div>
            <div class="bg-red-700 flex">
                <ul class="flex">
                <li class="menu_list"><a href="/">Trang chủ</a></li>
                <li class="menu_list"><a href="/news">Tin Tức</a></li>
                <li class="menu_list"><a href="/tuyensinh">Liên Hệ</a></li>
                <li class="menu_list"><a href="/admin/dashboard">Dashboard</a></li>
                </ul>
               

                <div class="flex my-2 mx-10">
                ${localStorage.getItem('user')? `
                    <ul class="flex mx-3">
                        <li class="mx-2 hover:text-white"><a href="/signin"></a></li>
                        <li class="mx-2 hover:text-white"><a href="/signup"></a></li>
                    </ul>
                `
            :""}
                <ul class="flex mx-3">
                    <li class="mx-2 hover:text-white"><a id="email"></a></li>
                    <li class="mx-2 hover:text-white"><a id="loguot">Loguot</a></li>
                </ul>
                </div>
            </div>
        </header>
        `
    },
    afterPrint() {
        const email = document.querySelector("#email");
        const loguot = document.querySelector("#loguot");
        email.innerHTML = JSON.parse(localStorage.getItem('user')).email;

        loguot.addEventListener("click", () => {
            localStorage.removeItem('user');
            reRender(MenuList,"header")
        })
    }
}
export default MenuList;