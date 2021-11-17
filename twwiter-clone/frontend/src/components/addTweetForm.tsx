import React from 'react';
import classNames from 'classnames';

import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import { HomeStyles } from '../componentStyle/HomeComponents';
import { Avatar, IconButton, Button, TextareaAutosize, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { FetchAddTweets, setTwetsAddLoadingState } from '../store/ducks/Tweets/actionCreaters';
import { selectAddTweetState } from '../store/ducks/Tweets/selectors';
import { UploadImage } from './uploadImage';
import { uploadImage } from '../utils/uploadImage';
import { LoadingState } from '../store/ducks/User/contracts/user';
interface addTweetFormProps {
  Classes: ReturnType<typeof HomeStyles>
  maxRow?: number
}

export interface ImgObj {
  blobUrl: string;
  file: File;
}

export const AddTweetForm: React.FC<addTweetFormProps> = ({ Classes, maxRow }: addTweetFormProps): React.ReactElement => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState<string>('');
  const [images, setImages] = React.useState<ImgObj[]>([]);
  const AddTweetState = useSelector(selectAddTweetState);
  const limitEditionText = (text.length / 280) * 100;
  const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget && e.currentTarget.value.length < 300) {
      setText(e.currentTarget.value);
    }
  };
  const handleAddTwett = async (): Promise<void> => {
    dispatch(setTwetsAddLoadingState(LoadingState.LOADING));
    let result = [];
    for (let i = 0; i < images.length; i++) {
      const file = images[i].file;
      const { url } = await uploadImage(file);
      result.push(url);
    };
    dispatch(FetchAddTweets({ text, image: result }));
    setText('');
    setImages([]);
  };
  const handleClose = () => {
    dispatch(setTwetsAddLoadingState(LoadingState.NEVER));
  }
  return (
    <>
      <div className={Classes.addFormBody}>
        <Avatar
          className={Classes.tweetAvatar}
          alt={`Your Avatar`}
          src="https://source.unsplash.com/user/erondu"
        />
        <TextareaAutosize
          onChange={handleChangeTextarea}
          value={text}
          className={Classes.addFormTextarea}
          placeholder="что происходит"
          rowsMax={maxRow}
        />
      </div>
      <div className={Classes.addFormBottom}>
        <div className={classNames(Classes.twwetFooter, Classes.addFormBottomActions)}>
          <UploadImage images={images} onChangeImages={setImages} />
        </div>
        <div className={Classes.addFormBottomRight}>
          {
            limitEditionText ?
              <>
                <span>{280 - text.length}</span>
                <div className={Classes.addFormCircleProgress}>
                  <CircularProgress
                    variant="static"
                    size={20}
                    thickness={4}
                    value={limitEditionText < 100 ? limitEditionText : 100}
                    style={limitEditionText > 100 ? { color: 'red' } : undefined}
                  />
                  <CircularProgress
                    style={{ color: 'rgba(0,0,0,0.1)' }}
                    variant="static"
                    size={20}
                    thickness={4}
                    value={100}
                  />
                </div>
              </>
              : null
          }
          <Button
            onClick={handleAddTwett}
            color="primary" variant="contained" disabled={AddTweetState === LoadingState.LOADING || !text || limitEditionText > 100}>
            {AddTweetState === LoadingState.LOADING ? (<div style={{ padding: 10, marginTop: 8 }}><CircularProgress color="inherit" style={{ width: 30, height: 30 }} /></div>) : "Твитнуть"}
          </Button>
          <Snackbar
            open={AddTweetState === LoadingState.ERROR}
            autoHideDuration={6000}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            message="Error with adding New Tweet"
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
        </div>
      </div>
    </>
  )
}
