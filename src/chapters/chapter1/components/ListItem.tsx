import { Box, Text, HStack } from '@chakra-ui/react'
import Avatar from './Avatar'
import Media from './Media'
import Title from './Title'
import Description from './Description'
import IconSign from './IconSign'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { listItemTypes } from '../DataType'

const ListItem: React.FC<listItemTypes> = ({
  avatarUrl,
  mediaUrl,
  title,
  description,
}) => {
  return (
    <Box>
      <HStack
        border="2px"
        borderColor="gray.200"
        borderRadius="0.5rem"
        mb={'.1rem'}
      >
        {mediaUrl && (
          <Box>
            <Media url={mediaUrl} alt="mediaImg" />
          </Box>
        )}
        {avatarUrl && (
          <Box>
            <Avatar url={avatarUrl} alt="AvtarImg" />
          </Box>
        )}
        {(title || description) && (
          <Box flex="1" ml="1rem">
            <Text>
              <Title title={title || ''} />
            </Text>
            <Text>
              <Description description={description || ''} />
            </Text>
          </Box>
        )}
        <Box pr={'1rem'}>
          <IconSign icon={ArrowForwardIcon} />
        </Box>
      </HStack>
    </Box>
  )
}

export default ListItem
