import UserInfo from "./UserInfo";
import SearchBox from "./SearchBox";
import ChatContainer from "./ChatContainer";
import BottomNav from "./BottomNav";

export default function LeftSide() {

    return (
        <div className="LeftSide">
            <UserInfo />
            <SearchBox />
            <ChatContainer />
            <BottomNav />
        </div>

    );
}