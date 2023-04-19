import { Box } from "./About.styled"
import { Avatar } from "./About.styled"
import { UserName } from "./About.styled"
import { Text } from "./About.styled"

export const About = ({avatar, username, tag, location}) => {
    return <Box>
        <Avatar src={avatar} alt="avatar" />
        <UserName>
            {username}
        </UserName>
        <Text>
            @{tag}
        </Text>
        <Text>
            {location}
        </Text>
    </Box>
}