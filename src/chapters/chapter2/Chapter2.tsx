import {Flex} from '@chakra-ui/react'

import { MediaContextProvider } from './MediaContext'
import Block1 from './Block1'
import Block2 from './Block2'
import Block3 from './Block3'
import Block4 from './Block4'

const Chapter2 = () => {
  return (
    <>
      <Flex wrap='wrap' gap='30'>
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4/>
      </Flex>
    </>
  )
}

/** Since chapter 2 need to use the context, provider should be in the parent of the Chapter 2 */
export const Chapter2WithProvider = () => {
  return (
    <MediaContextProvider>
      <Chapter2 />
    </MediaContextProvider>
  )
}

export default Chapter2WithProvider
