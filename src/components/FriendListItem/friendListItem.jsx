import PropTypes from 'prop-types';
import {
  FrendItem,
  FrendStatus,
  FriendAvatar,
  FrienName,
} from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
      <FrendItem>
        <FrendStatus isOnline={isOnline}>{isOnline}</FrendStatus>
        <FriendAvatar src={avatar} alt="User avatar" width="48" />
        <FrienName>{name}</FrienName>
      </FrendItem>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};