import { Input, InputProps, VStack } from '@chakra-ui/react'
import React, { ForwardRefRenderFunction } from 'react'

/**
 * By extending these props
 * our Input component would start accepting
 * all the props that are supported by Chakra Input element
 */
interface IProps extends InputProps {
  label?: string
}

const ForwardRefInput: ForwardRefRenderFunction<HTMLInputElement, IProps> = (
  { label, ...props },
  ref
) => (
  <VStack alignItems="flex-start">
    {label ? <label>{label}</label> : null}
    <Input ref={ref} {...props} />
  </VStack>
)

export default React.forwardRef(ForwardRefInput)
