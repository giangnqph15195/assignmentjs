import { getAll } from "../api/product"


const ProductList = {
    async print() {
        const { data } = await getAll()
        return /*html*/`
        <main class="max-w-6xl m-auto grid gap-4 grid-cols-3 grid-rows-3 gap-x-10 ">
          ${data.map((product) => /*html*/`
          <div class="product">
            <div class="">
                <a href="/product/${product.id}"><img src="${product.img}" alt=""></a>
                <h2 class=" text-center">
                    <a class="font-bold" href="/product/${product.id}">${product.name}</a>
                </h2>
                <p>
                    ${product.price}
                </p>
                </div>
            </div>
          `).join("")}
          </main>
        `
    }
}
export default ProductList;