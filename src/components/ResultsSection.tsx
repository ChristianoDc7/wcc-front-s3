import React from 'react'
import { GalleryItem } from '../widgets/GalleryItem'

export const ResultsSection = () => {
  return (
    <div className='result'>
        <div className="result-label">
            <div>
                Results in <b> Moab, UT </b>
            </div>
            <div className='result-count'>34</div>
        </div>
        <div style={{fontSize:"14px"}}>Recommended hotels in area</div>
        <div className="gallery-section">
            <GalleryItem title='Spring Hill Suites' rating='4.5/5' index={1}/>
            <GalleryItem title='Spring Hill Suites' rating='4.5/5' index={2}/>
            <GalleryItem title='Spring Hill Suites' rating='4.5/5' index={3}/>
        </div>
    </div>
  )
}
