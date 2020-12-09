import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://images.unsplash.com/photo-1597769906792-4b2f9a3403a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerTex">
            <h3>
              Sebastian Duarte{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                @Seba
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p> This is my account, wanted to show you my Twitter clone.</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/iEwxJTQmX4vd7NejxC/giphy.gif"
          alt=" "
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
