import React, { useRef } from 'react';
import { Box, Button, VStack, HStack } from '@chakra-ui/react';
import Video from './components/Input';

const Chapter3: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <VStack align="start" spacing={4}>
      <Box w="70%">
        <Video ref={videoRef} src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      </Box>
      <HStack spacing={4}>
        <Button onClick={handlePlay}>Play</Button>
        <Button onClick={handlePause}>Pause</Button>
      </HStack>
    </VStack>
  );
};

export default Chapter3;
