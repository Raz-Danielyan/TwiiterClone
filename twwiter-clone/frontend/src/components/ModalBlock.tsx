import React from 'react'
import { DialogTitle, Dialog, IconButton, DialogContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from '../componentStyle/SignInComponents';

interface ModalProps {
  children: React.ReactNode,
  title?: string,
  open?: boolean,
  Classes?: ReturnType<typeof useStyles>
  handleClose: () => void
}

export const DialogModal: React.FC<ModalProps> = ({ children, title, open = false, handleClose, Classes }: ModalProps): React.ReactElement | null => {

  if (!open) {
    return null;
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <IconButton onClick={handleClose}>
          <CloseIcon color="primary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  )
}
