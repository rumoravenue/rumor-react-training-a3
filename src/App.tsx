import { Box, ChakraProvider, HStack, theme } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './Sidebar'
import ChapterLayout from './ChapterLayout'
import Chapter1 from './chapters/chapter1'
import Chapter2 from './chapters/chapter2'
import Chapter3 from './chapters/chapter3'
import Chapter4 from './chapters/misc'

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <HStack
        alignContent="flex-start"
        minHeight={'100vh'}
        alignItems="flex-start"
        gap={0}
      >
        <Box
          minHeight={'100vh'}
          alignItems="flex-start"
          width={200}
          borderRightWidth={1}
        >
          <Sidebar />
        </Box>
        <Box flex="1 1 auto">
          <Routes>
            <Route
              index
              element={
                <ChapterLayout title="Chapter 1">
                  <Chapter1 />
                </ChapterLayout>
              }
            />
            <Route
              path="chapter1"
              element={
                <ChapterLayout title="Chapter 1 - Components and Compositions">
                  <Chapter1 />
                </ChapterLayout>
              }
            />
            <Route
              path="chapter2"
              element={
                <ChapterLayout title="Chapter 2 - Context API">
                  <Chapter2 />
                </ChapterLayout>
              }
            />
            <Route
              path="chapter3"
              element={
                <ChapterLayout title="Chapter 3 - Ref Forwarding">
                  <Chapter3 />
                </ChapterLayout>
              }
            />
            <Route
              path="misc"
              element={
                <ChapterLayout title="Misc">
                  <Chapter4 />
                </ChapterLayout>
              }
            />
          </Routes>
        </Box>
      </HStack>
    </BrowserRouter>
  </ChakraProvider>
)
