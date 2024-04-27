import React, { ChangeEvent } from 'react'
import { VStack, Flex, Select, Text } from '@chakra-ui/react'

interface ImageInputProps {
  onChange: (value: string) => void
}

const Photo: React.FC<ImageInputProps> = ({ onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }

  return (
    <VStack>
      <Flex flexDirection="row" width="xl" align="center" mb="4">
        <Text width="40%">Choose Your Organisation</Text>
        <Select placeholder="Select Your Company Photo" onChange={handleChange}>
          <option value="https://a.storyblok.com/f/182332/336x288/c83c3249f5/logo-symbol.png">
            Appcore Labs
          </option>
          <option value="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEUAAAD////Q0ND4+PjMzMzs7Oytra1OTk7a2trx8fE8PDzGxsbW1tagoKB6eno3NzeTk5NHR0e9vb1fX1+JiYlXV1cICAjk5ORCQkIVFRUqKiqAgIBoaGhvb2+1tbV0dHQcHBzQ8uQSAAABfUlEQVRoge2Y0XKCMBBFEwIUCESkIrYi+v9fWcFNQceEmmQf6ux5Eb3OmUxgNzsw9p7s/62cIAiCIN6UsozuiCdkk1Zq4y3nFjqFKOc8+UCUc+61+DU5P2PKucd9BUMuYyCKyqzLF/LIWx4//FzUs3/rK3+yPKnlA4KcZZAlGPJWLx1DzhIIDxhyvevOZWqTp76Pi03eQPiFIe9umXB12+QHQ4EFkev76d4YzfIaotzZbZR/67vJj97yrP280p9OZ6WOu3rQpc954+5e7efSw70iFx57siZPvdRrKy9xT/9dAHkyDM0VKWU8nqFitvf+8scS73+fRY8aMldoFWBjjHIWQ5RhyAuIhHM7/8vpX2DI9SnnPi1a5AqyCkOu5xb3JmCRbyBzb4wW+QXqtBy/VCkQSM5g0E0W16/NdjY5jHNicR1ODnPLNBQFl+sG0GLIBwgVhlxPLgOGfAth7iwXE8/nwe4Wjg0ALsVLU+n+7sPAZf4DvcgnCIIgCAKXH7B0DOtUNFevAAAAAElFTkSuQmCC">
            Rumor Avenue
          </option>
          <option value="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAMAAABuU5ChAAAA+VBMVEX////pQjU0qFNChfT6uwU0f/O4zvs6gfSJr/j6twDoOisjePPoNSXpPjDrWU/oLRr+9vZ7pff/vAAUoUAkpEn0ran619b82pT7wgD+68j947H/+e7//PafvPm/0vuBw5Df7+P63tz3xcPxl5HnJQ7qUEXxj4n4z83zoJzqSz/vgXrucWrsY1r1tbHrSBPoOjbvcSr0kx74rRH80XntZC3xhSPmGRr86+r4sk/936EJcfPS3/yowvnbwVKjsTjx9f5urEjkuBu9tC+ErkJyvoRRpj2az6hWs23j6/0emX2z2btAiuI8k8AyqkE5nZU1pGxCiOxVmtHJ5M+PSt3WAAACGElEQVRIieWSa3fSQBCGk20CJRcW2AWKxgJtqCmieNdatV5SUtFq5f//GJeE7CXJJOT4TZ+PO+c58+7MaNr/SWd60mecTDs1pMFp28dODPZnZw/369TXseXqHNfCblDdte84krTDwUFFwnMnJyXm+bSsmZ/vlcb1+6A2x5C1xYeyPgIyJlhtYDjzjOYyZA3oFighLYxni8UMY6dCG/jy9KzTQfI8DXSnTNN0kcl1lNE9dlxYC8TnnEVmAJ02qHlPllyb58vgmQ2Np0tYgzGMo2ex6IKRihi1mPhcZyYuO8McL4yYl0vrrI6mJZpx9Or1mzqa10rFt8p7o5ArXh+lXutC8d6ZBdiXvH6PeyPFsw8KMBu8fsG9+3t473l9yD1vD+/BX3v1cgqv3lzE/8A9NCUK5sn33vugeN1DQTcVTbG/9M56H+lEAzg2d54t7iW5657xCdEx5PF+B9Lj9oO9z4hBgIZX6YyaXfmZaV9QQkU781h+Hra+7jQaFv6Or8RW3r1rhErES641D9XKigox8jJaQxyAfZOpIQm6kiuT6BvfujqVuEpkkY43u+d1RBBF35v55aVJidKSEBRFiJAk/+0PM3NjgjFFMLc/WVYzlzImLBPprzvzrlBjHUmZSH8DmqatS0QSZtcjTxUBWSlZw1bckhaYlISTcm1rIqKolJJxtRWnXUVscTFsjWFFwoy7WTM2+zX69/gDaLcy7SET9nsAAAAASUVORK5CYII=">
            Google
          </option>
        </Select>
      </Flex>
    </VStack>
  )
}

export default Photo
