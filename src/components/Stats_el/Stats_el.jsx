import PropTypes from 'prop-types';
import css from './Stats_el.module.css'

export const StatsEl = ({label, percentage }) =>{
    return (
        <div>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage} %</span>
        </div>
    )
    }

StatsEl.protoTypes = {
       label: PropTypes.string.isRequired,
       percentage: PropTypes.number.isRequired,
}
