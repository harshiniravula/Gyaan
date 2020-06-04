import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import InputElement from '../../../Common/InputElement'
import Button from '../../../Common/Button'

import strings from '../../i18n/Strings.json'
import {
   StyledPostSection,
   StyledTextArea,
   StyledFooter
} from './styledComponents'

const animatedComponents = makeAnimated()
@observer
class CreatePostPage extends React.Component {
   render() {
      return (
         <StyledPostSection>
            <InputElement
               defaultValue={strings.title}
               type='text'
               isTitle={true}
               size={InputElement.size.full}
            />
            <StyledTextArea cols='10' placeholder={strings.topicDescription} />

            <Select
               closeMenuOnSelect={false}
               components={animatedComponents}
               isMulti
               options={['ui/ux', 'react']}
            />

            <StyledFooter>
               <Button size={Button.size.medium} kind={Button.kind.primary}>
                  {strings.submit}
               </Button>
            </StyledFooter>
         </StyledPostSection>
      )
   }
}
export default CreatePostPage
