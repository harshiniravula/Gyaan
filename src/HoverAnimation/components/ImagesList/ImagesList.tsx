import React, { Component } from 'react'
import images from './Images.json'
import ImageC from '../Image'
import { observable } from 'mobx'
import { Wrapper, LeaveBtn, Image, Text } from '../Image/styledComponents'
import { observer } from 'mobx-react'

@observer
class ImagesList extends Component {
   @observable id
   constructor(props) {
      super(props)

      this.id = null
   }
   onClickImage = event => {
      this.id = +event.target.id
   }
   getImage = () => {
      let image = images.find(image => image.id === this.id)
      return image || { src: '', alt: '' }
   }
   render() {
      if (this.id) {
         return (
            <Wrapper>
               <LeaveBtn onClick={this.onClickImage}>Leave</LeaveBtn>
               <Image src={this.getImage().src} alt={this.getImage().alt} />
               <Text>sample text about the image</Text>
            </Wrapper>
         )
      } else {
         return (
            <div>
               <ol style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {images.map(image => (
                     <ImageC
                        key={image.id}
                        image={image}
                        onClickImage={this.onClickImage}
                     />
                  ))}
               </ol>
            </div>
         )
      }
   }
}

export default ImagesList
