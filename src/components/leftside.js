import './LeftStyle.css';
function Leftside({details}) {
    return (
        <div className="left">
            <div className="profile-pic"></div>
            <div className='username'>{details.username}</div>
            <div>{details.latestCommit}</div>
        </div>
    )
}

export default Leftside;