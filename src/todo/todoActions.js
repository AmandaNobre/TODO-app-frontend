import axios from 'axios'

const Url = "http://localhost:3003/api/todos"

export const changeDescription = state => ({
    type: "DESCRIPTION_CHANGED",
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${Url}?sort=-createdAt`)
    return {
        type: "TODO_SEARCHED",
        payload: request
    }
}