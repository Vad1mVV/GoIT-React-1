import { About } from "components/About/About"
import { Stats } from "components/Stats/Stats"
import { Box } from "./Profile.styled"

export const Profile = ({userData}) => {
    return  <Box>
        <About avatar={userData.avatar} username={userData.username} tag={userData.tag} location={userData.location} />
        <Stats followers={userData.stats.followers} views={userData.stats.views} likes={userData.stats.likes} />
    </Box>
}