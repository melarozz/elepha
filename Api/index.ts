import {User} from "./types";
import {getApiBase} from "../utils/env";
import axios from "axios";

export async function createUser(data: User) {
    const endpoint = '/auth/users/';

    // const json = JSON.stringify({
    //     username: "3weewd",
    //     first_name: data.name,
    //     last_name: data.lastName,
    //     phone_number: data.mobile,
    //     email: data.email,
    //     password: data.password,
    //     company: data.company,
    //     date_of_birth: data.birthDate,
    //     gender: data.gender,
    //     height: data.height,
    //     weight: data.weight,
    //     avg_heart_rate: data.pulse,
    // });
    const json = {
        username: "3weewd",
        first_name: 'dfvdfv',
        last_name: 'erferf',
        phone_number: '+79049030557',
        email: 'danee2l@gmail.com',
        password: 'data.password',
        company: 'data.company',
        date_of_birth: "2004-03-04",
        gender: "M",
        height: "34",
        weight: "34",
        avg_heart_rate: "34"
    };

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

    return axios({
        headers: {
            Authorization: 'Bearer ' + token
        },
        method: 'post',
        url: getApiBase() + endpoint,
        data: formData,
    });
}

export async function getUser(token: string) {
    const endpoint = '/auth/users/';
    return axios({
        headers: {
            Authorization: 'Bearer ' + token
        },
        method: 'get',
        url: getApiBase() + endpoint,
    });
}
