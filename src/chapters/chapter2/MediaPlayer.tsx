import React, { useEffect, useRef } from 'react'
import { useMedia } from './SampleProvider'

type MediaPlayerProps = {
  id: string
  type: 'audio' | 'video'
  src: string
}

const MediaPlayer: React.FC<MediaPlayerProps> = ({ id, type, src }) => {
  const { playingMedia, setPlayingMedia } = useMedia()
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement>(null)

  const handlePlay = () => setPlayingMedia(id)
  const handlePause = () => setPlayingMedia(null)

  useEffect(() => {
    const element = mediaRef.current
    if (!element) return

    if (playingMedia === id) {
      element.play()
    } else {
      element.pause()
    }
  }, [playingMedia, id])

  return type === 'video' ? (
    <video
      ref={mediaRef as React.MutableRefObject<HTMLVideoElement>}
      width={'50%'}
      id={id}
      src={src}
      controls
      onPlay={handlePlay}
      onPause={handlePause}
    />
  ) : (
    <audio
      ref={mediaRef as React.MutableRefObject<HTMLAudioElement>}
      id={id}
      src={src}
      controls
      onPlay={handlePlay}
      onPause={handlePause}
    />
  )
}

export default MediaPlayer
