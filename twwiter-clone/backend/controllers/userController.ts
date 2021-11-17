import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { userModel, UserModelInterface, UserModelDocumentInterface } from '../models/userModal';
import { generteMd5 } from '../utils/generatehash';
import mailer from '../core/mailer';

const isValidateObjectId = mongoose.Types.ObjectId.isValid;

import { SentMessageInfo } from 'nodemailer';
class userConroller {
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const users = await userModel.find({}).exec();

      res.json({
        status: 'success',
        data: users
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
      const userId = req.params.id;

      if (!isValidateObjectId(userId)) {
        res.sendStatus(404);
        return;
      }

      const user = await userModel.findById(userId).populate('tweets').exec();

      if (!user) {
        res.sendStatus(404);
        return;
      }

      res.json({
        status: 'success',
        data: user
      });
    }
    catch (e) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(e)
      });
    }
  };

  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ status: 'error', errors: errors.array() });
        return;
      }

      const data: UserModelInterface = {
        email: req.body.email,
        username: req.body.username,
        fullname: req.body.fullname,
        password: generteMd5(req.body.password + process.env.SECRET_KEY),
        confirmed_hash: generteMd5((req.body.username + process.env.SECRET_KEY) || "asd")
      };

      const user = await userModel.create(data);

      res.json({
        status: 'succes',
        data: user
      });

      mailer.sendMail(
        {
          from: "admin@test.com",
          to: data.email,
          subject: "Подтверждение почты Twitter clone Tutorial",
          html: `Для того, чтобы подтвердить почту, перейдите <a href="http://localhost:${3000}/auth/${data.confirmed_hash}">по этой ссылке</a>`,
        },
        function (err: Error | null, info: SentMessageInfo) {
          if (err) {
            console.log(err);
          } else {
            console.log(info);
          }
        }
      );
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(error)
      });
    }
  };

  async verify(req: any, res: express.Response): Promise<void> {
    try {
      const hash = req.query.hash;
      if (!hash) {
        res.sendStatus(400);
        return;
      }
      const users = await userModel.findOne({ confirmed_hash: hash }).exec();
      if (users) {
        users.confirmed = true;
        users.save();

        res.json({
          status: 'success',
          data: {
            ...users.toJSON(),
            token: jwt.sign({ data: users.toJSON() }, process.env.SECRET_KEY || 'HELOU1Im1Raz', { expiresIn: '30 days' })
          }
        });
      } else {
        res.json({
          status: 'error',
          message: 'User Not Found1'
        });
      }
    }
    catch (e) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(e)
      });
    }
  };

  async afterLogin(req: any, res: express.Response): Promise<void> {
    try {
      const user = req.user ? (req.user as UserModelDocumentInterface).toJSON() : undefined;
      res.json({
        status: 'success',
        data: {
          ...user,
          token: jwt.sign({ data: user }, process.env.SECRET_KEY || 'HELOU1Im1Raz', { expiresIn: '30 days' })
        }
      }
      )
    }
    catch (e) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(e)
      });
    }
  };

  async getUserInfo(req: any, res: express.Response): Promise<void> {
    try {
      const user = req.user ? (req.user as UserModelDocumentInterface).toJSON() : undefined;
      res.json({
        status: 'success',
        data: user
      });
    }
    catch (e) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(e)
      });
    }
  };
}

export const userCtrl = new userConroller();