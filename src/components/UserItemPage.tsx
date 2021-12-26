import React, {FC, useEffect, useState} from 'react';
import {IUser} from "./types/types";
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom';


const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);

    const params = useParams()

    const navigate = useNavigate();
    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(
                `https://jsonplaceholder.typicode.com/users/${params.id}`
            );
            setUser(response.data);
        } catch (e) {
            alert(e);
        }
    }
    return (
        <div>
            <button onClick={() => navigate('/users')}>back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>{user?.email}</div>
            <div>{user?.address.city}{user?.address.street}</div>
        </div>
    );
};

export default UserItemPage;