import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';
import UserList from '../components/UserList';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';


function User() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    console.log(user);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then(respond => {
                console.log(respond);
                setUser(respond.data);
                setLoading(false);
            });
    }, [])
    useEffect(() => {
    }, [user])

    const userDetail = loading ? <Spinner /> : (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    )


    return (
        <div>
            <h1>User 정보</h1>
            {userDetail}
        </div>
    )
}

export default User
