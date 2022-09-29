import axios from "../../utils/axios";

export const getProducts = async (tags) => {

    const qtags = tags?.length > 0 && `tags=${tags}&`

    const response = await axios.get(`/products?${qtags}`);

    return response.data;
};
