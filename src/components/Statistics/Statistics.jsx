import PropTypes from 'prop-types';
import { StatsEl } from 'components/Stats_el/Stats_el';
import css from './Statistics.module.css'

export const Statistics = ({stats}) => {
    return (
        <ul className={css.statList}>
             {stats.map(stat => (
                 <li className={css.statItem} key={stat.id}>
                     <StatsEl
                         label={stat.label}
                         percentage={stat.percentage} />
                     
        </li>
             ))}  
        </ul>
    )
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
       percentage: PropTypes.number.isRequired,
    }),
  ),
};