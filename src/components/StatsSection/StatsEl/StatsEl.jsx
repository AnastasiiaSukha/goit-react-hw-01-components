import PropTypes from 'prop-types';
import { Label, Percentage } from './StatsEl.styled';

export const StatsEl = ({label, percentage }) =>{
    return (
        <>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
        </>
    )
    }

StatsEl.protoTypes = {
       label: PropTypes.string.isRequired,
       percentage: PropTypes.number.isRequired,
}
