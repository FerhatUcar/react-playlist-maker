import axios from "axios";

const BASE_URL = 'http://localhost:3004/songs/';

export const getSongs = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (err) {
        console.error(err.message);
    }
};
