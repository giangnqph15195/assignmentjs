const MenuList = {
    print() {
        return `
        <header>
            <div class="bg-[#252c4f] py-[13px]">
                <a href="#">
                    <img src="https://picsum.photos/150/50" class="mx-auto" alt=""> 
                </a>
            </div>
            <div class="bg-[#cc7701] flex">
                <ul class="flex">
                <li class="menu_list"><a href="/">Trang chủ</a></li>
                <li class="menu_list"><a href="/tuyensinh">Tuyển sinh</a></li>
                <li class="menu_list">Chương trình đào tạo</li>
                <li class="menu_list">Góc sinh viên</li>
                <li class="menu_list">Tuyển dụng</li>
                </ul>

                <div class="flex my-2 mx-20">
                <form action="">
                    <input type="text"  value="" class="border-2 border-slate-900 w-100">
                    <button class=" bg-[#252c4f] ... border-2 border-slate-900 text-white hover:bg-white ... hover:text-[#252c4f]">Tìm kiếm</button>
                </form>
                </div>
            </div>
        </header>
        `
    }
}
export default MenuList;