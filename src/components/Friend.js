
const Friend = ({friend, user}) => {

    return (
        <div className={'task'}>
            {friend.Accepted && <h3> {friend.UserIdRequesting}</h3>}
        </div>
    )
}

export default Friend