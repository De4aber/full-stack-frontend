import Button from "./Button";

const Login = ({ showCreateUser, onShowCreate}) => {

    return (
        <div className='header'>
            <h2>{showCreateUser ? 'Create account' : 'Login'}</h2>
            <Button text={showCreateUser ? 'Login' : 'Create account'} onClick={onShowCreate}/>
        </div>
    )
}

export default Login