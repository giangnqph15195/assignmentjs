import { olyone } from "../api/category"
import Footer from "../components/footer"
import MenuList from "../components/menuList"

const CatrgoryPage = {
    
    async print(id){
        const { data } = await olyone(id)
        return /*html*/`
            ${MenuList.print()}
            
            ${Footer.print()}
        `
    }
}
export default CatrgoryPage;