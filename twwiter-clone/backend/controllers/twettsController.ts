import express from 'express';
import { validationResult } from 'express-validator';
import mongoose from 'mongoose';
import { TweetModel, TweetModelInterface } from '../models/TweetModal';

const isValidateObjectId = mongoose.Types.ObjectId.isValid;

class TweetsConroller {
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const tweets = await TweetModel.find({}).populate('user').sort({ 'createdAt': "-1" }).exec();

      res.json({
        status: 'success',
        data: tweets
      });
    }
    catch (e) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(e)
      });
    }
  };

  async show(req: any, res: express.Response): Promise<void> {
    try {
      const tweetId = req.params.id;

      if (!isValidateObjectId(tweetId)) {
        res.sendStatus(404);
        return;
      }

      const tweet = await TweetModel.findById(tweetId).populate('user').exec();

      if (!tweet) {
        res.sendStatus(404);
        return;
      }

      res.json({
        status: 'success',
        data: tweet
      });
    }
    catch (e) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(e)
      });
    }
  };

  async getUserTweets(req: any, res: express.Response): Promise<void> {
    try {
      const userId = req.params.id;

      if (!isValidateObjectId(userId)) {
        res.sendStatus(404);
        return;
      }

      const tweet = await TweetModel.find({ user: userId }).populate('user').exec();

      if (!tweet) {
        res.sendStatus(404);
        return;
      }

      res.json({
        status: 'success',
        data: tweet
      });
    }
    catch (e) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(e)
      });
    }
  };

  async create(req: any, res: express.Response): Promise<void> {
    try {
      const user = req.user;
      if (user) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          res.sendStatus(400);
          return;
        };
        const data: TweetModelInterface = {
          text: req.body.text,
          images: req.body.image,
          user: user._id,
        };
        const tweet = await TweetModel.create(data);
        user.tweets.push(tweet._id);
        res.json({
          status: 'success',
          data: await tweet.populate('user')
        });
      };

    } catch (e) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(e)
      });
    };
  };

  async delete(req: any, res: express.Response): Promise<void> {
    try {
      const user = req.user;
      if (user) {
        const tweetId = req.params.id;

        if (!isValidateObjectId(tweetId)) {
          res.sendStatus(404);
          return;
        }
        const tweet = await TweetModel.findById(tweetId);
        if (tweet && tweet.user.toString() === user._id.toString()) {
          tweet.remove();
          res.send();
        } else {
          res.sendStatus(404);
        };
      };

    } catch (e) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(e)
      });
    }
  };

  async uptade(req: any, res: express.Response): Promise<void> {
    try {
      const user = req.user;
      if (user) {
        const tweetId = req.params.id;
        if (!isValidateObjectId(tweetId)) {
          res.sendStatus(404);
          return;
        }
        const tweet = await TweetModel.findById(tweetId);
        if (tweet && tweet.user.toString() === user._id.toString()) {
          const text = req.body.text;
          tweet.text = text;
          tweet.save();
          res.send();
        } else {
          res.sendStatus(404);
        };
      };

    } catch (e) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(e)
      });
    }
  };
}

export const TweetsCtrl = new TweetsConroller();