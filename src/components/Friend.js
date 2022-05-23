import {useState} from "react";

const Friend = ({friend, user}) => {
    const[showFriendRequests, onShowFriendRequests] = useState(false)
    return (
        <div className={'friends'}>
            {friend.Accepted && <h3> {friend.UserIdRequesting}</h3>}
        </div>
    )
}

export default Friend