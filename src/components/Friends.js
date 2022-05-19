import Friend from "./Friend";

const Friends = ({friends, user}) => {

    return (
        <>
            <h3>Your friends!</h3>
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

export default Friends