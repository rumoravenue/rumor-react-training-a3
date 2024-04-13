/**
 * This is a sample code for a SampleContext
 * This code sample demonstrates some good patterns for creating Contexts
 *
 * - Typings for the Context
 * - Exports a Provider
 * - Exports a hook to consume the context
 */
import { PropsWithChildren, createContext, useContext, useState } from 'react'

/** Define the typings for your context */
type SampleContextProps = {
  sampleProp: number
  setSampleProp: (newValue: number) => void
}

/** Create the context */
const SampleContext = createContext<SampleContextProps>({
  sampleProp: 1,
  setSampleProp: () => {},
})

/** Create the Provider for your context */
export const SampleProvider = ({ children }: PropsWithChildren) => {
  const [sampleProp, setSampleProp] = useState<number>(1)

  return (
    <SampleContext.Provider value={{ sampleProp, setSampleProp }}>
      {children}
    </SampleContext.Provider>
  )
}

/** Create a Hook for your context, so that users don't need to call useContext directly */
export const useSampleContext = () => {
  const context = useContext(SampleContext)
  if (!context) {
    throw new Error('useSampleContext must be used inside the SampleProvider')
  }
  return context
}
