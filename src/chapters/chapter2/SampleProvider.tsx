import React, { createContext, useState, ReactNode } from 'react'

type MediaContextType = {
  activeMedia: string | null
  setActiveMedia: (id: string | null) => void
}

export const MediaContext = createContext<MediaContextType | undefined>(
  undefined
)

export const MediaProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeMedia, setActiveMedia] = useState<string | null>(null)

  return (
    <MediaContext.Provider value={{ activeMedia, setActiveMedia }}>
      {children}
    </MediaContext.Provider>
  )
}

