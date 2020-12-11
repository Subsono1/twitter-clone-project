import React, { useState, useEffect}from 'react'
import TweetBox from './TweetBox'
import './Feed.css'
import Post from './Post'
import db from './firebase'

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("Post").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        </div>
        
        

      

      <TweetBox />

      
      <Post
        displayName='Sebastian Duarte'
        username='Subsono33'
        verified={true}
        text='This is my Twitter clone'
        avatar='https://images.unsplash.com/photo-1597769906792-4b2f9a3403a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
      image="https://media.giphy.com/media/iEwxJTQmX4vd7NejxC/giphy.gif"/>
     
      
    </div>
  )
}

export default Feed
