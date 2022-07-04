import PropTypes from 'prop-types';
import { StatsEl } from 'components/StatsSection/StatsEl/StatsEl';
import { StatsList, StatItem } from './Statistic.styled';

function setBackgroundColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


export const Statistics = ({stats}) => {
    return (
        <StatsList>
             {stats.map(stat => (
                 <StatItem key={stat.id} randomColor={setBackgroundColor()}>
                     <StatsEl
                         label={stat.label}
                         percentage={stat.percentage} />
                     
        </StatItem>
             ))}  
        </StatsList>
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