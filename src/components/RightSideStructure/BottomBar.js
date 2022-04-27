import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
export default function BottomBar() {

    const [input, setInput] = useState("")

    function changeSetInput(event) {
        setInput(event.target.value)
    }

    // function submit() {
    //     console.log("submitted")
    // }

    console.log(input)

    return (
        <div className="__BottomBar">
            <div className="camera">
                <div className="__circlebg"></div>
                <FontAwesomeIcon className="FontAwesomeIcons" icon={faPaperclip} />
            </div>
            <div className="chatBox">
                <input type="text" placeholder="Type a Message..." onChange={changeSetInput} />
            </div>
            <div className="sendButton">
                <div className="__circlebg"></div>
                <FontAwesomeIcon className="FontAwesomeIcons" icon={faPaperPlane} />
            </div>
        </div>
    );
}