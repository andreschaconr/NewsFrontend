import "regenerator-runtime/runtime";
import { baseUrl } from "../Api/api";

const API = `${baseUrl}`;

export const getData  = async (baseUrl) => {
    const url = `${API}/`;
    const res = await fetch (url); /* response */
    return  await res.json();
};

 