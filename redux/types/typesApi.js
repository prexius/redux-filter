import axios from "../../utils/axios";

export const getTypes = async () => {
    const response = await axios.get('/types');
    return response.data
}