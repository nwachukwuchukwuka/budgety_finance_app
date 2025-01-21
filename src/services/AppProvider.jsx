import { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [user, setUser] = useState({ name: "John Doe", email: "john@example.com" });

    return (
        <AppContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
