import {FaTimes} from "react-icons/fa";
import {useState} from "react";
const Cappsule = ({cappsule, onDelete, onOpen}) => {
    const[showMessage, setShowMessage] = useState(false)

    function checkForValidDate(){
        const date = new Date(cappsule.openTime);
        let today = new Date()
        if(date.getTime() > today.getTime()){
            alert("You are not allowed to open this yet!")
            return false
        }
        return true
    }

    function showMessageFunction(id) {
        if(checkForValidDate()){
            setShowMessage(!showMessage)
            onOpen(id)
        }
    }

    return(
        <div className={`task ${cappsule.showMessage ? 'reminder' : ''}`} onDoubleClick={() =>  showMessageFunction(cappsule.id)}>
            <h3>From: {cappsule.sender}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(cappsule.id)}
                />
            </h3>
            <p><small>{cappsule.openTime}</small></p>
            {showMessage && <p>{cappsule.message}</p>}
        </div>
    )
}

export default Cappsule