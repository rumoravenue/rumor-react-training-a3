import Customcard from './components/Customcard'
import Avatar from './components/Avtaar' // Renamed from Avtaar
import Photo from './components/Photo'
import JobTitle from './components/Jobtitle' // Renamed from Jobtitle
import Description from './components/Desc' // Renamed from Desc
import { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'

const Chapter1 = () => {
  const [photo, setPhoto] = useState<string>('')
  const [jobTitle, setJobTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [avatar, setAvatar] = useState<string>('')

  return (  
    <>
      <Flex direction='row' gap='2rem' align='center'>
        <Box>
          <Photo onChange={setPhoto} />
          <JobTitle onChange={setJobTitle} />
          <Avatar onChange={setAvatar} /> <Description onChange={setDesc} />
        </Box>
        <Box>
          <Customcard
            photo={photo}
            jobTitle={jobTitle}
            desc={desc}
            avatar={avatar}
          />
        </Box>
      </Flex>
    </>
  )
}

export default Chapter1
