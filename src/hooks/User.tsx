import { useState } from "react";

import type { ApiClinica } from '../../../mf-host/src/common/api/api-clinica';

//import api from './mf_host/http_client'


export const User = () => {

    //const api: ApiClinica = new mf_host.ApiClinica()

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('123');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };
    const handleClick = async () => {

        if (username !== '') {
            // localStorage.setItem('user', JSON.stringify(username));
            // try {

            //     const token = await api.login(username, password)

            //     console.log('Token recibido:', token);

            //     localStorage.setItem('token', token);

            // } catch (error) {
            //     console.error('Error:', error);
            // }


        } else {
            console.error('El nombre de usuario no puede estar vacío');
        }
    };

    return { handleChange, handleClick };
};