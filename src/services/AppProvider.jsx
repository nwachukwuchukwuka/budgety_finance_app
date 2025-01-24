import { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [user, setUser] = useState({ name: "John Doe", email: "john@example.com" });


    const [summaryArray, setSummaryArray] = useState([])

    const addToSummaryArray = (summary) => {
        setSummaryArray((prev) => [...prev, summary]);
    };


    const [showModal, setShowModal] = useState(false); // Controls the overall modal visibility
    const [showFormModal, setShowFormModal] = useState(true); // Controls the first modal visibility




    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            setIsSidebarOpen,
            user,
            setUser,
            summaryArray,
            setSummaryArray,
            addToSummaryArray,
            showModal,
            setShowModal,
            showFormModal,
            setShowFormModal


        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
