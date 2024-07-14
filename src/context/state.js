import React from "react";

const StateContext = React.createContext();

export const useState = () => {
    return React.useContext(StateContext)
};

const StateProvider = ({ children }) => {

    const [isChat, setIsChat] = React.useState(false)

    return (
        <StateContext.Provider value={{ isChat, setIsChat }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider