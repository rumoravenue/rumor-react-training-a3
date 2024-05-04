import React, { useEffect, useRef, useCallback, useContext } from 'react';
import { MediaContext } from './SampleProvider';

type MediaPlayerProps = {
  id: string;
  mediaType: 'audio' | 'video';
  src: string;
};

 export const MediaPlayer: React.FC<MediaPlayerProps> = ({ id, mediaType, src }) => {
  const mediaContext = useContext(MediaContext);
  
  if (!mediaContext) {
    throw new Error('MediaPlayer must be used within a MediaProvider');
  }
  
  const { activeMedia, setActiveMedia } = mediaContext;

  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement>(null);

  const handlePlay = useCallback(() => {
    if (activeMedia !== id) {
      setActiveMedia(id);
    }
  }, [activeMedia, id, setActiveMedia]);

  useEffect(() => {
    const mediaElement = mediaRef.current;
    if (!mediaElement) return;

    const playOrPause = () => {
      if (activeMedia === id) {
        mediaElement.play();
      } else {
        mediaElement.pause();
      }
    };

    mediaElement.addEventListener('play', handlePlay);
    playOrPause();

    return () => {
      mediaElement.removeEventListener('play', handlePlay);
    };
  }, [activeMedia, id, handlePlay]);

  return mediaType === 'video' ? (
    <video
      ref={mediaRef as React.MutableRefObject<HTMLVideoElement>}
      width={'28%'}
      id={id}
      src={src}
      controls
    />
  ) : (
    <audio
      ref={mediaRef as React.MutableRefObject<HTMLAudioElement>}
      id={id}
      src={src}
      controls
    />
  );
};


