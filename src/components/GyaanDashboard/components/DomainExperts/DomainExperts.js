import React from 'react';
import Avatar from '../../common/Avatar';

import {
    StyledDomainExperts
}
from './styledComponents';
class DomainExperts extends React.Component {

    constructor() {
        this.domainExperts = [];
    }
    componentDidMount() {
        const { domainExperts } = this.props;

        this.domainExperts = domainExperts;
    }


    render() {
        const { domainExperts } = this.props;
        return (
            <StyledDomainExperts>
                {

                }
            </StyledDomainExperts>

        )
    }
}

export default DomainExperts;
