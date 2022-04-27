import React, { createContext, useState } from 'react'

export const ModalContext = createContext();

const ModalContextProvider = (props) => {

    const [modal, setModal] = useState(false);
    const modalContext = "modalContext";

    function toggleImageModal() {
        setModal(prevModal => !prevModal)
    }
    return (
        <ModalContext.Provider value={{ modal, toggleImageModal, modalContext }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider;