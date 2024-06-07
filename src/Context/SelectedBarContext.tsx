import { createContext, useState } from 'react';

export const SelectedBarContext = createContext({} as any);

export const SelectedBarProvider = ({ children }: any) => {
    const [selectedBar, setSelectedBar] = useState(0);

    return (
        <SelectedBarContext.Provider value={{ selectedBar, setSelectedBar }}>
            {children}
        </SelectedBarContext.Provider>
    );
};
