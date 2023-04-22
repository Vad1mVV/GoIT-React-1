import PropTypes from 'prop-types';
import { Title } from "components/Title/Title"
import { StatsItem } from "components/StatsItem/StatsItem"
import { Box } from './Statistics.styled';
import { FlexBox } from './Statistics.styled';

export const Statistics = ({statsData}) => {
    return <Box>
        <Title title='1234567' />
        <FlexBox>
            {statsData.map(statsItem => (
            <StatsItem key={statsItem.id} label={statsItem.label} percentage={statsItem.percentage} />
            ))}
        </FlexBox>
    </Box>
}

Statistics.propTypes = {
    statsData: PropTypes.array
}