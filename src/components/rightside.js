import './Rightstyle.css';
import Time from './Time';

function Rightside ({details}) {
    return (
        <div className='right'>
            <div className='commithash'>{details.commitHash}</div>
            <Time timeStamp={details.timeStamp} />
            <div className='clockEtCommits'>
                <i className="fa-solid fa-clock-rotate-left"></i>
                <span className='commits'>{details.commits} commits</span>
            </div>
        </div>
    )
}

export default Rightside;