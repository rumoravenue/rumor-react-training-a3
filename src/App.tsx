import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Chapter1 from "./pages/chapter1"

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
    <Routes>
      <Route index element={<Chapter1 />} />
      <Route path="chapters1" element={<Chapter1 />} />
    </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
