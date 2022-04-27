import chatsInfo from "../../ChatsInfo";
import ModalContextProvider from "../../contexts/ModelContext";
import Chats from "./Chats";
export default function ChatContainer() {

    // changes the raw data from ChatsInfo.js to react element and gives it as props to it 
    // API Call Mimic
    const chat = chatsInfo.map(chats => {
        return (
            <ModalContextProvider key={chats.id}>
                <Chats
                    key={chats.id}
                    chats={chats}
                />
            </ModalContextProvider>
        )
    })

    return (
        <div className="__chatContainer">
            {chat}
        </div>
    );
}