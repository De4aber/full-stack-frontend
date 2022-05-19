import Button from "./Button";

const Friends = ({showAddFriend, onShowAddFriend}) => {

    return (
        <div className='header'>
            <h2>{showAddFriend ? 'Add friends' : 'Your friends'}</h2>
            <Button text={showAddFriend ? 'Show friends' : 'Add friend'} onClick={onShowAddFriend}/>
        </div>
    )
}

export default Friends