import React, { useState } from "react";
import { IUserForm } from "../components/Credentials/CredentialForm";

const defaultContext: any = { user: {}, setNewUser: () => {}, clearUser: () => {} };
const UserContext = React.createContext(defaultContext)

function UserContextProvider(props: any){
    const [user, setUser] = useState(
        {
            name: "",
            adult: false
        }
    );

    const setNewUser = (formData: IUserForm) => {
        try {
            setUser(formData)
        } catch (err) {
            console.log(err)
            throw new Error("There was a problem setting the new user");
        }
    }

    const clearUser = () => {
        const cleanUser = {
            name: "",
            adult: false
        }

        setUser(cleanUser)
    }

    return (
        <UserContext.Provider value={{ user, setNewUser, clearUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

export { UserContext, UserContextProvider }