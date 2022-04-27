import { useState } from "react";

export default function ModalChatsModal({ profilePic, userFirstName, userAbout }) {

    // const [userName, editUserName] = useState(userFirstName)

    // const inputBox = false
    // function inputBoxCreator() {
    //     console.log("hello")
    //     inputBox = true
    // }

    // function edit__userName(event) {
    //     userFirstName = ""
    //     editUserName(event.target.value)
    // }

    // console.log(userName)

    return (
        <>
            <img className='modal__image' src={profilePic} alt="Profile" />
            <h1 id="modal">{userFirstName}</h1>
            {/* {inputBox && <input type="text" />} */}
            <h4>{userAbout}</h4>
        </>

    );
}




