import React from 'react';
import { observer } from 'mobx-react';

import { Typo24SemiBold } from "../../../../styleGuide/Typos";
import {
    StyledPostDomain,
    StyledDomainIcon,
    StyledDomainName
}
from './styledComponents';
@observer
class PostDomain extends React.Component {
    render() {

        const {
            domainName,
            fontSize
        } = this.props;
        const iconContent = domainName.slice(0, 2);
        return <StyledPostDomain>
        <StyledDomainIcon textSize={fontSize}>{iconContent}</StyledDomainIcon>
        <StyledDomainName textSize={fontSize}>{domainName}</StyledDomainName>
        </StyledPostDomain>
    }
}
export default PostDomain;
