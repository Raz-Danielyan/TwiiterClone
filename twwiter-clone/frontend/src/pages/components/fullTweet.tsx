import React from 'react';
import format from 'date-fns/format';
import ruLang from 'date-fns/locale/ru';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router'
import { clearTweet, FetchTweet } from '../../store/ducks/Tweet/actionCreaters';
import { selectTweetItem, selectTweetLoadingState } from '../../store/ducks/Tweet/selectors';
import { HomeStyles } from '../../componentStyle/HomeComponents';
import { LoadingState } from '../../store/ducks/User/contracts/user';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';
import { Avatar, Paper, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import CommetsIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ImagesTweet } from '../../components/imagesTweet';
import { RemoveTwetsAddLoadingState } from '../../store/ducks/Tweets/actionCreaters';

export const FullTweet: React.FC = (): React.ReactElement => {
  const Classes = HomeStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const tweet = useSelector(selectTweetItem);
  const tweetLoaded = useSelector(selectTweetLoadingState);
  const params: { id?: string } = useParams();
  const id = params.id;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickDelate = () => {
    setAnchorEl(null);
    history.push('/home');
    id && dispatch(RemoveTwetsAddLoadingState(id));
  };
  const handleClicktoUser = () => {
    history.push(`/user/${tweet && tweet.user?._id}`);
  }
  React.useEffect(() => {
    if (id) {
      dispatch(FetchTweet(id));
    }
    return () => {
      dispatch(clearTweet());
    }
  }, [dispatch, id]);
  return (
    <>
      {
        tweetLoaded === LoadingState.LOADED && tweet !== undefined ?
          (
            <Paper style={{ padding: 10 }} className={classNames(Classes.tweetsWrapperUser, Classes.tweet, Classes.AddTweet)} variant="outlined">
              <div className={Classes.addTweetWrapper}>
                <div className={Classes.addTweetWrapperAvatar} onClick={handleClicktoUser}>
                  <Avatar
                    className={Classes.tweetAvatar}
                  />
                  <Typography><b>{tweet.user.fullname}</b> <br /> <span className={Classes.twwetUserName}>@{tweet.user.username}</span></Typography>
                </div>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls="long-menu"
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    'aria-labelledby': 'long-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    редактировать твит
                  </MenuItem>
                  <MenuItem onClick={handleClickDelate}>
                    удалить твит
                  </MenuItem>
                </Menu>
              </div>
              <div>
                <Typography className={Classes.addTweetText} variant="body1" gutterBottom>{tweet.text}</Typography>
                {tweet.images && <ImagesTweet Classes={Classes} images={tweet.images} />}
                <Typography className={Classes.tweetUserName}>
                  <span>{format(new Date(tweet.createdAt), 'H:mm', { locale: ruLang })}</span>
                  <span>{format(new Date(tweet.createdAt), ' MMM  yyyyг.', { locale: ruLang })}</span>
                </Typography>
                <div className={Classes.addTweetIcons}>
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
              </div>
            </Paper>
          )
          :
          (
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </div>
          )
      }
    </>
  )
}
