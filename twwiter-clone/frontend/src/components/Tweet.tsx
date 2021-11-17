import React from 'react'
import classNames from 'classnames';
import { Avatar, Paper, Typography, IconButton } from '@material-ui/core';
import CommetsIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import { HomeStyles } from '../componentStyle/HomeComponents';
import { formatDateFns } from '../utils/formatDate';
import { ImagesTweet } from './imagesTweet';
import { useHistory } from 'react-router';
interface TweetProps {
  Classes: ReturnType<typeof HomeStyles>;
  user: {
    fullname: string;
    username: string;
    avatarUrl?: string;
  };
  createdAt: string;
  text: string;
  _id: string;
  images: string[];
}

export const Tweet: React.FC<TweetProps> = ({ Classes, user, text, _id, createdAt, images }: TweetProps): React.ReactElement => {
  const history = useHistory();
  const handleClick = (event: any) => {
    event.preventDefault();
    history.push(`/home/tweet/${_id}`);

  };
  return (
    <div onClick={(event) => handleClick(event)}>
      <Paper style={{ padding: 10 }} className={classNames(Classes.tweetsWrapperUser, Classes.tweet)} variant="outlined">
        {
          user?.avatarUrl !== undefined ?
            <Avatar
              className={Classes.tweetAvatar}
              alt={`Avatar the person ${user.username}`}
              src={user.avatarUrl}
            />
            :
            <Avatar
              className={Classes.tweetAvatar}
              alt={`Avatar the person ${user.fullname}`}
            />
        }
        <div style={{ width: "100%" }}>
          <Typography><b>{user.fullname}</b> <span className={Classes.twwetUserName}>@{user.username}</span> <span className={Classes.twwetUserName}>• {formatDateFns(new Date(createdAt))}</span></Typography>
          <Typography variant="body1" gutterBottom>
            {text}
            <ImagesTweet Classes={Classes} images={images} />
          </Typography>
          <div className={Classes.twwetFooter}>
            <div>
              <IconButton >
                <CommetsIcon style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton >
                <RepeatIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton >
                <LikeIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton >
                <ReplyIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </Paper>
    </div >
  )
}
