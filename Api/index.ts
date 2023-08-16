import {User} from "./types";
import {getApiBase} from "../utils/env";
import axios from "axios";

export async function createUser(data: User) {
    const endpoint = '/auth/users/';
    const json = {
        username: data.username,
        first_name: data.name,
        last_name: data.lastName,
        phone_number: data.mobile,
        email: data.email,
        password: data.password,
        company: 'data.company',
        date_of_birth: data.birthDate,
        gender: data.gender,
        height: data.height,
        weight: data.weight,
        avg_heart_rate: data.pulse,
    };
    console.log(json);

    try {
        const res = await axios.post(  // пост запрос на сервер
            getApiBase() + endpoint, // урла
            json // данные
        )
        console.log(res.statusText)
    } catch (error) {
        console.log(error)
    }
}

export async function getToken(data: User, token: string) {
    const endpoint = '/auth/jwt/create/';

    const json = JSON.stringify({
        username: data.username,
        password: data.password
    });
    const blob = new Blob([json], {
        type: 'application/json'
    });

    const formData = new FormData();
    formData.append("document", blob);

    try {
        const res = await axios.post(  // пост запрос на сервер
            getApiBase() + endpoint, // урла
            formData,// данные
            {
                headers:{
                    Authorization: 'Bearer ' + token
                }
            }
        )
        console.log(res.statusText)
    } catch (error) {
        console.log(error)
    }

}

export async function getUser(token: string) {
    const endpoint = '/auth/users/';

    try {
        const res = await axios.get(  // гет запрос на сервер
            getApiBase() + endpoint, // урла
            {
                headers: {
                    Authorization: 'Bearer ' + token
                },
            }
        )
        console.log(res.statusText);
        return res;
    } catch (error) {
        console.log(error)
    }
}
