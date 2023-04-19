import { Box } from "./Stats.styled"
import { Block } from "./Stats.styled"

export const Stats = ({followers, views, likes}) => {
    return <Box>
        <Block>
            <span>Folowers</span>
            <span>{followers}</span>
        </Block>
        <Block>
            <span>Views</span>
            <span>{views}</span>
        </Block>
        <Block>
            <span>Likes</span>
            <span>{likes}</span>
        </Block>
    </Box>
}