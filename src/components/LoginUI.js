import {useState} from "react";

const LoginUI = ({ onLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onClickLogin = (e) => {
        e.preventDefault()

        if(!username || !password){
            alert('Login failed')
            return
        }

        onLogin({username, password})

        setUsername('')
        setPassword('')
    }

    return (
        <form className="login-form" onSubmit={onClickLogin}>
            <div className="form-control">
                <label>Username</label>
                <input type='text' placeholder='Username'
                       value={username} onChange={(e) =>
                    setUsername(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='password' placeholder='Password'
                       value={password} onChange={(e) =>
                    setPassword(e.target.value)}
                />
            </div>
            <input type='submit'value='Login'
                   className='btn btn-block'/>
        </form>
    )
}

export default LoginUI