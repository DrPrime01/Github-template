import moment from "moment";

function Time ({timeStamp}) {
    const timeString = moment(timeStamp).fromNow();
    return (
        <div className="time">
            {timeString}
        </div>
    )
}

export default Time;