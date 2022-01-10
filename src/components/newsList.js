import data from "../data";
const NewsList = {
    print() {
        return `
            <h3 id="app" class="font-semibold my-8">Tin Tức Học Tập</h3>
            <main class="grid gap-4 grid-cols-3 grid-rows-3 gap-x-10 ">
            ${data.map((post) => `
                <div class="news">
                    <div class="iteam">
                        <img src="${post.img}" alt="">
                <h2>
                    ${post.title}
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