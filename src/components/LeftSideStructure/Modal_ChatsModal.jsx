// for function calling from Modal 

export default function ModalChatsModal({ profilePic, userFirstName, userAbout }) {
    return (
        <>
            <img className='modal__image' src={require(`../../images/${profilePic}`)} alt="profile" />
            <h1 id="modal">{userFirstName}</h1>
            <h4>{userAbout}</h4>
        </>

    );
}




