import { all } from "../api/category"

const cateAmin = {
    async print(){
        const {data} = await all()
        return/*html*/`
        <select id="cate">
        ${data.map((cates) =>`
          <option value="${cates.id}">${cates.namect}</option>
        `).join("")}
      </select>
        `
    }
}
export default cateAmin;