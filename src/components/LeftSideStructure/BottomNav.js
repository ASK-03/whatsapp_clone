
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from '@fortawesome/free-solid-svg-icons'
export default function BottomNav() {

    // click function for bottom nav buttons 
    function clickCrow() {
        console.log("Click toh hua h")
    }

    return (
        <div className="__bottomNav">
            <div className="__chatButtons __chats" onClick={clickCrow}>
                <h4>Chats</h4>
            </div>
            <div className="__chatButtons __status" onClick={clickCrow}>
                <h4>Status</h4>
            </div>
            <div className="__chatButtons __calls" onClick={clickCrow}>
                <h4>Calls</h4>
            </div>
            <div className="__chatButtons __settings" onClick={clickCrow}>
                <FontAwesomeIcon icon={faGear} className="FontAwesomeIcon" />
            </div>
        </div>
    );
}