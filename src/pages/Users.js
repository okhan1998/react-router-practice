import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';
import UserList from '../components/UserList';
import Spinner from '../components/Spinner';


function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(respond => {
                console.log(respond);
                setUsers(respond.data);
                setLoading(false);
            });
    }, [])
    useEffect(() => {
    }, [users])
    return (
        <div>
            <h1>User</h1>
            {loading ? <Spinner/> : <UserList users={users}/>}
        </div>
    )
}

export default Users
