import { all } from "../api/category";

const Cagegory = {
    async print(){
        const { data } = await all()
        return /*html*/`
            <div class="flex justify-center">
                <img class="h-1 mt-8" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1644632592/asm/line_title_v9kuva.png">
                <p class="mt-5 mx-8 text-lg font-bold">THỰC ĐƠN</p>
                <img class="h-1 mt-8" src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1644632592/asm/line_title_v9kuva.png">
            </div>
            <div class="flex justify-center">
            ${data.map((cate) => `
                <div class="mx-8 my-8">
                    <a href="#">
                        <img width="70" src="${cate.img}">
                        <p class="text-center">${cate.namect}</p>
                    </a>
                </div>
            `).join("")}
                
               
            </div>
        `
    }
}
export default Cagegory;