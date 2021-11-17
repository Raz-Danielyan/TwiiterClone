import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import multer from 'multer';
import { TweetsCtrl } from './controllers/twettsController';
import { UploadFileCtrl } from './controllers/UploadFileController';
import { userCtrl } from './controllers/userController';
import './core/db';
import { passport } from './core/passport';
import { createTweetValidators } from './valideshion/createTweet';
import { registerValidators } from './valideshion/register';

const app = express();
const upload = multer({ storage: multer.memoryStorage() });


app.use(express.json());
app.use(passport.initialize());

app.get('/users', userCtrl.index);
app.get('/users/me', passport.authenticate('jwt', { session: false }), userCtrl.getUserInfo);
app.get('/users/:id', userCtrl.show);

app.get('/tweets', TweetsCtrl.index);
app.get('/tweets/:id', TweetsCtrl.show);
app.get('/tweets/user/:id', TweetsCtrl.getUserTweets);
app.delete('/tweets/:id', passport.authenticate('jwt'), TweetsCtrl.delete);
app.post('/tweets', passport.authenticate('jwt'), createTweetValidators, TweetsCtrl.create);
app.patch('/tweets/:id', passport.authenticate('jwt'), createTweetValidators, TweetsCtrl.uptade);


app.get('/auth/verify', registerValidators, userCtrl.verify);
app.post('/auth/singnup', registerValidators, userCtrl.create);
app.post('/auth/login', passport.authenticate('local'), userCtrl.afterLogin);

app.post('/upload', upload.single('image'), UploadFileCtrl.index);

app.listen(process.env.PORT, (): void => {
  console.log("SERVER RUUNED");
});