import { get } from "../api/product";
import Footer from "../components/footer";
import MenuList from "../components/menuList"

const DetailProduct = {
        async print(id){
            const { data } = await get(id)
            return /*html*/`
                ${MenuList.print()}
                <div class="flex my-20">
                    <div class="ml-40 mr-20"><img width="600" src="${data.img}"></div>
                    <div>
                        <p class="text-5xl">${data.name}</p>
                        <p class="my-6">${data.detail}</p>
                        <p class="text-2xl text-gray-400 mb-2">Giá sản phẩm</p>
                        <p class="font-bold text-2xl text-orange-600">${data.price}</p>
                        <button class="bg-orange-400 p-2 text-white font-bold my-12">Thêm vào giỏ hàng</button>
                    </div>
                    
                </div>
                ${Footer.print()}
            `
        }
}
export default DetailProduct;