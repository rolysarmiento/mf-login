import { useState } from "react";

export const User = () => {
    const [username, setUsername] = useState<string>(''); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleClick = async () => {
        if (username !== '') {
            localStorage.setItem('user', JSON.stringify(username));

            try {
                const response = await fetch('http://localhost:10010/Auth/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username, 
                    }),
                });

                if (!response.ok) {
                    throw new Error('Error en la autenticación');
                }

                const data = await response.json();
                const token = data.rows.token;
                console.log('Token recibido:', token);

                localStorage.setItem('token', token);
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            console.error('El nombre de usuario no puede estar vacío');
        }
    };

    return { handleChange, handleClick };
};