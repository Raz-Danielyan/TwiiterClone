import React from 'react';
import '../../componentStyle/user.css';
import { HomeStyles } from '../../componentStyle/HomeComponents';
import { selectLoadingState, selectTweetItem } from '../../store/ducks/Tweets/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { Tweet } from '../../components/Tweet';
import { Avatar, Tabs, Tab, CircularProgress } from '@material-ui/core';
import { FetchTweets } from '../../store/ducks/Tweets/actionCreaters';
import { LoadingState } from '../../store/ducks/User/contracts/user';
import { formatDateFns } from '../../utils/formatDate';
import { selectUserItem } from '../../store/ducks/User/selectors';

export const User = () => {
  const Classes = HomeStyles();
  const [value, setValue] = React.useState(0);
  const tweets = useSelector(selectTweetItem);
  const user = useSelector(selectUserItem);
  const dispatch = useDispatch();
  const tweetsLoadingState = useSelector(selectLoadingState);
  React.useEffect(() => {
    dispatch(FetchTweets());
    return () => {
      dispatch(FetchTweets());
    };
  }, [dispatch]);
  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="user_header" />
      <div className="user__info">
        <Avatar className="user__avatar" />
        <h2 className="user__info-fullname">{tweets[0] ? tweets[0].user?.fullname : user?.fullname}</h2>
        <span className="user__info-username">{tweets[0] ? tweets[0].user?.username : user?.username}</span>
        <p className="user__info-description">Im a good programer ynd i will say ...</p>
        <ul className="user__info-details">
          <li>Armenia,Erevan</li>
          <li><a className="link" href="https://mui.com/components/tabs/#main-content">archakov.im</a></li>
          <li>дата рождения: 30 April 2004</li>
          <li>регистрация: {formatDateFns(new Date(tweets[0] ? tweets[0].user?.updatedAt! : user?.updatedAt!))}</li>
        </ul>
      </div>
      <div>
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" variant="fullWidth">
          <Tab label="Твити" />
          <Tab label="Твити и ответы" />
          <Tab label="медиа" />
          <Tab label="нравится" />
        </Tabs>
        <div className="user__tweets">
          {
            tweetsLoadingState === LoadingState.LOADED ?
              (
                tweets.map(items =>
                  <Tweet
                    {...items}
                    key={items._id}
                    Classes={Classes}
                  />
                )
              )
              :
              (
                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                  <CircularProgress />
                </div>
              )
          }
        </div>
      </div>
    </>
  )
}
