import { useState } from "react";

const CreateUser = ({ onCreateUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const onClickCreateUser = (e) => {
        e.preventDefault()

        if (!username || !password || !password2) {
            alert('Please fill out the fields')
            return
        }
        if (password.valueOf() !== password2.valueOf()) {
            alert('Your passwords does not match')
            return
        }
        onCreateUser({ username, password, birthDate: '04/04/1998' })

        setUsername('')
        setPassword('')
        setPassword2('')
    }

    return (
        <form className="create-user-form" onSubmit={onClickCreateUser}>
            <div className="form-control">
                <label>Select a username</label>
                <input type='text' placeholder='Username'
                    value={username} onChange={(e) =>
                        setUsername(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Select a password</label>
                <input type='password' placeholder='Password'
                    value={password} onChange={(e) =>
                        setPassword(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Retype your password</label>
                <input type='password' placeholder='Password'
                    value={password2} onChange={(e) =>
                        setPassword2(e.target.value)}
                />
            </div>
            <input type='submit' value='Create'
                className='btn btn-block' />
        </form>
    )
}
export default CreateUser