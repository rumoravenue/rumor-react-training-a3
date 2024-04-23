// src/MediaContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react'

type MediaContextType = {
  playingMedia: string | null
  setPlayingMedia: (id: string | null) => void
}

const MediaContext = createContext<MediaContextType | undefined>(undefined)

export const MediaProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [playingMedia, setPlayingMedia] = useState<string | null>(null)

  return (
    <MediaContext.Provider value={{ playingMedia, setPlayingMedia }}>
      {children}
    </MediaContext.Provider>
  )
}

export const useMedia = () => {
  const context = useContext(MediaContext)
  if (!context) {
    throw new Error('useMedia must be used within a MediaProvider')
  }
  return context
}
