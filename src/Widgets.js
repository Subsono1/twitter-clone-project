import React from 'react'
import './Widgets.css'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widget__searchIcon" />
        <input placeholder="Search Twitter" type="text"></input>
      </div>

      <div className="widgets__widgetsContainer">
        <h2>What's Happening</h2>

        <TwitterTweetEmbed tweetId={"1244782501039652866"} />
        
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Subsono33"
          options={{height: 400}}/>
      </div>
      <TwitterShareButton
          url={"https://facebook.com/subsono"}
          options={{ text: "#twitter clone is the best!", via: "Subsono33" }}
        />
    </div>
  )
}

export default Widgets
