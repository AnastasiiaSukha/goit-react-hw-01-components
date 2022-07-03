import PropTypes from 'prop-types';
import {FriendListItem} from 'components/FriendListItem/FriendListItem'

export const FriendList = ({ friends }) => {
   return ( <ul className="friend-list">
         {friends.map(friend => (
                 <li className="item" key={friend.id}>
                 <FriendListItem
                isOnline = {friend.isOnline}
                 avatar={friend.avatar}
                 name={friend.name}/>
                     
        </li>
             ))}  

</ul>)
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