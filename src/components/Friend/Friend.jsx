import PropTypes from 'prop-types';
import { Box } from './Friend.styled';
import { Img } from './Friend.styled';
import { Online } from './Friend.styled';
import { Offline } from './Friend.styled';

export const Friend = ({isOnline, avatar, name}) => {
 return <Box>
    {isOnline ? (
        <Online/>
    ) : (
        <Offline/>
    )}

    <Img src={avatar} alt="avatar" />
    <p>{name}</p>
 </Box>
}

Friend.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string
}