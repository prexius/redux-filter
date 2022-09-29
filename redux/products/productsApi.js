import axios from "../../utils/axios";

export const getProducts = async (tags,types, search) => {
    let queryString = "";

    if (tags?.length > 0) {
        queryString += `tags=${tags}&`;
    }
    if (types?.length > 0) {
        queryString += `types=${types}&`;
    }

    // if (search !== "") {
    //     queryString += `&q=${search}`;
    // }

    const response = await axios.get(`/products?${queryString}`);

    return response.data;
};
