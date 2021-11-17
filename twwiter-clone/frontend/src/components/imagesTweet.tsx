import React from 'react';
import { HomeStyles } from '../componentStyle/HomeComponents';
import CancelIcon from '@material-ui/icons/CancelSharp';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';


interface ImagesTweetProps {
  images: string[],
  Classes: ReturnType<typeof HomeStyles>,
  removeImg?: (url: string) => void
}

export const ImagesTweet: React.FC<ImagesTweetProps> = ({ images, Classes, removeImg }: ImagesTweetProps) => {
  const [open, setOpen] = React.useState<string>('');
  const handleClickDialog = (event: any, url: string) => {
    setOpen(url);
    event.stopPropagation();
  };
  const handleClose = (event: any) => {
    setOpen('');
    event.stopPropagation();
  };
  return (
    <div className={Classes.imagesList}>
      {
        images.map((url) => (
          <>
            <div key={url} onClick={(event) => removeImg ? removeImg(url) : handleClickDialog(event, url)} className={Classes.imagesListItem} style={{ backgroundImage: `url(${url})` }} >
              {removeImg && (<IconButton>
                <CancelIcon style={{ fontSize: 26 }} />
              </IconButton>
              )
              }
            </div>
            <Dialog onClose={(event) => handleClose(event)} open={open === url}>
              <div key={url} className={Classes.imagesListItemFullWidth} style={{ backgroundImage: `url(${url})` }} />
            </Dialog>
          </>
        ))
      }
    </div>
  )
}
