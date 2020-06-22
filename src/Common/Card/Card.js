import React, { Component } from 'react'
import { computed } from 'mobx'
import { StyledCard } from './styledComponents'
class Card extends Component {

   @computed
   get isClickable() {
      const { onClick } = this.props;
      return onClick ? true : false;
   }

   render() {
      const {
         children,
         onClick,
         className,
         ...other
      } = this.props;

      return (
         <StyledCard {...other} 
            isClickable={this.isClickable}
            onClick={onClick}
            className={className}
            children={children}
            />
      )
   }
}
export default Card
