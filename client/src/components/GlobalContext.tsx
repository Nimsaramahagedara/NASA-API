import React, { createContext, ReactNode, useContext, useState } from 'react'
import Loader from './Loader';

type GlobalContextType = {
    isLoading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const GlobalContextProvider: React.FC<any> = ({children}) => {
    const [isLoading, setLoading] = useState<boolean>(true);


    return (
        <GlobalContext.Provider value={{isLoading, setLoading}}>
            {isLoading && <Loader/>}
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within a GlobalContextProvider');
    }
    return context;
};