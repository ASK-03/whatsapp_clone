import React from 'react'
import './Modal.css'
import ModalRightSideTopBar from './Modal_RightSideTopBar';
import ModalUserInfo from './Modal_UserInfo';
import ModalChatsModal from './Modal_ChatsModal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Modal({ toggleImageModal, profilePic, modalContext, userFirstName, userAbout }) {
    return (
        <>
            <div className="modal__bg">
                <div className='modal__container'>
                    <div className="modal__close" onClick={toggleImageModal}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div className="modal__info">
                        {modalContext === "UserInfo" ?
                            <ModalUserInfo profilePic={profilePic} userFirstName={userFirstName} userAbout={userAbout} />
                            // <>
                            //     <img className='modal__image' src={profilePic} alt="Profile" />
                            //     <h1 id="modal">{userFirstName}</h1>
                            //     <h4>{userAbout}</h4>
                            // </>
                            : modalContext === "RightSideTopBar" ?
                                <ModalRightSideTopBar profilePic={profilePic} userFirstName={userFirstName} userAbout={userAbout} />
                                // <>
                                //     <img className='modal__image' src={profilePic} alt="profile" />
                                //     <div className="modal__profileInfo">
                                //         <h1>{userFirstName}</h1>
                                //         <h4>I am go to show my old man what i can do</h4>
                                //     </div>
                                // </>
                                :
                                <ModalChatsModal profilePic={profilePic} userFirstName={userFirstName} userAbout={userAbout} />
                            // <>
                            //     <img className='modal__image' src={require(`../../images/${profilePic}`)} alt="profile" />
                            //     <h1 id="modal">{userFirstName}</h1>
                            //     <h4>{userAbout}</h4>
                            // </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;