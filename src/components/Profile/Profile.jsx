import PropTypes from "prop-types";
import {
    Card,
    Avatar,
    Description,
    Username,
    UserTag,
    Location,
    Stats,
    StatItem,
    StatLabel,
    StatQuantity
} from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Card>
            <Description>
                <Avatar
                src={avatar}
                alt="User avatar"
                width={140}
                />
                <Username>{username}</Username>
                <UserTag>@{tag}</UserTag>
                <Location>{location}</Location>
            </Description>

            <Stats>
                <StatItem>
                <StatLabel>Followers</StatLabel>
                <StatQuantity>{stats.followers}</StatQuantity>
                </StatItem>
                <StatItem>
                <StatLabel>Views</StatLabel>
                <StatQuantity>{stats.views}</StatQuantity>
                </StatItem>
                <StatItem>
                <StatLabel>Likes</StatLabel>
                <StatQuantity>{stats.likes}</StatQuantity>
                </StatItem>
            </Stats>
        </Card>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}