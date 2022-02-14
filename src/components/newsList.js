import data from "../data";
const NewsList = {
    async print() {
        // const { data } = await getAll();
        return /*html*/`
            <main class="grid gap-4 grid-cols-3 grid-rows-3 gap-x-10 ">
            ${data.map((post) => /* html */ `
                <div class="news">
                    <div class="iteam">
                        <a href="/news/${post.id}"><img src="${post.img}" alt=""></a>
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