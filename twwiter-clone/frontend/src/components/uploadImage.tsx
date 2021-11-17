import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';

import { HomeStyles } from '../componentStyle/HomeComponents';
import { ImgObj } from './addTweetForm';
import { ImagesTweet } from './imagesTweet';

interface UploadImaageProps {
  images: ImgObj[],
  onChangeImages: (images: ImgObj[]) => void
}

export const UploadImage: React.FC<UploadImaageProps> = ({ images, onChangeImages }: UploadImaageProps): React.ReactElement => {
  const Classes = HomeStyles();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClickImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleChangeFileInput = React.useCallback((event: Event) => {
    if (event.target) {
      const target = (event.target as HTMLInputElement);
      const file = target.files?.[0];
      if (file) {
        const fileUrlObj = new Blob([file]);
        onChangeImages([...images, {
          blobUrl: URL.createObjectURL(fileUrlObj),
          file
        }]);
      };
    }
  }, [images, onChangeImages]);
  const removeImg = (url: string) => {
    onChangeImages(images.filter(con => con.blobUrl !== url))
  };
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('change', handleChangeFileInput);
    };
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('change', handleChangeFileInput);
      }
    }
  }, [handleChangeFileInput]);
  return (
    <>
      <IconButton onClick={handleClickImage} color="primary">
        <ImageOutlinedIcon style={{ fontSize: 26 }} />
      </IconButton>
      <input ref={inputRef} type="file" hidden />
      <ImagesTweet Classes={Classes} images={images.map(item => item.blobUrl)} removeImg={removeImg} />
    </>
  )
}
