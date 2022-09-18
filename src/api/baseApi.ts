import axios from 'axios'

const baseURL = 'https://baseUrl/'
const headersConfig = {}

export const instance = axios.create({
    baseURL,
    headers: headersConfig,
})
