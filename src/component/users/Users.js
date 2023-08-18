import React, { useEffect, useState } from "react";
import axios from "axios";

 import './Users.css'

 const Users = () => {
    const [dbData, setDbData] = useState(null)

    useEffect(() => {
        const callFn = async() => {
            try {
                let res = await axios.get('http://localhost:3030/posts')
                setDbData(res.data)
            } catch (error) {
                
            }
        }
        callFn()
    }, [])

    return (
        <div className="users-table">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dbData?.map(data => (
                            <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.address}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users;
