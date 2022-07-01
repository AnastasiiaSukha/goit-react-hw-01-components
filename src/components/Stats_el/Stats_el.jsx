import PropTypes from 'prop-types';

export const StatsEl = ({label, percentage }) =>{
    return (
        <div>
            <span className="label">{label}</span>
            <span className="percentage">{percentage} %</span>
        </div>
    )
    }

StatsEl.protoTypes = {
       label: PropTypes.string.isRequired,
       percentage: PropTypes.number.isRequired,
}
