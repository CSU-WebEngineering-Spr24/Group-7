import React from 'react'
import { createContext, useState } from "react";
export const UserContext = createContext("");

const UserContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("userData") ? true : false
    );
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("userData"))
    );

   
    

    return (
        <UserContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                user,
                setUser
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;