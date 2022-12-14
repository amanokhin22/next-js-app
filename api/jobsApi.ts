import {JobItem} from "../types/types";
import {mockData} from "./mockData";

const AUTH_TOKEN = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

const GET_ALL_URL = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';

export const jobsApi = {
    async getAll(): Promise<JobItem[]> {
        try {
            const response = await fetch(GET_ALL_URL, {
                headers: {
                    Authorization: 'Bearer ' + AUTH_TOKEN
                }
            })
            return await response.json();
        } catch (e) {
            return mockData
        }
    },
};
