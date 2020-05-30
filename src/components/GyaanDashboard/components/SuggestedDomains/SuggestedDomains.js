import React from 'react';
import { observer } from 'mobx-react';
import { observable, computed } from 'mobx';

import WithToggle from '../../common/WithToggle';
import Strings from '../../i18n/Strings.json';
import {
    StyledListTitle,
    StyledTitle,
    StyledListItem,
    StyledList
}
from './styledComponents';
@observer
class SuggestedDomains extends React.Component {
    @observable isExpanded;
    @observable onClickSeeAll;
    @observable hasClickedSeeAll;
    constructor(props) {
        super(props);
        this.hasClickedSeeAll = false;
        this.limitOnShowingDomains = 2;

    }
    @computed
    get listOfItems() {

        const { listOfItems } = this.props;
        if (listOfItems == undefined) {
            return [];
        }

        else if (listOfItems.length > this.limitOnShowingDomains &&
            !this.hasClickedSeeAll
        ) {
            let showListOfItems = listOfItems.slice(0, this.limitOnShowingDomains);
            showListOfItems.push({ domainId: Strings.SeeAll, domainName: Strings.SeeAll });

            return showListOfItems;
        }
        else {
            return listOfItems;
        }

    }
    toggleSeeAll = (bool) => {
        this.hasClickedSeeAll = bool;
    }
    onClickDomain = (event) => {
        const id = event.target.id;
        if (id === Strings.SeeAll) {
            this.toggleSeeAll(true);
        }
        else {

        }
    }
    toggleCollapseExpand = () => {
        this.isExpanded = !this.isExpanded;
        if (!this.isExpanded) {
            this.hasClickedSeeAll = false;
        }
    }
    render() {
        const { title } = this.props;



        return (
            <WithToggle isClickedSeeAll={this.hasClickedSeeAll}
                toggleSeeAll={this.toggleSeeAll}>
        {(state)=>
            <React.Fragment>
            <StyledListTitle onClick={state.onToggle}>
            <StyledTitle>{title}</StyledTitle>
            </StyledListTitle>
            {!state.toggleStatus?
            <StyledList>
            {this.listOfItems.map(eachDomain=>{
                return(
                    <StyledListItem id={eachDomain.domainId}
                    key={eachDomain.domainId}
                    onClick={this.onClickDomain}
                    >{eachDomain.domainName}</StyledListItem>
            )})}
            </StyledList>:null
            }
            </React.Fragment>
        }
        </WithToggle>
        );

    }
}


export default SuggestedDomains;
