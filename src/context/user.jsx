import { createContext, useState, useEffect } from "react";
import { onAuthStateChangeListener } from "../utils/firebase/firebase";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvide = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }
    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}