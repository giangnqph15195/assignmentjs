import { getAll } from "../api/product"


const ProductList = {
    async print() {
        const { data } = await getAll()
        return /*html*/`
        <main class="max-w-6xl m-auto grid gap-3 grid-cols-3 grid-rows-3 gap-x-10 ">
          ${data.map((product) => /*html*/`
          <div class="product">
            <div class="">
                <a href="/product/${product.id}"><img width="350" src="${product.img}" alt=""></a>
                <h2 class=" text-center my-4">
                    <a class="font-bold" href="/product/${product.id}">${product.name}</a>
                </h2>
                <p class="text-center font-bold text-orange-500">
                    ${product.price}
                </p>
                <button class="ml-36 my-8 bg-orange-800 p-2 text-white rounded-full"><a href="/product/${product.id}">Mua Hàng</a></button>
                </div>
            </div>
          `).join("")}
          </main>
        `
    }
}
export default ProductList;