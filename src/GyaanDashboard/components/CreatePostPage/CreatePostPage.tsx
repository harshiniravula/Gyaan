import React from 'react'
import { observer } from 'mobx-react'
import {  computed } from 'mobx'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'


import InputElement from '../../../Common/InputElement'
import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure'
import Button from '../../../Common/Button'

import strings from '../../i18n/Strings.json'
import {
   StyledPostSection,
   StyledTextArea,
   StyledFooter,
   StyledTags
} from './styledComponents'
import DomainModel from "../../stores/models/DomainModel"

interface Props{
   selectedDomainId:number|null
   followingDomains:Array<DomainModel>
   title:string
   content:string
   onChangeTitle:(e:any)=>void
   onChangeContent:(e:any)=>void
   onChangeDomainId:(e:any)=>void
   onClickSubmit:()=>void
   onSelectTag:(e:any)=>void
}

type Tags = Array<
   {tagId:number
   tagName:string}>


function customTheme(theme) {
   return {
      ...theme,
      colors: {
         ...theme.colors,
         primary: 'green'
      }
   }
}
const customStyles = {
   container: provided => ({
      ...provided,
      minWidth: 200
   })
}

@observer
class CreatePostPage extends React.Component<Props> {
   constructor(props) {
      super(props)
   }
   @computed
   get getTags() {
      const { tags} = this.selectedDomain()
      return tags.map(tag => {
         return {
            id: tag.tagId,
            value: tag.tagName,
            label: tag.tagName
         }
      })
   }

   
   selectedDomain=():any=> {
      const { followingDomains, selectedDomainId } = this.props
      return (
         followingDomains.find(
            domain => domain.domainId === selectedDomainId
         ) || {}
      )
   }

   @computed
   get followingDomain() {
      const { followingDomains } = this.props
      return followingDomains.map(domain => {
         return {
            value: domain.domainName,
            id: domain.domainId,
            label: domain.domainName
         }
      })
   }
   
   renderTags = observer(() => {
      const { onSelectTag } = this.props
      return (
         <CreatableSelect
            styles={customStyles}
            className='m-3'
            onChange={onSelectTag}
            theme={customTheme}
            placeholder='select tag'
            isSearchable
            isMulti
            options={this.getTags}
         />
      )
   })

   render() {
      const {
         title,
         content,
         onChangeTitle,
         onChangeContent,
         selectedDomainId,
         onChangeDomainId,
         onClickSubmit
      } = this.props
      const { getTagsAPIError, getTagsAPIStatus, getTags } = this.selectedDomain()
      return (
         <StyledPostSection>
            <InputElement
               placeholder={strings.title}
               type='text'
               value={title}
               onChange={onChangeTitle}
               isTitle={true}
               size={InputElement.size.full}
            />
            <StyledTags>
               <Select
                  styles={customStyles}
                  className='m-3'
                  onChange={onChangeDomainId}
                  theme={customTheme}
                  placeholder='select domain'
                  isSearchable
                  options={this.followingDomain}
               />
               <LoadingWrapperWithFailure
                  apiStatus={getTagsAPIStatus}
                  apiError={getTagsAPIError}
                  onRetryClick={getTags}
                  renderSuccessUI={this.renderTags}
               />
            </StyledTags>

            <StyledTextArea
               value={content}
               onChange={onChangeContent}
               placeholder={strings.topicDescription}
            />

            <StyledFooter>
               <Button
                  data-testid='submitBtn'
                  disabled={!(title && selectedDomainId !== null)}
                  size={Button.size.medium}
                  onClick={onClickSubmit}
                  kind={Button.kind.primary}
               >
                  {strings.submit}
               </Button>
            </StyledFooter>
         </StyledPostSection>
      )
   }
}
export default CreatePostPage
