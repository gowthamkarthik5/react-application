import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from '../../sideeffects/actions/fetchUsers'

import './Home.css'
import { usersSelector } from "../../sideeffects/selector/selector";

const Home = () => {
    const dispatch = useDispatch()
    const users = useSelector(usersSelector) || []

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    return(
        <div>
            <h3>Welcome! This is Home page</h3>
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
                            users?.map(data => (
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
        </div>
    )
}

export default Home;
