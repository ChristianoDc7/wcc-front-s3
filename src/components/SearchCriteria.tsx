import React from 'react'
import { BoxDoted, BoxedArrowLeft, BoxedArrowRight, BoxedArrowwDown, HouseIcon, PeopleGroups, SettingsIcon } from '../icons/criteria'
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
            <div className="critery-box">
                <div className='text-icon'>
                    <PeopleGroups />
                    Guests
                </div>
                <div className='dual-dot'>
                    <BoxDoted height={"26px"} width={"26px"} />
                    <BoxDoted height={"26px"} width={"26px"} />
                </div>
            </div>
            <div className="critery-box">
                <div className='text-icon'>
                    <HouseIcon />
                    Rooms
                </div>
                <div className='dual-dot'>
                    <BoxDoted height={"26px"} width={"26px"} />
                    <BoxDoted height={"26px"} width={"26px"} />
                </div>
            </div>
            <div className="critery-action"><SettingsIcon /></div>
            <div className="critery-action orange-search"><SearchIcon /></div>
        </div>
    </div>
  )
}
