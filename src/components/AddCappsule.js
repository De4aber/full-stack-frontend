import {useState} from 'react'

const AddCappsule = ({ onAdd }) => {
    const [receiver, setReceiver] = useState('')
    const [message, setMessage] = useState('')
    const [openTime, setOpenTime] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!receiver){
            alert('Please add a receiver')
            return
        }

        onAdd({receiver, message, openTime})

        setReceiver('')
        setMessage('')
        setOpenTime('')
    }

    return(
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Receiver</label>
                <input type='text' placeholder='Add receiver'
                value={receiver} onChange={(e) =>
                    setReceiver(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Message</label>
                <textarea cols="60" rows="5" type='text' placeholder='Add message'
                       value={message} onChange={(e) =>
                    setMessage(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>OpenTime</label>
                <input type='datetime-local' placeholder='Add Open Time'
                       value={openTime} onChange={(e) =>
                    setOpenTime(e.target.value)}
                />
            </div>

            <input type='submit'value='Save Cappsule'
            className='btn btn-block'/>
        </form>
    )
}
export default AddCappsule