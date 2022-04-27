import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleInfo, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import Modal from "../LeftSideStructure/Modal";
export default function TopBar() {

    const [imageModal, setImageModal] = useState(false);

    function toggleImageModal() {
        setImageModal(prevImageModal => !prevImageModal)
    }

    return (
        <>
            {!imageModal ?
                <>
                    <div className="__rightProfilePhoto">
                        <img onClick={toggleImageModal} src={require("../../images/Boruto_Profile_Pic.jpg")} alt="ProfilePic" />
                    </div>
                    <div className="__onlineStatusBar">
                        <h5><FontAwesomeIcon className="FontAwesomeIcons" icon={faCircle} /> Boruto Uzumaki</h5>
                    </div>
                    <div className="__Call__VideoCall__InfoIcons">
                        <FontAwesomeIcon className="FontAwesomeIcons" icon={faPhone} />
                        <FontAwesomeIcon className="FontAwesomeIcons" icon={faVideo} />
                        <FontAwesomeIcon className="FontAwesomeIcons" icon={faCircleInfo} />
                    </div>
                </>
                :
                <Modal toggleImageModal={toggleImageModal} profilePic={require("../../images/Boruto_Profile_Pic.jpg")} userFirstName="Boruto Uzumaki" modalContext="RightSideTopBar" />
            }
        </>
    );
}