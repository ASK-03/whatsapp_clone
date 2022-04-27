import { useState } from "react";
import profilePic from "../../images/ProfilePhotu.png";
import Modal from "./Modal";
export default function UserInfo() {

    const UserInformation = [
        {
            userFirstName: "Abhishek",
            userLastName: "Singh Kushwaha",
            userProfilePic: "../../ images / ProfilePhotu.png",
            userAbout: "Once you start questioning your own belief, its GAME OVER",
            userPhoneNumber: "+91 7428368001"
        }
    ]

    const [imageModal, setImageModal] = useState(false);

    function toggleImageModal() {
        setImageModal(prevImageModal => !prevImageModal)
    }

    return (
        <>
            {!imageModal ?
                <div className="userInfo">
                    {imageModal && <Modal toggleImageModal={toggleImageModal} profilePic={profilePic} />}
                    <div className="userProfilePic">
                        <img src={profilePic} alt="Profile" onClick={toggleImageModal} />
                    </div>
                    <div className="userName">
                        <h1>{UserInformation[0].userFirstName}</h1>
                    </div>
                </div>
                :
                <Modal toggleImageModal={toggleImageModal} profilePic={profilePic} userFirstName={UserInformation[0].userFirstName} userAbout={UserInformation[0].userAbout} modalContext="UserInfo" />
            }
        </>
    );
}