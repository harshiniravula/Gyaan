import React from 'react';
import { observer } from 'mobx-react';
import Avatar from '../../../Common/Avatar';
import {
    StyledPostDomain,
    StyledDomainName
}
from './styledComponents';
@observer
class PostDomain extends React.Component {
    render() {

        const {
            domainName,
            isTitle,
            domainPic
        } = this.props;
        const size = isTitle ? 'medium' : 'small';


        const iconAlt = domainName.slice(0, 2);
        return <StyledPostDomain>
        <Avatar
        borderType={Avatar.borderType.rounded}
        size={Avatar.imageSize[size]}
        src={domainPic}
        alt={iconAlt}/>
        <StyledDomainName isTitle={isTitle}>{domainName}</StyledDomainName>
        </StyledPostDomain>
    }
}
export default PostDomain;
