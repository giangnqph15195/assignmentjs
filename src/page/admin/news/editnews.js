import { get, update } from "../../../api/posts";
import NavAdmin from "../../../components/navAmin";


const EditNews = {
    async print(id) {
        const { data } = await get(id)
        return /* html */`

        <div class="min-h-full">
        ${NavAdmin.print()}

  <header class="bg-white shadow">
  <div class="max-w-7xl m-auto my-6 lg:flex lg:items-center lg:justify-between">
  <div class="flex-1 min-w-0">
    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
      Edit News
    </h2>
    <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
      
    
    </div>
  </div>
  <div class="my-5 flex lg:mt-0 lg:ml-4">
  
    <span class="sm:ml-3">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <!-- Heroicon name: solid/check -->
        <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <a href="/admin/news">Trở Về</a>
      </button>
    </span>
    <!-- Dropdown -->
  </div>
  </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-full">
            
        
        <div class="max-w-4xl m-auto my-10">
        <form id="form-edit" class="pl-20">
            <div class="my-5">
            <label><span class="font-bold">Title</span></label><br>
                <input id="title" class="border-2 border-slate-900 w-96 h-10" type="text" value="${data.title}">
            </div>
            <div class="my-5">
                <img class="w-20 h-20" src="${data.img}">
                <label><span class="font-bold">Image</span></label><br>
                <input id="img-edit" class="" type="file" value="">
            </div>
            <div class="my-5">
            <label><span class="font-bold">Desc</span></label><br>
                <input id="desc" class="border-2 border-slate-900 w-96 h-10" type="text" value="${data.desc}">
            </div>
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Edit
            </button>
        </form>
        
        </div> 

        </div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</div>        
        </div>    
        `
    },
    afterPrint(id) {
      const formEdit = document.querySelector("#form-edit")
      formEdit.addEventListener("submit", (e) => {
        e.preventDefault()
        update({
          id, 
          title: document.querySelector("#title").value,
          
          desc: document.querySelector("#desc").value
        })
      })
    }
};
export default EditNews;