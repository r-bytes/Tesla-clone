import { createContext, useContext, useState } from "react";

const Context = createContext()

export const StateContext = ({children}) => {
    const [showBurger, setShowBurger] = useState(false)

    return (
        <Context.Provider value={{
            showBurger,
            setShowBurger
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)