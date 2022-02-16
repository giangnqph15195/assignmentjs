export const reRender = async (compoment, domElement) => {
    if(compoment){
        document.querySelector(domElement).innerHTML = await compoment.print();
        if(compoment.afterPrint) compoment.afterPrint();
    }
}