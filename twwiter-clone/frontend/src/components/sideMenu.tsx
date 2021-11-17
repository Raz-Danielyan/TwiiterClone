import React from 'react';
import { useSelector } from 'react-redux';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import MarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PersonOutlineOutlined';
import CreateIcon from '@material-ui/icons/Create';
import { Button, Hidden, IconButton, Typography } from '@material-ui/core';
import { HomeStyles } from '../componentStyle/HomeComponents';
import { DialogModal } from './ModalBlock';
import { AddTweetForm } from './addTweetForm';
import { Link } from 'react-router-dom';
import { UserSideProlfill } from './UserSideProlfill';
import { selectUserItem } from '../store/ducks/User/selectors';

interface SideMenuProps {
  Classes: ReturnType<typeof HomeStyles>
}
export const SideMenu: React.FC<SideMenuProps> = ({ Classes }: SideMenuProps): React.ReactElement => {
  const [addVisibleTweet, setAddVisibleTweet] = React.useState<boolean>(false);
  const user = useSelector(selectUserItem);
  const handleClickOpenDialog = (): void => {
    setAddVisibleTweet(true);
  };
  const handleClickCloseDialog = (): void => {
    setAddVisibleTweet(false);
  };
  return (
    <ul className={Classes.sideMenuList}>
      <Link to="/home">
        <li className={Classes.sideMenulistItem}>
          <IconButton style={{ margin: '10px 0' }} color="primary">
            <TwitterIcon className={Classes.logo} />
          </IconButton>
        </li>
      </Link>
      <li className={Classes.sideMenulistItem}>
        <Button className={Classes.sideMenulistItemButton}>
          <SearchIcon className={Classes.sideMenulistItemIcon} />
          <Hidden smDown>
            <Typography className={Classes.sideMenulistItemLable} variant="h6">Поиск</Typography>
          </Hidden>
        </Button>
      </li>
      <li className={Classes.sideMenulistItem}>
        <Button className={Classes.sideMenulistItemButton}>
          <NotificationIcon className={Classes.sideMenulistItemIcon} />
          <Hidden smDown>
            <Typography className={Classes.sideMenulistItemLable} variant="h6">уведомление</Typography>
          </Hidden>
        </Button>
      </li>
      <li className={Classes.sideMenulistItem}>
        <Button className={Classes.sideMenulistItemButton}>
          <EmailIcon className={Classes.sideMenulistItemIcon} />
          <Hidden smDown>
            <Typography className={Classes.sideMenulistItemLable} variant="h6">Сообщение</Typography>
          </Hidden>
        </Button>
      </li>
      <li className={Classes.sideMenulistItem}>
        <Button className={Classes.sideMenulistItemButton}>
          <MarkIcon className={Classes.sideMenulistItemIcon} />
          <Hidden smDown>
            <Typography className={Classes.sideMenulistItemLable} variant="h6">Закладки</Typography>
          </Hidden>
        </Button>
      </li>
      <li className={Classes.sideMenulistItem}>
        <Button className={Classes.sideMenulistItemButton}>
          <ListIcon className={Classes.sideMenulistItemIcon} />
          <Hidden smDown>
            <Typography className={Classes.sideMenulistItemLable} variant="h6">Список</Typography>
          </Hidden>
        </Button>
      </li>
      <li className={Classes.sideMenulistItem}>
        <Button className={Classes.sideMenulistItemButton}>
          <UserIcon className={Classes.sideMenulistItemIcon} />
          <Hidden smDown>
            <Link to={`/user/${user && user._id}`}>
              <Typography className={Classes.sideMenulistItemLable} variant="h6">Профиль</Typography>
            </Link>
          </Hidden>
        </Button>
      </li>
      <li style={{ marginRight: 20, }} className={Classes.sideMenulistItem}>
        <Button onClick={handleClickOpenDialog} className={Classes.sideMenulistItemButtonTweet} fullWidth>
          <Hidden smDown>
            твитнуть
          </Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </Button>
        <DialogModal handleClose={handleClickCloseDialog} open={addVisibleTweet}>
          <div style={{ width: 550 }}>
            <AddTweetForm maxRow={15} Classes={Classes} />
          </div>
        </DialogModal>
      </li>
      <li style={{ margin: "0 18px 10px 0", position: 'fixed', bottom: 10, width: "14%" }}>
        <UserSideProlfill Classes={Classes} />
      </li>
    </ul>
  )
}
