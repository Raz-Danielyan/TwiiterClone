import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { HomeStyles } from '../componentStyle/HomeComponents';
import { Avatar, Typography, Popover, MenuItem } from '@material-ui/core';
import ArrowBottom from '@material-ui/icons/KeyboardArrowDown';
import { selectUserItem } from '../store/ducks/User/selectors';
import { RemoveUserGetMe } from '../store/ducks/User/actionCreaters';
interface UserSideProlfillProps {
  Classes: ReturnType<typeof HomeStyles>
};

export const UserSideProlfill: React.FC<UserSideProlfillProps> = ({ Classes }: UserSideProlfillProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUserItem);
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
  const enchorRef = React.useRef<HTMLDivElement>();

  const handleOpenPros = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    enchorRef.current = event.currentTarget;
    setVisiblePopup(true);
  };

  const handleClosePopup = (): void => {
    setVisiblePopup(false);
  };
  const handleLogOutPopup = (): void => {
    window.localStorage.removeItem('token');
    dispatch(RemoveUserGetMe());
  };

  if (!user) {
    return null;
  }
  const a = `user/${user._id}`;
  const handleInGoProfile = (): void => {
    setVisiblePopup(false);
    history.push(a);
  };
  return (
    <>
      <div onClick={handleOpenPros} className={Classes.sideProfile}>
        <Avatar />

        <div className={Classes.sideProfieMenu} >
          <p style={{ margin: 0, fontWeight: 700, maxWidth: "79px", overflow: "hidden", whiteSpace: "nowrap" }}>{user.fullname}</p>
          <Typography style={{ maxWidth: "100px", overflow: "hidden", whiteSpace: "nowrap" }}>@{user.username}</Typography>
        </div>
        <ArrowBottom />
      </div>
      <Popover
        open={visiblePopup}
        onClose={handleClosePopup}
        anchorEl={enchorRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      >
        <div className={Classes.ProfileMenu}>
          <MenuItem onClick={handleInGoProfile}>Profile</MenuItem>
          <MenuItem onClick={handleLogOutPopup}>Logout</MenuItem>
        </div>
      </Popover>
    </>
  )
}
