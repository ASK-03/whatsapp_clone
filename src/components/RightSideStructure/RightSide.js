// import { NarutoProfilePic } from "./images/naruto_Profile_Pic.jpg"
import TopBar from "./TopBar.js"
import BottomBar from "./BottomBar.js"
export default function RightSide() {
    return (
        <div className="RightSide">
            <div className="__topBar">
                <TopBar />
            </div>
            <div className="__bottomBar">
                <BottomBar />
            </div>
        </div>
    );
}