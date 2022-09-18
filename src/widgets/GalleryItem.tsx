import React from 'react'
import { LocationIcon, StarIcon } from '../icons/unclassified'

export const GalleryItem = (props:{title:string, rating:string, index: number}) => {
  return (
    <div className={`gallery-item bgc-${props.index}`} >
        <div className='price'>$160<span>/right</span></div>
        <div className='title'>{props.title}</div>
        <div className="addons">
            <div className="rates">
                <StarIcon height={"18px"} width="18px"/>
                <div className="rating">{props.rating}</div>
            </div>
            <div className="location">
                <LocationIcon />
                <div className="location-text">Moab, UT</div>
            </div>
        </div>
    </div>
  )
}
