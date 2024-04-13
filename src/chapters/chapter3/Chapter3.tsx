import { Box, Button } from '@chakra-ui/react'
import Input from './components/Input'
import { useRef } from 'react'

const Chapter3 = () => {
  /**
   * Tell useRef to expect HTMLInputRef
   */
  const inputRef = useRef<HTMLInputElement>(null)
  const handleFocusClick = () => inputRef.current && inputRef.current.focus()

  return (
    <Box>
      <Input
        /** Input component will forward the DOM node ref to this ref */
        ref={inputRef}
        label="Enter your name"
        placeholder="Enter your name"
      />
      <Button onClick={handleFocusClick}>Focus</Button>
    </Box>
  )
}

export default Chapter3
