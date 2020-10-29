import axios from 'axios';

const apiUrl = "http://projetoreact1-001-site1.itempurl.com/api/Fornecedores";

export const post = (fornecedor) => {
    axios.post(apiUrl, fornecedor)
        .then(
            response => {
                return response.data;
            }
        )
}

export const put = (fornecedor) => {
    axios.put(apiUrl, fornecedor)
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