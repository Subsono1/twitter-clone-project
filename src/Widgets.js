import React from 'react'
import './Widgets.css'
import SearchIcon from "@material-ui/Search"

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widget__searchIcon" />
        <input placeholder="Search Twitter" type="text"></input>
      </div>
    </div>
  )
}

export default Widgets
