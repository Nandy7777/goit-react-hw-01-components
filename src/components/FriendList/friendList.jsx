import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/friendListItem'

export default function FriendList({ friends }) {
    return (
        <ul class="friend-list">
        {friends.map(friend => (
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name = {friend.name}
                isOnline={friend.isOnline}
            />
        ))}
    </ul>
    )
}
FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};


