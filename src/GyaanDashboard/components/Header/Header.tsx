import React from 'react'
import InputElement from '../../../Common/InputElement'
import Button from '../../../Common/Button'
import strings from '../../i18n/Strings.json'
import { observer } from 'mobx-react'
import { StyledHeader } from './styledComponents'
import Avatar from '../../../Common/Avatar'
type Props={
   onClickWritePost:()=>void
}
@observer
class Header extends React.Component <Props>{
   render() {
      const { onClickWritePost } = this.props
      return (
         <StyledHeader>
            <InputElement size={InputElement.size.large} />
            <Button
               onClick={onClickWritePost}
               kind={Button.kind.primary}
               size={Button.size.large}
            >
               {strings.WritePost}
            </Button>
            <Avatar src={`img`} alt={`img`} />
         </StyledHeader>
      )
   }
}

export default Header
