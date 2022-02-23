import instance from "./instance";

export const olyone = (id) =>{
    const url = `/category/${id}?_embed=products`;
    return instance.get(url)
}
export const all = () => {
    const url = `/category`;
    return instance.get(url);
}
export const update = (category) => {
    const url = `/category/${category.id}`;
    return instance.put(url, category)
}
export const remove = (id) => {
    const url = `category/${id}`
    return instance.delete(url,id)
}