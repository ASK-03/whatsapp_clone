export default function ModalRightSideTopBar({ profilePic, userFirstName }) {
    return (
        <>
            <img className='modal__image' src={profilePic} alt="profile" />
            <div className="modal__profileInfo">
                <h1>{userFirstName}</h1>
                <h4>BORUTO UZUMAKI</h4>
            </div>
        </>

    );
}