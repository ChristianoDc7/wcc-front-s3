import React from 'react'
import { Arrowleft, ArrowRight } from '../icons/unclassified'
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
            <GalleryItem title='Arne’s Royal Hawailan' rating='5/5' index={2}/>
            <GalleryItem title='Spring Hill Suites' rating='4.5/5' index={3}/>
        </div>
        <div className="navigation">
            <Arrowleft />
            <div className="dash bl"></div>
            <div className="dash gr"></div>
            <ArrowRight />
        </div>
    </div>
  )
}
