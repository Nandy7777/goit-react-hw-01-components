import PropTypes from 'prop-types';
import {
  StatsSection,
  StatsTitle,
  StatsList,
  StatsItem,
} from './statistics.styled';

export default function Statistics({ title, stats }) {
    return (
      <StatsSection>
        {title && <StatsTitle>{title}</StatsTitle>}

        <StatsList>
          {stats.map(({ id, label, percentage }) => (
            <StatsItem key={id}>
              <span className ="label">{label}</span>
              <span className ="percentage">{percentage}%</span>
            </StatsItem>
          ))}
        </StatsList>
      </StatsSection>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
};
