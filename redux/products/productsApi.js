import axios from "../../utils/axios";

export const getProducts = async (tags,types, search) => {

    const qtags = tags?.length > 0 && `tags=${tags}&`
    const qtypes = types?.length > 0 && `types=${types}`

    const response = await axios.get(`/products?${qtags}${qtypes}`);

    return response.data;
};
