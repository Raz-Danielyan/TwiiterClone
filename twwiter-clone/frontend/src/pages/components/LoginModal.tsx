import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { DialogModal } from '../../components/ModalBlock';
import { TextField, Button, IconButton } from '@material-ui/core';
import classes from '../../componentStyle/SignInComponents';
import { FetchUser } from '../../store/ducks/User/actionCreaters';
import { LoadingState } from '../../store/ducks/User/contracts/user';
import { selectUserLoadingState } from '../../store/ducks/User/selectors';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';


const LoginFormSchema = yup.object({
  email: yup.string().email('неверная почта').required('введите почту'),
  password: yup.string().min(6, 'минимальная длина пароля 6 символов').required(),
}).required();

export interface LoginFormProps {
  email: string;
  password: string;
}

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
  Classes: ReturnType<typeof classes>
}

export const LoginModal: React.FC<LoginModalProps> = ({ open, handleClose, Classes }: LoginModalProps): React.ReactElement => {
  const dispatch = useDispatch();
  let UserStatus = useSelector(selectUserLoadingState);
  const [ButtonClickErorrBug, setButtonClickErorrBug] = React.useState<boolean>(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginFormSchema)
  });
  const onSubmit = (data: LoginFormProps) => {
    dispatch(FetchUser(data));
    setButtonClickErorrBug(true);
  };
  const handleClickOnClose = () => {
    setButtonClickErorrBug(false);
  };
  return (
    <DialogModal title="Войти в Твиттер" open={open} handleClose={handleClose} >
      <form onSubmit={handleSubmit(onSubmit)} >
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) =>
            <TextField
              error={!!errors.email}
              helperText={errors.email?.message}
              className={Classes.loginSideField}
              autoFocus
              margin="dense"
              id="email"
              label="E-Mail"
              type="email"
              fullWidth
              variant="filled"
              {...field} />
          }
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) =>
            <TextField
              error={!!errors.password}
              helperText={errors.password?.message}
              className={Classes.loginSideField}
              margin="dense"
              id="password"
              label="пароль"
              type="password"
              fullWidth
              variant="filled"
              {...field}
            />
          }
        />
        <Button disabled={UserStatus === LoadingState.LOADING_FOR_AUTIFICAIRATION} type="submit" style={{ marginBottom: 20 }} color="primary" variant="contained" fullWidth>Войти</Button>
        <Snackbar
          open={UserStatus === "ERROR" && ButtonClickErorrBug}
          autoHideDuration={6000}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          message="Error with adding New Tweet"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClickOnClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </form>
    </DialogModal >
  )
}
