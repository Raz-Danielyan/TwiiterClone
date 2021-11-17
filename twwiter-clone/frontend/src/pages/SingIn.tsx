import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentdIcon from '@material-ui/icons/ModeCommentOutlined';
import classes from '../componentStyle/SignInComponents';
import { LoginModal } from './components/LoginModal';
import { RegisterModal } from './components/RegisterModal';
export const SingIn: React.FC = (): React.ReactElement => {
  const Classes = classes();
  const [open, setOpen] = React.useState<'signIn' | 'signUp' | undefined>(undefined);
  const handleClickOnLogin = (): void => {
    setOpen('signIn');
  }
  const handleClickOnRegister = (): void => {
    setOpen('signUp');
  }
  const handleClose = (): void => {
    setOpen(undefined);
  }
  return (
    <div className={Classes.wrapper}>
      <section className={Classes.blueSide}>
        <TwitterIcon color="primary" className={Classes.blueSideBigIcon} />

        <ul className={Classes.blueSideListInfo}>
          <li className={Classes.blueSideListInfoItem}>
            <Typography variant="h6"><SearchIcon /> читайте о том что вам интересно</Typography>
          </li>
          <li className={Classes.blueSideListInfoItem}>
            <Typography variant="h6"><PeopleIcon /> узнайте о чем говорят в мире</Typography>
          </li>
          <li>
            <Typography variant="h6"><ModeCommentdIcon />присоединяйтесь к обществу</Typography>
          </li>
        </ul>
      </section>
      <section className={Classes.makeSide}>
        <div className={Classes.loginSideWrapper}>
          <TwitterIcon color="primary" className={Classes.loginTwitterIcon} />
          <Typography variant="h4" className={Classes.loginSideTitle}>узнайте что происходит в мире прямо сейчас</Typography>
          <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
          <br />
          <Button onClick={handleClickOnRegister} style={{ marginBottom: 20 }} variant="contained" color="primary" fullWidth>зарегистрироваться</Button>
          <Button onClick={handleClickOnLogin} variant="outlined" color="primary" fullWidth>войти</Button>
          <LoginModal open={open === 'signIn'} Classes={Classes} handleClose={handleClose} />
          <RegisterModal open={open === 'signUp'} Classes={Classes} handleClose={handleClose} />
        </div>
      </section>
    </div>
  )
}