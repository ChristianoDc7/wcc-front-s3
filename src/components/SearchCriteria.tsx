import React from 'react'
import { BoxDoted, BoxedArrowLeft, BoxedArrowRight, BoxedArrowwDown } from '../icons/criteria'
import { SearchIcon } from '../icons/navbarIcons'

export const SearchCriteria = () => {
  return (
    <div className='search-wrapper'>
        <div className='input-search'>
            <div className='search-icon'>
                <SearchIcon />
            </div>
            <div className='global-search'>
                <input type="text" name="Search" id="search" value={"City of Moab Utah"}/>
                <BoxDoted height={"26px"} width={"26px"} className="doted"/>
            </div>
        </div>
        <div className="critery-list">
            <div className="critery-box">
                <div className='text-icon'>
                    <BoxedArrowLeft />
                    Check in
                </div>
                <BoxedArrowwDown />
            </div>
            <div className="critery-box">
                    <div className='text-icon'>
                        <BoxedArrowRight/>
                        Check out
                    </div>
                    <BoxedArrowwDown />
            </div>
            <div className="critery-box"></div>
            <div className="critery-box"></div>
        </div>
    </div>
  )
}
