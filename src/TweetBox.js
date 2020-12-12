import React, {useState} from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")
  
  const sendTweet = e => {
    e.preventDefault()
    db.collection('Post').add({
      displayName: "Sebastian Duarte",
      username: "Subsono33",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://images.unsplash.com/photo-1597769906792-4b2f9a3403a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    });
    setTweetMessage('')
    setTweetImage("")
  }
  return (
    <div className="tweetBox">
      <form >
        <div className="tweetBox__input">
          <Avatar src="https://images.unsplash.com/photo-1597769906792-4b2f9a3403a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" />

          <input
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage} placeholder="What's Happening?" type="text"></input>
        </div>
        <input
          onChange={e => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__inputImage"
          placeholder="Optional: Enter image URL"
          type="text"
        ></input>
        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
