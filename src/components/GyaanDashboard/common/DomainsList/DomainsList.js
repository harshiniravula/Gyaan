import React from 'react';
import { observer } from 'mobx-react';
import { observable, computed } from 'mobx';
import Strings from '../../i18n/Strings.json';
import Domain from '../Domain';
import {
    StyledListTitle,
    StyledTitle
}
from './styledComponents';
@observer
class DomainsList extends React.Component {
    @observable isExpanded;
    @observable onClickSeeAll;
    @observable hasClickedSeeAll;
    constructor(props) {
        super(props);
        this.isExpanded = true;
        this.hasClickedSeeAll = false;
        this.limitOnShowingDomains = 2;
    }
    @computed
    get listOfItems() {

        const { listOfItems } = this.props;
        if (this.isExpanded) {

            if (listOfItems.length> this.limitOnShowingDomains
            && !this.hasClickedSeeAll
            ) {
                let showListOfItems = listOfItems.slice(0, this.limitOnShowingDomains);
                showListOfItems.push({ id: Strings.SeeAll, domain: Strings.SeeAll });

                return showListOfItems;
            }
            else {
                return listOfItems;
            }
        }
        else {
            return [];
        }

    }
    toggleSeeAll = () => {
        this.hasClickedSeeAll = !this.hasClickedSeeAll;
    }
    onClickDomain = (event) => {
        const id = event.target.id;
        if (id === Strings.SeeAll) {
            this.toggleSeeAll();
        }
        else {
            const { onClickDomain } = this.props;
            onClickDomain(id);
        }
    }
    toggleCollapseExpand = () => {
        this.isExpanded = !this.isExpanded;
        if(!this.isExpanded){
            this.hasClickedSeeAll=false;
        }
    }
    render() {
        const { title } = this.props;
        console.log(this.listOfItems);
        return (
            <React.Fragment>
            <StyledListTitle onClick={this.toggleCollapseExpand}>
            <StyledTitle>{title}</StyledTitle>
            </StyledListTitle>
            {this.isExpanded?
            <React.Fragment>
            {this.listOfItems.map(eachDomain=>{
                return(
                    <Domain id={eachDomain.id}
                    key={eachDomain.id}
                    onClickDomain={this.onClickDomain}
                    domain={eachDomain.domain}/>
            )})}
            </React.Fragment>:null
            }
            </React.Fragment>
        );

    }
}

export default DomainsList;
