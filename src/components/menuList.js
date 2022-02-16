import { reRender } from "../utils";

const MenuList = {
    print() {
        return /*html*/`
        <header>
            
            <div class="bg-[#252c4f] py-5 px-10  flex m-auto">
                <a href="#">
                    <img width="150" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1645017092/asm/footer_logo1_gvkbmr.png" class="mx-auto" alt=""> 
                </a>
                <p >Pizza ngon - Giá rẻ - Vận chuyển tận nhà</p>
            </div>
            <div class="bg-[#cc7701] flex">
                <ul class="flex">
                <li class="menu_list"><a href="/">Trang chủ</a></li>
                <li class="menu_list"><a href="/news">Tin Tức</a></li>
                <li class="menu_list"><a href="/tuyensinh">Liên Hệ</a></li>
                <li class="menu_list"><a href="/admin/dashboard">Dashboard</a></li>
                <li class="menu_list">Tuyển dụng</li>
                </ul>
               

                <div class="flex my-2 mx-10">
                <form action="">
                    <input type="text"  value="" class="border-2 border-slate-900 w-100">
                    <button class="bg-[#252c4f] ... border-2 border-slate-900 text-white hover:bg-white ... hover:text-[#252c4f]">Tìm kiếm</button>
                </form>
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
            console.log(1)
            localStorage.removeItem('user');
            reRender(Header,"header")
        })
    }
}
export default MenuList;