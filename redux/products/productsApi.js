import axios from "../../utils/axios";

export const getProducts = async (tags,types, search) => {
    // let queryString = "";

    // if (tags?.length > 0) {
    //     queryString += `tags=${tags}`;
    // }
    // if (tags?.length > 0) {
    //     queryString += tags.map((tag) => `tags=${tag}`).join("&");
    // }

    // if (types?.length > 0) {
    //     queryString += `types=${types}`;
    // }
    // if (types?.length > 0) {
    //     queryString += `types=${types}&`;
    // }

    // if (search !== "") {
    //     queryString += `&q=${search}`;
    // }

    const qtags = tags?.length > 0 && `tags=${tags}&`
    // const qtypes = types?.length > 0 && `types=${types}`

    const response = await axios.get(`/products?${qtags}`);

    return response.data;
};
