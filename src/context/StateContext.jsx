import { createContext, useContext, useState } from "react";

const Context = createContext()

export const StateContext = ({children}) => {
    const [showBurger, setShowBurger] = useState(false)
    const [cars, setCars] = useState([
        {name: "Model 3"},
        {name: "Model Y"},
        {name: "Model S"},
        {name: "Model X"}
    ])

    return (
        <Context.Provider value={{
            showBurger,
            setShowBurger,
            cars,
            setCars
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)