import { getAll, remove } from "../../api/posts";
import NavAdmin from "../../components/navAmin";
import data from "../../data";

const AdminNews = {
    async print() {
      const { data } = await getAll()
        return /* html */`
        <div class="min-h-full">
        ${NavAdmin.print()}
      
        <!-- This example requires Tailwind CSS v2.0+ -->
<div class="max-w-7xl m-auto my-6 lg:flex lg:items-center lg:justify-between">
<div class="flex-1 min-w-0">
  <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
    Back End Developer
  </h2>
  <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
    
  
  </div>
</div>
<div class="mt-5 flex lg:mt-0 lg:ml-4">

  <span class="sm:ml-3">
    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <!-- Heroicon name: solid/check -->
      <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
      <a href="/admin/news/add">Add</a>
    </button>
  </span>
  <!-- Dropdown -->
</div>
</div>
<hr>

        
        <main>
          <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="px-4 py-6 sm:px-0">
              <div class="border-4 border-dashed border-gray-200 rounded-lg h-full">
              <div class="flex flex-col">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title & Image
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Desc
                          </th>
                          <th scope="col" class="relative px-6 py-3">
                            <span class="sr-only">Edit</span>
                          </th>
                          <th scope="col" class="relative px-6 py-3">
                            <span class="sr-only">Remove</span>
                          </th>
                        </tr>
                      </thead>
                      ${data.map((post) =>/* html */`
                      <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-1 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                                ${post.title}
                              </div>
                              <div class="text-sm text-gray-500">
                                
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">${post.desc}</div>
                          <div class="text-sm text-gray-500">Optimization</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button data-id=${post.id} class="btn btn-remove">Remove</button>
                        </td>
                      </tr>
          
                      <!-- More people... -->
                    </tbody>
                      `).join("")}
                    </table>
                  </div>
                </div>
              </div>
            </div>
                    

              </div>
            </div>
            <!-- /End replace -->
          </div>
        </main>
        
      </div>
      








        
        `
    },
    afterPrint() {
      const buttons = document.querySelectorAll(".btn");
      buttons.forEach(button => {
        const id = button.dataset.id;
        button.addEventListener('click', (e) => {
          const confirm = window.confirm("Bạn thực sự muốn xóa");
          if(confirm){
            remove(id).then(() =>{
              console.log("đã xóa");
              e.preventDefault()
              
            })
          }
        })
      })
    }
};
export default AdminNews;