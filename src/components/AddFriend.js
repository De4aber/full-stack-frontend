import {useState} from "react";
import Button from "./Button";
import FriendRequests from "./FriendRequests";
import FriendsUI from "./FriendsUI";

const AddFriend = ({onSendRequest}) => {

    const [friend, setFriend] = useState('')
    const [showFriendRequests, setShowFriendRequests] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!friend){
            alert('Please add a receiver')
            return
        }

        onSendRequest({friend})

        setFriend('')
    }

    const onClickFriendRequests = () => {
        setShowFriendRequests(!showFriendRequests)
    }
    
    return (

        <form className='add-form'>
            <div className='form-control'>
                <label>Add a friend</label>
                <input type='text' placeholder='Friends username'
                       value={friend} onChange={(e) =>
                    setFriend(e.target.value)}
                />
            </div>
            <input type='submit'value='Send friend request'
                   className='btn btn-block' onClick={onSubmit}/>

            <Button text={!showFriendRequests ? 'Show friend requests' : 'Hide friend requests'} onClick={onClickFriendRequests}/>
            {!showFriendRequests && <FriendRequests/>}

        </form>


    )
}

export default AddFriend