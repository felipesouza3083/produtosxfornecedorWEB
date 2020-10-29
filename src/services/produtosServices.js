import axios from 'axios';

const apiUrl = "http://projetoreact1-001-site1.itempurl.com/api/Produtos";

export const post = (produto) => {
    axios.post(apiUrl, produto)
        .then(
            response => {
                return response.data;
            }
        )
}

export const put = (produto) => {
    axios.put(apiUrl, produto)
        .then(
            response => {
                return response.data;
            }
        )
}

export const remove = (id) => {
    axios.delete(`${apiUrl}/${id}`)
        .then(
            response => {
                return response.data;
            }
        )
}

export const get = () => {
    axios.get(apiUrl)
        .then(
            response => {
                return response.data;
            }
        )
}

export const getById = (id) => {
    axios.get(`${apiUrl}/${id}`)
        .then(
            response => {
                return response.data;
            }
        )
}