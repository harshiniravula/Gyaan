import React from 'react'
import InputElement from '../../../Common/InputElement'
import { StyledPostSection } from './styledComponents'
class CreatePostSection extends React.Component {
   render() {
      return (
         <StyledPostSection>
            <InputElement type='text' isTitle={true}/>
         </StyledPostSection>
      )
   }
}
export default CreatePostSection
