import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const MyImage = ({ image }) => (
   <LazyLoadImage
      alt={image.alt}
      loading='lazy'
      src={image.src} // use normal <img> attributes as props
      width={'60%'}
      effect='blur'
   />
)

export default MyImage
