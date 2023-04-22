import PropTypes from "prop-types"

export const Title = ({title}) => {
    return <div>
        {title && (
        <h2>{title}</h2>
        )}
    </div>
}

Title.propTypes = {
    title: PropTypes.string
}