import PropTypes from "prop-types"
import { Box } from "./StatsItem.styled"

export const StatsItem = ({label, percentage}) => {
    return <Box>
        <p>{label}</p>
        <p>{percentage}%</p>
    </Box>
}

StatsItem.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
}