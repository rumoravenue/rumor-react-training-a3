import { useContext, createContext,  PropsWithChildren } from 'react'

//We will now create Media Context type
interface mediaProp {
  audioUrl: string
  videoUrl: string
}

//Here we have  created the Media Context
const MediaContext = createContext<mediaProp>({
  audioUrl : '',
  videoUrl : '',
})


//Here we have created the contextprovider
export const MediaContextProvider = ({ children }: PropsWithChildren) => {
  const audioUrl ='https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav'
  const videoUrl ='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

  return (
    <MediaContext.Provider value={{ audioUrl, videoUrl }}>
      {children}
    </MediaContext.Provider>
  )
}

// We will Create a Hook for your context, so that users don't need to call useContext directly
export const useMediaContext = () => {
  const context = useContext(MediaContext)
  if (!context) {
    throw new Error(
      'useMediaContext must be used inside the MediaContextProvider'
    )
  }
  return context
}
