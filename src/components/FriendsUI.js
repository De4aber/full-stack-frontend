import Friend from "./Friend";

const FriendsUI = ({friends, user}) => {

    return (
        <>
            {
                friends.map((friend) => (
                    <Friend key={friend.id}
                            friend={friend}
                            user={user}
                    />
                ))
            }
        </>

    )
}

export default FriendsUI