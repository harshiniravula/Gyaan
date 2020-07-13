import React, { Component } from 'react'
import images from './Images.json'
import Image from './Image'
import { LazyLoadImage } from 'react-lazy-load-image-component'
class ImagesList extends Component {
   render() {
      return (
         <div>
            {images.map(image => (
               <LazyLoadImage
                  height={400}
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  style={{ margin: '2px' }}
               />
            ))}
         </div>
      )
   }
}

export default ImagesList
