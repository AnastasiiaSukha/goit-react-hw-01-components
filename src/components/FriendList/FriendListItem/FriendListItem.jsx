import PropTypes from 'prop-types';
import {
    Status,
    FriendAvatar,
    FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (<>
            <Status isOnline={isOnline}>{isOnline}</Status>
        <FriendAvatar src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</ FriendName>
        </>
    )
}

FriendListItem.protoTypes = {
       avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
       name: PropTypes.string.isRequired,
}