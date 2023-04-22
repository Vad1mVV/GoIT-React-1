import PropTypes from 'prop-types';
import { Friend } from 'components/Friend/Friend';
import { Box } from './FriendList.styled';

export const FriendList = ({friendsData}) => {
    return <Box>
        {friendsData.map(friendInfo => (
            <Friend key={friendInfo.id} isOnline={friendInfo.isOnline} avatar={friendInfo.avatar} name={friendInfo.name} />
        ))}
    </Box>
}

FriendList.propTypes = {
    friendsData: PropTypes.array
}