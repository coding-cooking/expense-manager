import axios from "axios";

export const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STAGE_API_BASE_URL,
});
