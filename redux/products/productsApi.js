import axios from "../../utils/axios";

export const getProducts = async (tags, search) => {
    let queryString = "";

    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags=${tag}`).join("&");
    }

    // if (search !== "") {
    //     queryString += `&q=${search}`;
    // }

    const response = await axios.get(`/products?${queryString}`);

    return response.data;
};
