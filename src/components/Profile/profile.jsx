import PropTypes from 'prop-types';
import {
  Wrapper,
  Avatar,
  Name,
  Tag,
  Stats,
  StatsItem,
  StatsLabel,
  Location,
} from './profile.styled';
export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Wrapper>
      <div class="description">
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <Stats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <span class="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <span class="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <span class="quantity">{stats.likes}</span>
        </StatsItem>
      </Stats>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
