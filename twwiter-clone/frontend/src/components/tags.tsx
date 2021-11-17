import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';

import { HomeStyles } from '../componentStyle/HomeComponents';
import { LoadingState } from '../store/ducks/User/contracts/user';
import { useSelector } from 'react-redux';
import { selectTagsItem, selectTagsLoadingState } from '../store/ducks/tags/selectors';
import { Link } from 'react-router-dom';

interface TagsProps {
  Classes: ReturnType<typeof HomeStyles>,
}

export const Tags: React.FC<TagsProps> = ({ Classes }: TagsProps): React.ReactElement | null => {
  const tags = useSelector(selectTagsItem);
  const tagsLoadingState = useSelector(selectTagsLoadingState);

  if (tagsLoadingState === LoadingState.ERROR) {
    return null;
  };

  return (
    <Paper className={Classes.rightSideBlock}>
      <Paper className={Classes.rightSideBlockHeader}>
        <b>актуальные темы</b>
      </Paper>
      <List>
        {
          tagsLoadingState === LoadingState.LOADED ?
            (
              tags.map(item =>
                <React.Fragment key={item._id}>
                  <ListItem className={Classes.rightSideBlockItem}>
                    <Link to={`/home/search?q=${item._id}`}>

                      <ListItemText
                        primary={item.name}
                        secondary={
                          <Typography component="span" variant="body1">
                            Твитов: {item.count}
                          </Typography>
                        }
                      />
                    </Link>
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              )
            )
            :
            (
              <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
              </div>
            )
        }
      </List>
    </Paper>
  )
}
