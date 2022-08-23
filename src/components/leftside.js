import './rightside.css';
function Leftside({details}) {
    return (
        <div className="left">
            <div className="profile-pic"><img src={details.image} alt="profile pics" /></div>
            <span>{details.username}</span>
            <span>{details.latestCommit}</span>
        </div>
    )
}

export default Leftside;