import axios, {Axios, AxiosResponse} from "axios";

import {IUser} from "../interface";

type AxiosRes<T> = Promise<AxiosResponse<T>>
const userService = {
    getAll: (): AxiosRes<IUser[]> => axios.get('https://jsonplaceholder.typicode.com/users/'),
    getById: (id: number): AxiosRes<IUser> => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

export {
    userService
}
