import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledInput = styled.input`
   ${tw `bg-white border border-black`};
`
const StyledErrorMessage = styled.p`
   ${`text-red`};
`

const StyledWrapper = styled.div`
   ${``};
`

const StyledErrorInput = styled(StyledInput)`
   ${tw `text-red border-red-500`};
`
export { 
   StyledInput,
   StyledErrorMessage,
   StyledWrapper,
   StyledErrorInput
}
