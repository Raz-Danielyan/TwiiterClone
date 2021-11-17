import React from 'react';
import { GoBackButton } from '../components/goBackButton';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { HomeStyles, TextFieldHome } from '../componentStyle/HomeComponents';
import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/sideMenu';
import { AddTweetForm } from '../components/addTweetForm';
import { useDispatch, useSelector } from 'react-redux';
import { FetchTweets } from '../store/ducks/Tweets/actionCreaters';
import { selectTweetItem, selectLoadingState } from '../store/ducks/Tweets/selectors';
import { LoadingState } from '../store/ducks/User/contracts/user';
import { FetchTags } from '../store/ducks/tags/actionCreaters';
import { Tags } from '../components/tags';
import { Route } from 'react-router';
import { FullTweet } from './components/fullTweet';
import { User } from './components/User';
import { selectUserItem } from '../store/ducks/User/selectors';

export const Home = () => {
  const Classes = HomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetItem);
  const tweetsLoadingState = useSelector(selectLoadingState);
  const user = useSelector(selectUserItem);
  React.useEffect(() => {
    dispatch(FetchTags());
    dispatch(FetchTweets());
  }, [dispatch]);
  return (
    <Container className={Classes.wrapper} maxWidth="lg">
      <Grid container>
        <Grid sm={2} xs={3} item={true}>
          <SideMenu Classes={Classes} />
        </Grid>
        <Grid sm={7} item xs={6}>
          <Paper className={Classes.tweetsWrapper} variant="outlined">
            <Paper className={Classes.tweetsHeader} variant="outlined">
              <Route path={["/home/:any", "/user"]}>
                <GoBackButton />
              </Route>
              <Route path="/home/tweet">
                <Typography variant="h6">Твитнуть</Typography>
              </Route>
              <Route path="/user">
                <Typography variant="h6">{tweets[0] ? tweets[0].user.username : user ? user.username : "User"}</Typography>
              </Route>
              <Route exact path={['/home', '/home/search']}>
                <Typography variant="h6">Твиты</Typography>
              </Route>
            </Paper>
            <Paper>
              <Route path="/user/:name" component={User} />
              <Route exact path={['/home', '/home/search']}>
                <div className={Classes.addForm}>
                  <AddTweetForm Classes={Classes} />
                </div>
                <div className={Classes.addFormBottomLine} />
              </Route>
            </Paper>
            <Route path="/home" exact>
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
            </Route>
            <Route path="/home/tweet/:id" component={FullTweet} exact />
          </Paper >
        </Grid>
        <Grid item xs={3}>
          <div className={Classes.rightSide}>
            <TextFieldHome
              variant="outlined"
              placeholder="поиск по твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Tags Classes={Classes} />
            <Paper className={Classes.rightSideBlock}>
              <Paper className={Classes.rightSideBlockHeader}>
                <b>кого читать</b>
              </Paper>
              <Divider style={{ listStyle: 'none' }} component="li" />
              <List>
                <ListItem className={Classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://source.unsplash.com/user/erondu"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Dock Of Shame"
                    secondary={
                      <Typography component="span" variant="body2">
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container >
  )
}
