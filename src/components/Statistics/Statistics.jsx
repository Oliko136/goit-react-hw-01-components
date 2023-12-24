import PropTypes from "prop-types";
import {
    StatSection,
    Title,
    StatList,
    StatItem,
    StatLabel,
    StatPercentage
} from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    console.log(stats.length)
    return (
        <StatSection>
            {title && <Title>{title}</Title>}

            <StatList>
                {stats.map(({ id, label, percentage }) => {
                    console.log(stats.length);
                    return <StatItem key={id} quantity={stats.length}>
                        <StatLabel>{label}</StatLabel>
                        <StatPercentage>{percentage}%</StatPercentage>
                    </StatItem>
                }
    
                )}

            </StatList>
        </StatSection>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
}