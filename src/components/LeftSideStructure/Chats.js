import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModelContext";
import Modal from "./Modal";
export default function Chats(props) {

    const { modal, toggleImageModal } = useContext(ModalContext);

    return (
        <>
            {
                !modal ?
                    <div className="chatContainer">
                        <div className="chatProfilePic" onClick={() => toggleImageModal()}>
                            <img src={require(`../../images/${props.chats.chatPic}`)} alt="Profile" />
                        </div>
                        <div className="__chatName__latestchat">
                            <div className="chatName">
                                <h3>{props.chats.chatName}</h3>
                            </div>
                            <div className="__latestChat">
                                {/*conditional arguments to show sent and seen*/}
                                {(props.chats.chatSent && !props.chats.chatSeen) && <FontAwesomeIcon icon={faCheckDouble} className="FontAwesomeIcon" color="#cdcdcdff" />}
                                {(props.chats.chatSent && props.chats.chatSeen) && <FontAwesomeIcon icon={faCheckDouble} className="FontAwesomeIcon" color="#23c7f2" />}
                                <h5>{props.chats.LastChat}</h5>
                            </div>
                        </div>
                    </div>
                    :
                    <Modal toggleImageModal={toggleImageModal} profilePic={props.chats.chatPic} userFirstName={props.chats.chatName} userAbout={props.chats.chatAbout} modalContext="ModalContext" />
            }
        </>
    );
}