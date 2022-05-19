import Button from "./Button";
import PropTypes from "prop-types";

const Login = ({ showCreateUser, onShowCreate, title }) => {

    return (
        <div className='header'>
            <h1>{title}</h1>
            <Button text={showCreateUser ? 'Login' : 'Create account'} onClick={onShowCreate}/>
        </div>
    )
}

Login.defaultProps = {
    title: 'Login',
}

Login.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Login