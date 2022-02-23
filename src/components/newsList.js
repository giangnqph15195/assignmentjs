import { getAll } from "../api/posts";
import data from "../data";
const NewsList = {
    async print() {
        const { data } = await getAll()
        return /*html*/`
            
            <main class="max-w-6xl m-auto">
            ${data.map((post) => /* html */ `
                <div class="news">
                    <div class="iteam">
                        <a href="/news/${post.id}"><img class="max-w-5xl" src="${post.img}" alt=""></a>
                <h2>
                    <a href="/news/${post.id}">${post.title}</a>
                </h2>
                <p>
                    ${post.desc}
                </p>
                </div>
            </div>
            `).join("")}
          
          </main>
        `
    }
};
export default NewsList;