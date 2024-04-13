/**
 * This is a sample code for a SampleContext
 * This code sample demonstrates some good patterns for creating Contexts
 *
 * - Typings for the Context
 * - Exports a Provider
 * - Exports a hook to consume the context
 */
import { PropsWithChildren, createContext, useContext } from 'react'

/** Define the typings for your context */
type SampleContextProps = {
  sampleProp: string
}

/** Create the context */
const SampleContext = createContext<SampleContextProps | null>(null)

/** Create the Provider for your context */
export const SampleProvider = ({ children }: PropsWithChildren) => {
  return (
    <SampleContext.Provider value={{ sampleProp: 'sampleValue' }}>
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
