import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem/FriendListItem';
import {
  Friends,
  FriendsItem,
} from './FriendList.styled'

export const FriendList = ({ friends }) => {
   return ( <Friends>
         {friends.map(friend => (
                 <FriendsItem key={friend.id}>
                 <FriendListItem
                isOnline = {friend.isOnline}
                 avatar={friend.avatar}
                 name={friend.name}/>
                     
        </FriendsItem>
             ))}  

</Friends>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
       isOnline: PropTypes.bool.isRequired,
       name: PropTypes.string.isRequired,
    }),
  ),
};