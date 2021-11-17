import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';

export const GoBackButton: React.FC = (): React.ReactElement => {
  const hisory = useHistory();
  const HandleClickGoBack = () => {
    hisory.goBack();
  };
  return (
    <IconButton style={{ marginRight: 20 }} onClick={HandleClickGoBack} color="primary">
      <ArrowBackIcon />
    </IconButton>
  )
}
