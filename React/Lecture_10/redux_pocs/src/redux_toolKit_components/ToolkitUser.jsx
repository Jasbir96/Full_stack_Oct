import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import middleware from '../redux_toolkit/User/middleware';
function ToolkitUser() {
    const { error, loading, user } =
        useSelector((store) => { return store.UserState });
    const dispatch = useDispatch();

    useEffect(function () {
        dispatch(middleware());
    }, []);


    const heading = <h2>User Example</h2>;
    if (loading) {
        return <> {heading}
            <h3>...Loading</h3>
        </>
    }
    if (error) {
        return <> {heading}
            <h3>Error occurred</h3>
        </>
    }
    return (
        <>
            {heading}
            <h4>Name: {user.name}</h4>
            <h4>Phone: {user.phone}</h4>
        </>
    )
}

export default ToolkitUser;